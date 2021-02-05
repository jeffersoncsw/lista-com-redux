import React from 'react';
import { connect } from 'react-redux'

const QtdLista = (props) => (
    <h3>Quantidade total da lista {props.listaCompras.length} itens</h3>
);

const mapStateToProps = state => ({
   listaCompras: state.listaCompras, 
});

export default connect(mapStateToProps)(QtdLista);