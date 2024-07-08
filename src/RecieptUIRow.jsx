import { useState } from "react"
import RecieptTextBox from "./RecieptTextBox"

export default function RecieptUIRow(name) {
    // const [childPriceExistanceArray, setChildPriceExistanceArray] = useState([false])

    let arr = [false, true]
    
    
    // var textBoxRow =childPriceExistanceArray.map(
    //     (elem, index) =>  (<div key={index}> {elem} </div>)
    // )

    let res = arr.map(
        (val, index) => <RecieptTextBox index={ index } />
    )

    return (<>

    <label htmlFor=""> {res} </label>
    </>
        
    )
}