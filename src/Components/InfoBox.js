import React, { Component } from 'react';
import './InfoBox.css'

class InfoBox extends Component {

    render() {
        const { alertText } = this.props;

         return (
            <div className="alert">
                {alertText}
            </div>
        )
    }
}

export default InfoBox;