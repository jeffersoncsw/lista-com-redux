import { combineReducers } from 'redux';

import listaCompras from './listaCompras';
import tipoLista from './tipoLista'


export default combineReducers({
    listaCompras,
    tipoLista,
});