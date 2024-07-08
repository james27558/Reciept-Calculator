import { useState } from "react";
import RecieptTextBox from "./RecieptTextBox";
import RecieptUIRow from "./RecieptUIRow";


export default function RecieptUIBox({recieptNo}) {
    

    return (
        <label htmlFor=""> Reciept No. {recieptNo}
            <RecieptUIRow />
        </label>
    )
}