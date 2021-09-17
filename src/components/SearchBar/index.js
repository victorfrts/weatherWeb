import React from "react";
import SearchContent from "./styles"
import {FaSearch} from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

export default function SearchBar(props){
    const history = useHistory();

    const [value,setValue] = React.useState('')
    const valueChange = event =>{
        setValue(event.target.value)
    }

    const goNext = () => {
        localStorage.setItem('city', value);
        setValue('')
        history.push("/detail")
    }

    return (
        <SearchContent marginBottom={props.marginBottom} right={props.right} top={props.top}>
            <form className="searchBar" onSubmit={goNext}>
                <input onKeyPress={valueChange} value={value} onChange={valueChange} placeholder="Insira aqui o nome da cidade"/>
                <FaSearch className="iconBar" onClick={goNext}/>              
            </form>
            <hr/>
        </SearchContent>    
    )
}