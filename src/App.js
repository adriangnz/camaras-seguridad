import React, { Component } from 'react';
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
    ]});
  }
  
  render() {
    return (
      <div className="App">
        <Camaras camaras={this.state.camaras} />
      </div>
    );
  }
}

export default App;
