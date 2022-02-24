import "./Counter.css"
import React, { Component } from "react";


export default class Counter extends Component {

    state = {
        defaultNumber: this.props.number || 0,
        step: this.props.defaultStep || 5
    };

    increment = () => {
        this.setState({
            defaultNumber: this.state.defaultNumber + this.state.step
        })
    }

    decrement = () => {
        this.setState({
            defaultNumber: this.state.defaultNumber - this.state.step
        })
    }

    setStep = (event) => {
        this.setState({
            step: +event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>
                    Contador
                </h2>
                <h3>
                    {this.state.defaultNumber}
                </h3>
                <div>
                    <label htmlFor="changeStep">Contar a cada: </label>
                    <input 
                        id="changeStep" 
                        type="number" 
                        value={this.state.step} 
                        onChange={this.setStep}
                    />
                </div>
                <div className="Buttons">
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}