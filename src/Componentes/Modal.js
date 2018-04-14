import React from 'react';
import {Modal, Button} from 'react-bootstrap';


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
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg" className="text-center">{this.state.nombre}: {this.state.lugar}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.camara.src} alt={this.props.camara.nombre} className="Fuente"></img>
          </Modal.Body>
          <Modal.Footer>
   
                <label>Identificador:</label>
                <input
                    name="nombre"
                    placeholder="First name"
                    onChange={e => this.change(e)}
                  />
                <label>Descripcion:</label>
                <input
                    name="lugar"
                    placeholder="lugar"
                    onChange={e => this.change(e)}
                  />
       
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
export default MyLargeModal;