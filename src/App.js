import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store/store'

import ListaCompras from './ListaCompras'
import QtdLista from './QtdLista'
import CategoriaLista from './CategoriaLista'
import TipoLista from './TipoLista'



class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <TipoLista />
        <CategoriaLista />
        <ListaCompras />
        <QtdLista />
      </Provider>
    );
  }
}

export default App;
