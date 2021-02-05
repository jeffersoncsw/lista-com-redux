import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TipoListaAction from './actions/tipoLista'

const TipoLista = ({tipos, tipoLista}) => {
    return (
        <div className="row">
            <h2>Tipos de Listas:</h2>
            <ul>
                {tipos.map((item) => (
                    <tr>
                        <td>
                            <li key={item.id} style={{listStyle: 'none'}}>
                                {item.descricao}
                            </li>
                        </td>
                        <td>
                            <button onClick={() => tipoLista(item)}>Selecionar</button>
                        </td>
                    </tr>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tipos: state.tipoLista.categoria
})

const mapDispatchToProps = (dispatch) => bindActionCreators(TipoListaAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TipoLista);