const INITIAL_STATE = {fluxo: 0, senhasList: [], secao: "SECAO 01", guiche: "GUICHE 01", senhasFila: 0, atendente: "LEANDRO OLIVEIRA", senhaAtual: 0, clienteAtual: "Leandro Oliveira", prioridade: "COMUM", servico: "Servico97", atividade: "Atividade97"}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FLUXO_CHANGED':
            return { ...state, fluxo: action.payload}
        case 'TICKET_CHANGED':
            return { ...state, senhaAtual: action.payload}
        case 'FILA_CHANGED':
            return { ...state, senhasFila: action.payload}
        case 'SENHAS_FILA_CHANGED':
            return { ...state, senhasList: action.payload}
        default:
            return state
    }
}