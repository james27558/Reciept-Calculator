import { useState} from "react"

export default function RecieptTextBox() {
    const [price, setPrice] = useState("")

    // Pattern matches a floating point number or an integer
    const pattern = /^[0-9]+\.{0,1}[0-9]*/
    
    /*
        Returns true if the argument is a valid price (non NaN floating point or integer with no alphabetical characters or symbols except .)
    */
    function validateInput(text) {
        const regexResults = pattern.exec(text)

        return  (regexResults !== null && regexResults.length == 1 && regexResults[0].length == text.length) || text.length == 0
    }


    /*
        Validates the input and sets the state such that the state only contains a non NaN floating point number or integer
    */
    function setInputIfValid(floatOrNaN) {
        
        if (parseFloat(floatOrNaN) !== NaN && validateInput(floatOrNaN)) {
            setPrice(floatOrNaN)
        }

    }

// 
//&& setPrice(e.target.value)
    return (
        
        <input type="text" inputMode ="numeric"  onChange={(e) => setInputIfValid(e.target.value)  } value={price} min="0" max="999"  />
    )
}