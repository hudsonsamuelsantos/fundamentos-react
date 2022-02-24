import React from "react";
import If from "./If"

export default props => {

    const user = props.user || {}

    return (
        <div>
            <If test={user && user.name}>
                <p>
                    Seja Bem vindo <strong>{user.name}</strong>!
                </p>
            </If>
            <If test={!user || !user.name}>
                <p>
                    Seja Bem vindo amigão!
                </p>
            </If>
        </div>
    )
}