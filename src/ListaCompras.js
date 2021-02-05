import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as listaComprasActions from './actions/listaCompras'

class ListaCompras extends Component {
    constructor(props){
        super(props);

        console.log(props)
    }

    state = {
        addListaTexto: '',
    }

    addLista = () => {
        this.props.addListaCompras(this.state.addListaTexto);

        this.setState({ addListaTexto: '' });
    };

    render() {
        return (
           <div>
                <input 
                    type="text"
                    value={this.state.addListaTexto}
                    onChange={(e) => this.setState({ addListaTexto: e.target.value })}
                />
                <button type="button" onClick={this.addLista}>Adicionar item</button>
                <ol>
                    { this.props.listaCompras.map(lista => (
                        <li key={lista.id}>{ lista.text }</li>
                    )) }
                </ol>
           </div>
        )
    }
}

const mapStateToProps = state => ({
    listaCompras: state.listaCompras,
});


const mapDispatchToProps = dispatch =>
    bindActionCreators(listaComprasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaCompras);
