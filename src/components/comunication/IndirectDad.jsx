import React, { useState } from "react";
import IndirectChildren from "./IndirectChildren"

export default props => {

    const [nome, setNome] = useState("Sem nome")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    function provideInfos(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>Nome: {nome}, Idade: {idade}, {nerd ? "Verdadeiro" : "Falso"}</span>
            <IndirectChildren
                click= {provideInfos}
            />
        </div>
    )
}