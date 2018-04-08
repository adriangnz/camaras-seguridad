import React, { Component } from 'react';
import {Col, Button, ButtonToolbar} from 'react-bootstrap';
import MyLargeModal from './Modal.js';

class CamaraItem extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          smShow: false,
          lgShow: false
        };
    }
    render() {
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <Col xs={12} sm={4} lg={3}>
                {/* <Well> */}
                    <ButtonToolbar> 
                        <Button
                        className="boton-camara"
                        bsStyle="primary"
                        onClick={() => this.setState({ lgShow: true })}
                        >
                        {this.props.camara.nombre}: {this.props.camara.lugar}
                        <br />
                        <img src={this.props.camara.src} alt={this.props.camara.nombre} className="Fuente"></img>
                        </Button>
                        <MyLargeModal show={this.state.lgShow} onHide={lgClose} camara={this.props.camara}/>
                    </ButtonToolbar>
                {/* </Well> */}
            </Col>
        );
    }
}

export default CamaraItem;