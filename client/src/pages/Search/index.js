import React, {useContext} from 'react'
import {UseBookContext} from "../../utils/GlobalState"
import Jumbotron from "../../components/Jumbotron"
import SearchBar from "../../components/SearchBar"
import BookList from "../../components/BookList"
import Navbar from "../../components/Navbar/"

function Search() {
    
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <SearchBar/>
            <BookList/>
        </div>
    )
}

export default Search