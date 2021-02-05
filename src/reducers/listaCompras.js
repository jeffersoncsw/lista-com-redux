export default function listaCompras(state = [], action){

    switch (action.type){
        case 'ADD_LISTA_COMPRAS':
            //adicionar na lista de compras
            return [ ...state, {text: action.text} ]
        default:
            return state;
    }
};