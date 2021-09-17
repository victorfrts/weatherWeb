import React, { useEffect } from "react";
import ListContent from "./styles";
import fetchCities  from "../../services/fetchCites";

export default function List(){
    
    const [cities, setCities] = React.useState([])

    useEffect(() =>{
        async function fecthData(){
            const response = await fetchCities()
            setCities(response)
        }
        fecthData()
    },[]);
    
    return(
        <ListContent>
            {cities.length === 0? 
                ''
                :
                <>
                <h2>
                    Capitais
                </h2>
                <ul className="listCities">
                    <li className="minMax">Min Máx</li>
                    <li className="hideMinMax">Min Máx</li>
                    {cities.map(city => (
                        <li key={city.id}>
                            {parseFloat(city.main.temp_min).toFixed(0)}° {parseFloat(city.main.temp_max).toFixed(0)}° {city.name}
                        </li>
                    ))}
                </ul>
                </>
            }
        </ListContent>
    )
}