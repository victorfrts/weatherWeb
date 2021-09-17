import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar"
import List from "../../components/List"

export default function Main() {
    return(
        <div>
            <Header/>
            <SearchBar/>
            <List/>
        </div>
    )
}