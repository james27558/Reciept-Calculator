import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {act} from "react";
// import renderer from 'react-test-renderer';
import RecieptTextBox from "./RecieptTextBox";

test("When component is rendered, a textbox should appear on screen", () => {
    render(<RecieptTextBox />)
    const box = screen.getByRole("textbox")
    
    expect(box).toBeInTheDocument();
})

test("User, typing an invalid alphabet character, doesn't appear in the text box", () => {
    render(<RecieptTextBox />)
    const boxOriginal = screen.getByRole("textbox")
    
    act(() => {
        userEvent.type(boxOriginal, "a")
    })
    
    expect(boxOriginal).toHaveValue("");
})

test("User, typing a number, does appear in the text box", () => {
    render(<RecieptTextBox />)
    const boxOriginal = screen.getByRole("textbox")
    
    
    act(() => {
        userEvent.type(boxOriginal, "1")
    })
    
    expect(boxOriginal).toHaveValue("1");
})

test("User, typing a number and decimal point, does appear in the text box", () => {
    render(<RecieptTextBox />)
    const boxOriginal = screen.getByRole("textbox")
    
    act(() => {
        userEvent.type(boxOriginal, "1.")
    })
    
    expect(boxOriginal).toHaveValue("1.");
})

test("User, typing a number, decimal point and number, does appear in the text box", () => {
    render(<RecieptTextBox />)
    const boxOriginal = screen.getByRole("textbox")
    
    act(() => {
        userEvent.type(boxOriginal, "1.1")
    })
    
    expect(boxOriginal).toHaveValue("1.1");
})