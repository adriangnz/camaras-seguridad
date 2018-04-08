import React, { Component } from 'react';
import {Grid, Row, Col, Well, Button, ButtonToolbar} from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import MyLargeModal from './Modal.js';
import './css/CamaraItem.css';

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
            <Col xs={12} sm={4}>
                <Well>
                    <ButtonToolbar> 
                        <Button
                        bsStyle="primary"
                        onClick={() => this.setState({ lgShow: true })}
                        >
                        {this.props.camara.nombre}: {this.props.camara.lugar}
                        </Button>
                        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
                    </ButtonToolbar>
                </Well>
            </Col>
        );
    }
}

export default CamaraItem;