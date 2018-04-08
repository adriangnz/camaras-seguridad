import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
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
            <Panel bsStyle="primary text-center">
                <Panel.Heading>
                <Panel.Title componentClass="h3">Camaras</Panel.Title>
                </Panel.Heading>
                <Panel.Body>{camaraItems}</Panel.Body>
            </Panel>
        );
    }
}

export default Camaras;