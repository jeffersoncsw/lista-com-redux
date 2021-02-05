const ESTADO_INICIAL = {
    tipo: {},
    categoria: [
    {
        id: 1,
        descricao: "Compras"
    },
    {
        id: 2,
        descricao: "Tarefas"
    },
    {
        id: 3,
        descricao: "Bens a Adquirir"
    },
    ],
};

export default function tipoLista(state = ESTADO_INICIAL, action){
    if(action.type === "TIPO_LISTA"){
        return{
            ...state,
            tipo: action.tipos,
        }
    }
    return state;

}