import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar"
import List from "../../components/List"
import Display from "../../components/Display"

export default function Detail() {
    return(
        <div>
            <Header/>
            <Display/>
            <SearchBar/>
            <List/>
        </div>
    )
}