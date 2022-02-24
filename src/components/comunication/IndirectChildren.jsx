import React from "react";

export default props => {

    const click = props.click
    const generateAge = parseInt(Math.random() * (100 - 18)) + 18

    return (
        <div>
            <button
                onClick={_ => click("Marcos", generateAge, true)}
            >Fornecer Informações ao Pai</button>
        </div>
    )
}