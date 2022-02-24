import React from "react";
import DirectChildren from "./DirectChildren";

export default props => {

    return (
        <div>
            <DirectChildren
                nome= "Marcos"
                idade= {34}
                nerd= {true}
            />
            <DirectChildren
                nome= "Marcia"
                idade= {18}
                nerd= {false}
            />
        </div>
    )
}