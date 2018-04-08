import React, { Component } from 'react';
import {Grid, PageHeader} from 'react-bootstrap';
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
        lugar: 'La Plaza Via Básico',
        src: 'https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif'
      },
      {
        nombre: 'Camara 2',
        lugar: 'Cama',
        src: 'https://media.giphy.com/media/N97kHQgG33rUI/giphy.gif'
      },
      {
        nombre: 'Camara 3',
        lugar: 'Río Neverí',
        src: 'https://media.giphy.com/media/G697nfhYHcCk0/giphy.gif'
      },
      {
        nombre: 'Camara 4',
        lugar: 'Plaza Central',
        src: 'https://media.giphy.com/media/9r3mtPn0arLJ227VjZ/giphy.gif'
      },
      {
        nombre: 'Camara 5',
        lugar: 'Comedor',
        src: 'https://media.giphy.com/media/l2Rnmi9V7FlV4E5u8/giphy.gif'
      },
      {
        nombre: 'Camara 6',
        lugar: 'Salon',
        src: 'https://media.giphy.com/media/3o7qiZd2ORhXiqoEDe/giphy.gif'
      },
      {
        nombre: 'Camara 7',
        lugar: 'Intercomunal Vistamal',
        src: 'https://media.giphy.com/media/RW9sy8IngoQQU/giphy.gif'
      },
      {
        nombre: 'Camara 8',
        lugar: 'Computación',
        src: 'https://media.giphy.com/media/OfU6ebkq1vDNK/giphy.gif'
      },
      {
        nombre: 'Camara 9',
        lugar: 'Básico',
        src: 'https://media.giphy.com/media/OwCbA2vTn85EI/giphy.gif'
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
