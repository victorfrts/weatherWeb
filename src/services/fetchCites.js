import api from "./api";

const key = 'ee50584d865271b52135a393ccca1756';
const lang = 'pt_br';
const units = 'metric'

const cities = {
    saoPaulo : '3448433',
    rioDeJaneiro: '3451190',
    beloHorizonte: '3470127',
    brasilia:'3410315',
    belem:'3470154',
    salvador:'3450554',
    curitiba:'6322752',
    fortaleza:'6320062',
    manaus:'3663517',
    joaoPessoa:'3397277'
}


const url = `group?id=${cities['saoPaulo']},${cities['rioDeJaneiro']},${cities['beloHorizonte']},${cities['brasilia']},${cities['belem']},${cities['salvador']},${cities['curitiba']},${cities['fortaleza']},${cities['manaus']},${cities['joaoPessoa']}&appid=${key}&lang=${lang}&units=${units}`

export default async function fetchCities(){
    const response = await api.get(url)
    return response.data.list
}
