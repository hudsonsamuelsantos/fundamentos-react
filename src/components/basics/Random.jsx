import React from "react"

export default props => {
    const { min, max } = props
    const randomNumber = parseInt(Math.random() * (max - min)) + min

    return (
        <React.Fragment>
            <h2>Número Aleatório</h2>
            <p>Mínimo: {min}</p>
            <p>Máximo: {max}</p>
            <p>Sorteado: {randomNumber}</p>
        </React.Fragment>
    )
} 