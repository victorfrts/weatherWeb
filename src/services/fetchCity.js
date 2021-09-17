import api from "./api";

const key = 'ee50584d865271b52135a393ccca1756';
const lang = 'pt_br';
const units = 'metric'

const url = `weather?appid=${key}&lang=${lang}&units=${units}&q=`


export default async function fetchCity(city){
    const response = await api.get(url+city);
    return response.data 
}

