import React, { Component } from 'react';
import {Grid, Jumbotron, Button, PageHeader} from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Camaras from './Componentes/Camaras';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      camaras: []
    }
  }

  componentWillMount(){
    this.setState({camaras: [
      {
        nombre: 'Camara 1',
        lugar: 'Salon'
      },
      {
        nombre: 'Camara 2',
        lugar: 'Comedor'
      },
      {
        nombre: 'Camara 3',
        lugar: 'Pasillo'
      },
      {
        nombre: 'Camara 4',
        lugar: 'Salon'
      },
      {
        nombre: 'Camara 5',
        lugar: 'Comedor'
      },
      {
        nombre: 'Camara 6',
        lugar: 'Pasillo'
      },
      {
        nombre: 'Camara 7',
        lugar: 'Salon'
      },
      {
        nombre: 'Camara 8',
        lugar: 'Comedor'
      },
      {
        nombre: 'Camara 9',
        lugar: 'Pasillo'
      },
    ]});
  }
  
  render() {

    return (
      <Grid>
        <PageHeader>
          
        </PageHeader>
        <div className="App">
          <Camaras camaras={this.state.camaras} />
        </div>
      </Grid>
    );
  }
}

export default App;
