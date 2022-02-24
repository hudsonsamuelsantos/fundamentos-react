import React from "react";
import { useState } from "react";

export default props => {

    const [value, setValue] = useState('')

    function whenChange(event) {
        setValue(event.target.value)
    }

    return (
        <div>
            <h2>Digite para testar:<br/>{value}</h2>
            <input 
                type="text" 
                value={value} 
                onChange={whenChange} 
                placeholder="Componente controlado"
            />
        </div>
    )
}