import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {act} from "react";
// import renderer from 'react-test-renderer';
import RecieptUIBox from "./RecieptUIBox.tsx";

test("Instantiation spawns one text box", () => {
    render(<RecieptUIBox />)
    expect(screen.getAllByRole("textbox").length == 1)
})

test("User typing into first text box spawns a second one", () => {
    render(<RecieptUIBox />)
    const box = screen.getByRole("textbox")
    
    act(() => {
        userEvent.type(box, "2")
    })
    

    expect(screen.getAllByRole("textbox").length == 2)
})

test("User, having created a text box, when typing into the 1st, doesn't create a new textbox", () => {
    render(<RecieptUIBox />)
    const boxOriginal = screen.getByRole("textbox")
    
    act(() => {
        userEvent.type(boxOriginal, "2")
    })

    act(() => {
        userEvent.type(boxOriginal, "3")
    })
    
    expect(screen.getAllByRole("textbox").length == 2)
})


