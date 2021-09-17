import React, { useEffect } from "react";
import DisplayContainer from "./styles";
import fetchCity from '../../services/fetchCity'
import fetchMinMax from "../../services/fetchMinMax";
import {FaSpinner,FaTimes,FaArrowDown,FaArrowUp} from "react-icons/fa";
import { useHistory } from "react-router";

export default function Display(){

    const history = useHistory(); 
    const search = localStorage.getItem('city');
    const [city,setCity] = React.useState('');
    const [minMax,setMinMax] = React.useState([]);
    const goHome = () => {history.push("/")};
    
    const dayName = (day) => {
        const name = new Date(day * 1000)
        return name.toLocaleString("pt-BR", {weekday: "long"}).charAt(0).toUpperCase() + name.toLocaleString("pt-BR", {weekday: "long"}).slice(1,(name.toLocaleString("pt-BR", {weekday: "long"}).indexOf('-') !== -1 ? name.toLocaleString("pt-BR", {weekday: "long"}).indexOf('-') : name.toLocaleString("pt-BR", {weekday: "long"}).length))  
    }

    const setCondition = (condition) => {
        const conditions = {Thunderstorm:"Tempestade", Drizzle:"Garoa", Rain:"Chuva", Snow:"Neve", Clear:"Limpo",Clouds:"Nublado"}
        
        return conditions[condition]
    }

    useEffect(() =>{
        async function fetchData(){
            const response = await fetchCity(search)
            const dataMinMax = await fetchMinMax(response.coord)
            setMinMax(dataMinMax)
            setCity(response)
        }
        fetchData();
    },[search])
    
    return (
        <DisplayContainer>
            <div className="cityDetail">
                {(city.name === undefined || city.weather === undefined || city.sys === undefined || city.main === undefined)
                ?(
                    <FaSpinner className="spinner"/>
                    
                ):(
                    <>
                        <button className="close" onClick={goHome}>
                            <FaTimes className="iconClose" size="18"/>
                        </button>
                        <p className="cityName">{city.name}, {city.sys.country}</p><br/>
                        <p className="cityWeather">{parseFloat(city.main.temp).toFixed(0)}°C, {(city.weather[0].id < 800 && city.weather[0].id > 700)? "Névoa": setCondition(city.weather[0].main)}</p>
                        <ul className="cityInfo">
                            <li>
                                <p className="cityMinMax">
                                     
                                    <FaArrowDown color="#F89B31"/> <strong>{parseFloat(city.main.temp_min).toFixed(0)}°</strong> {' '} 
                                    &nbsp;&nbsp;
                                    <FaArrowUp color="#F89B31"/> <strong>{parseFloat(city.main.temp_max).toFixed(0)}°</strong> {' '}
                                    &nbsp;&nbsp;                                  
                                    Sensação {' '}
                                    <strong>{parseFloat(city.main.feels_like).toFixed(0)}° C</strong>
                                </p>
                            </li>
                            <li>
                                <p className="cityWind">
                                    Vento {' '} 
                                    <strong>{parseFloat(city.wind.speed * 3.6).toFixed(0)}km/h</strong>
                                    &nbsp;
                                    Humidade {' '}
                                    <strong>{city.main.humidity}%</strong>{' '}
                                </p>
                            </li>
                        </ul>
                        <hr />
                        <ul className="weekList">
                            <li>
                                <strong className="weekName">{dayName(minMax[1][0])}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className="weekMinMax">{parseFloat(minMax[1][1]).toFixed(0)}°{' '}{parseFloat(minMax[1][2]).toFixed(0)}°</p>
                            </li>
                            <li>
                                <strong className="weekName">{dayName(minMax[2][0])}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className="weekMinMax">{parseFloat(minMax[2][1]).toFixed(0)}°{' '}{parseFloat(minMax[2][2]).toFixed(0)}°</p>
                            </li>
                            <li>
                                <strong className="weekName">{dayName(minMax[3][0])}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className="weekMinMax">{parseFloat(minMax[3][1]).toFixed(0)}°{' '}{parseFloat(minMax[3][2]).toFixed(0)}°</p>
                            </li>
                            <li>
                                <strong className="weekName">{dayName(minMax[4][0])}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className="weekMinMax">{parseFloat(minMax[4][1]).toFixed(0)}°{' '}{parseFloat(minMax[4][2]).toFixed(0)}°</p>
                            </li>
                            <li>
                                <strong className="weekName">{dayName(minMax[5][0])}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className="weekMinMax">{parseFloat(minMax[5][1]).toFixed(0)}°{' '}{parseFloat(minMax[5][2]).toFixed(0)}°</p>
                            </li>
                            <li>
                                <strong className="weekName">{dayName(minMax[6][0])}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                                <p className="weekMinMax">{parseFloat(minMax[6][1]).toFixed(0)}°{' '}{parseFloat(minMax[6][2]).toFixed(0)}°</p>
                            </li>
                        </ul>
                    </>
                )
                }
            </div>
        </DisplayContainer>
    )
}