import React from 'react';
import {Modal, Button} from 'react-bootstrap';


class MyLargeModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg" className="text-center">{this.props.camara.nombre}: {this.props.camara.lugar}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.camara.src} alt={this.props.camara.nombre} className="Fuente"></img>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
export default MyLargeModal;