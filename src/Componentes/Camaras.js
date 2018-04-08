import React, { Component } from 'react';
import CamaraItem from './CamaraItem';

class Camaras extends Component {
    render() {
        let camaraItems;
        if(this.props.camaras){
            camaraItems = this.props.camaras.map( (camara, key) => {
                return (
                    <CamaraItem key={key} camara={camara} />
                );
            });
        }
        return (
            <div className="Camaras">
                {camaraItems}
            </div>
        );
    }
}

export default Camaras;