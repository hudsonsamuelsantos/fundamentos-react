import React, { useState } from "react";
import "./Mega.css"

export default props => {

    function generateNumbers(amount) {
        let numbers = []

        for (let i = 1; i <= amount; i++) {
            let newNumber = parseInt(Math.random() * (60 - 1)) + 1

            if (numbers.includes(newNumber) === false) {
                numbers.push(newNumber)
            }
        }

        return numbers
    }
    
    const [amount, setAmount] = useState(props.amount || 6)
    const defaultNumbers = Array(amount).fill(0)
    const [numbers, setNumbers] = useState(defaultNumbers)

    return (
        <div>
            <h2>Mega Sena</h2>
            <h3>{numbers.join(" ")}</h3>
            <label htmlFor="Amount">Quantos números gerar: </label>
            <input 
                id="Amount" 
                type="number" 
                value={amount} 
                onChange={event => {
                    setAmount(+event.target.value)
                }}
            />
            <div>
                <button onClick={_=> setNumbers(generateNumbers(amount))}>Gerar números</button>
            </div>
        </div>
    )
}