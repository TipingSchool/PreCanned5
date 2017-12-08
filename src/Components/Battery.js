import React, { Component } from 'react';
import './Battery.css'

class Battery extends Component {
    render() {

        // Destructure Props
        const { powerLevel } = this.props;
        const { batteryColor } = this.props;
        

        const bgColors = batteryColor ;

        const updateBatteryStyle = {
            width: Number(powerLevel * 4),
            backgroundColor: bgColors
        }

        

        return (
            <div className="mainContainer">
                <div style= {updateBatteryStyle} className="batteryFill">
                    <div id="text" className="batteryText">
                        {powerLevel}%
                    </div>
                </div>
            </div>
        )
    }
}

export default Battery;