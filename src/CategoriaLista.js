import React from 'react'
import { connect } from 'react-redux'

const CategoriaLista = ({tipo}) => {
    return (
        <div className="row">
            <h3>Lista de <strong>{tipo.descricao}</strong></h3>
        </div>
    )
}

export default connect((state) => ({
    tipo: state.tipoLista.tipo
})) (CategoriaLista);