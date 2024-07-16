import { useState } from "react";
import RecieptTextBox from "./RecieptTextBox.tsx";
import RecieptUIRow from "./RecieptUIRow.tsx";
import React from "react";

interface props {
    recieptNo: number
    nameArray: string[]
}

function RecieptUIBox({nameArray = [""], recieptNo = 0} : props) {
    let UIRowComponents = nameArray.map(currentName => {
        return <RecieptUIRow name={currentName} />
    }) 

    return (
        <label htmlFor=""> Reciept No. {recieptNo}
            {UIRowComponents}
        </label>
    )
}

export default RecieptUIBox;