import React, {useContext} from 'react'
import {UseBookContext} from "../../utils/GlobalState"
import Jumbotron from "../../components/Jumbotron"
import SearchBar from "../../components/SearchBar"
import BookList from "../../components/BookList"
import Navbar from "../../components/Navbar/index"

function Search() {
    
    return (
        <div>
            <Jumbotron/>
            <Navbar/>
            <SearchBar/>
            <BookList/>
        </div>
    )
}

export default Search