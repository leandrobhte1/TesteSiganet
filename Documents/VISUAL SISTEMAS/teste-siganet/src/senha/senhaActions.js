export let changeFluxo = (value) => {
    return [{ type: 'FLUXO_CHANGED', payload: value }]
}

export let nextTicket = (value) => {
    return [{ type: 'TICKET_CHANGED', payload: value }]
}

export let changeSenha = (value) => {
    return [{ type: 'FILA_CHANGED', payload: value }]
}

let lista = [];

export let insertSenhaList = (array) => {

    lista.push(array);

    console.log("lista.: ",lista);
    return [{ type: 'SENHAS_FILA_CHANGED', payload: lista }]
}

export let finalizaSenhaList = (item) => {

    console.log("item.: ", item);

    let indice = item - 1;

    console.log("lista length.: ", lista);

    let array = lista;

    array.splice(indice,item);
    
    console.log("lista.: ",array);
    return [{ type: 'SENHAS_FILA_CHANGED', payload: array }]
}