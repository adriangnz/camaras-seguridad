import React, { Component } from 'react';
import CamaraItem from './CamaraItem';
import './css/Camaras.css';

class Camaras extends Component {
    render() {
        let camaraItems;
        if(this.props.camaras){
            camaraItems = this.props.camaras.map(camara => {
                return (
                    <CamaraItem key={camara.nombre} camara={camara} />
                );
            });
        }
        return (
            <div className="Camaras">
                <p>Camaras</p><br />
                {camaraItems}
            </div>
        );
    }
}

export default Camaras;