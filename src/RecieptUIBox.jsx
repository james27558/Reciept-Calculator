import { useState } from "react";
import RecieptTextBox from "./RecieptTextBox";
import RecieptUIRow from "./RecieptUIRow";


function RecieptUIBox({recieptNo}) {
    return (
        <label htmlFor=""> Reciept No. {recieptNo}
            <RecieptUIRow name="Nacoya" />
        </label>
    )
}

export default RecieptUIBox;