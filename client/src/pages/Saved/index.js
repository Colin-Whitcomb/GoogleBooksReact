import React, {useContext} from 'react'
import {UseBookContext} from "../../utils/GlobalState"
import Jumbotron from "../../components/Jumbotron"
// import SearchBar from "../../components/SearchBar"
// import BookList from "../../components/BookList"
import Navbar from "../../components/Navbar/"
import SavedBookList from "../../components/SavedBookList"

function Saved() {
    
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <SavedBookList/>
        </div>
    )
}

export default Saved