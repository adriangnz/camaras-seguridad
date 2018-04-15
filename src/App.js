import React, { Component } from 'react';
import {Grid, PageHeader} from 'react-bootstrap';
import Camaras from './Componentes/Camaras';
import './App.css';
import computacion from './Gifs/computacion.gif';
import eca from './Gifs/eca.gif';
import civil from './Gifs/civil.gif';
import portones from './Gifs/portones.gif';
import decanato from './Gifs/decanato.gif';
import basico from './Gifs/basico.gif';
import ruta from './Gifs/ruta.gif';
import salon from './Gifs/salon.gif';
import cancha from './Gifs/cancha.gif';

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
        lugar: 'Computacion',
        src: computacion
      },
      {
        nombre: 'Camara 2',
        lugar: 'Eca',
        src: eca
      },
      {
        nombre: 'Camara 3',
        lugar: 'Civil',
        src: civil
      },
      {
        nombre: 'Camara 4',
        lugar: 'Basico',
        src: basico
      },
      {
        nombre: 'Camara 5',
        lugar: 'Ruta',
        src: ruta
      },
      {
        nombre: 'Camara 6',
        lugar: 'Salon',
        src: salon
      },
      {
        nombre: 'Camara 7',
        lugar: 'Decanato',
        src: decanato
      },
      {
        nombre: 'Camara 8',
        lugar: 'Cancha',
        src: cancha
      },
      {
        nombre: 'Camara 9',
        lugar: 'Entrada',
        src: portones
      },
    ]});
  }
  
  render() {

    return (
      <Grid>
        <PageHeader>
          <div className="text-center">Camaras de Seguridad</div>
        </PageHeader>
        <div className="App">
          <Camaras camaras={this.state.camaras} />
        </div>
      </Grid>
    );
  }
}

export default App;
