import React, { Component } from 'react'


import MenuLateralOficial from './menuLateralOficial'
import InfoSenhas from './informacoesSenha'

class Corpo extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            
            <div className="corpoContent">
                <MenuLateralOficial></MenuLateralOficial>
                {/* <InfoSenhas></InfoSenhas> */}
            </div>
        )
    }


}

export default Corpo