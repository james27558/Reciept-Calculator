import { useState } from "react";
import RecieptTextBox from "./RecieptTextBox";
import RecieptUIRow from "./RecieptUIRow";


export default function RecieptUIBox({recieptNo}) {
    const [st, setSt] = useState(["start"])

    console.log("rerender");

    function add() {
        setSt([...st, "new"])
    }
    
    let unfoldSt = st.map((e) => <> {e} </>)

    return (
        // <>
        //     <p>
        //         {unfoldSt}
        //     </p>

        //     <button onClick={add} value="Click"> Click </button>
        // </>

        <label htmlFor=""> Reciept No. {recieptNo}
            <RecieptUIRow name="Nacoya" />
        </label>
    )
}