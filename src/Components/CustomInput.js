import React, { Component } from 'react';
import './CustomInput.css'

class CustomInput extends Component {
    constructor(props) {
        super(props);

        this.inputUpdated = this.inputUpdated.bind(this);
    }

    inputUpdated(e) {
        e.preventDefault();

        const { value } = e.target;
        const { updatePowerLevel } = this.props;

        updatePowerLevel(value);

    }

    render() {
        return (
            <div className="web">
                <input onInput = {this.inputUpdated} id="search" type="text" className="myInput" placeholder="⚡ Enter power level here... ⚡" />
            </div>
        )
    }
}

export default CustomInput;