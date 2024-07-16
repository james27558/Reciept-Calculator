import { useState } from "react"
import RecieptTextBox from "./RecieptTextBox"

export default function RecieptUIRow({name}) {
    const [childPrices, setChildPrices] = useState([0])    

    /*
        Updates the price state array at a given index, replacing that element with a given price
    */
    function childUpdateHandler(price, boxIndex) {
        console.log("finalChildPriceCheck is invoked")

        // Create a new array with the updated price that will replace the prices array in state
        const newChildPrices = childPrices.map((element, index) => {
            if (index != boxIndex) {
                return element
            } else {
                return price
            }
        })

        // Check if the new price is at the end of the array, if so then copy the array but with a 0 at the end
        if (boxIndex == newChildPrices.length - 1) {
            setChildPrices([...newChildPrices, 0])
        } else {
            setChildPrices(newChildPrices)
        }        
    }
    
    return (<label htmlFor=""> {name} 
    {
    // Create the children text boxes based on the price array, which they call the update handler 
    childPrices.map((price, priceIndex) => {
        return <RecieptTextBox index={priceIndex} updateHandler={childUpdateHandler} />
    })} 
    
    {childPrices.length} </label>)
}