import React, { Component } from 'react';
import './css/CamaraItem.css';

class CamaraItem extends Component {
    render() {
        return (
            <div className="CamaraItem">
                <div className="Camara">
                    {this.props.camara.nombre}: {this.props.camara.lugar}
                </div>
            </div>
        );
    }
}

export default CamaraItem;