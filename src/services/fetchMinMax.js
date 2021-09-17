import api from "./api";

const key = 'ee50584d865271b52135a393ccca1756';
const lang = 'pt_br';
const units = 'metric'
const exclude = 'minutely,hourly,alerts'

const url = `onecall?exclude=${exclude}&appid=${key}&units=${units}&lang=${lang}&`

export default async function fetchMinMax(city){
    const response = await api.get(url+`lat=${city.lat}&lon=${city.lon}`);
    const weakForecast = []

    for (const dayWeak of response.data.daily){
        weakForecast.push([dayWeak.dt,dayWeak.temp.min,dayWeak.temp.max])
    }

    return weakForecast
}

