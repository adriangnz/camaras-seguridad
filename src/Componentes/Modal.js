import React from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


class MyLargeModal extends React.Component {
    state ={
      nombre : this.props.camara.nombre,
      lugar : this.props.camara.lugar
    };

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
      
      this.props.camara.nombre = this.state.nombre,
      this.props.camara.lugar = this.state.lugar
   
    };

    render() {
      return (
        <Modal
          {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg">  
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg" className="text-center">{this.state.nombre}: {this.state.lugar}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.camara.src} alt={this.props.camara.nombre} className="fuente"></img>
          </Modal.Body>
          <Modal.Footer>
            <Form inline >
              <FormGroup controlId="formInlineName">
                <ControlLabel>Identificador</ControlLabel>{' '}
                <FormControl type="text" placeholder="1" name="nombre" onChange={e => this.change(e)} />
              </FormGroup>{' '}
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Descripcion</ControlLabel>{' '}
                <FormControl type="text" placeholder="Una breve descripcion" name="lugar" onChange={e => this.change(e)} />
              </FormGroup>{' '}
            </Form>         
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
export default MyLargeModal;