import React, { useRef, useState } from 'react'
import "./style.css"
import { useBookContext } from "../../utils/GlobalState"
import { NEW_QUERY } from "../../utils/action"
import API from '../../utils/API'

function SearchBar() {

    const [state, dispatch] = useBookContext()
    const searchQuery = useRef()

    const handleSearch = event => {
        event.preventDefault()
        API.searchBooks(searchQuery.current.value).then(response => {
            searchQuery.current.value = ""
            const books = []
            for (const book of response.data) {
                books.push(book.volumeInfo)
            }

            dispatch({ type: NEW_QUERY, results: books })
        })
    }

    return (

        <div className="ml-2">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" aria-describedby="emailHelp" 
                        ref={searchQuery}
                        placeholder="Search by title here!"
                    />
                </div>
                <button type="button ml-2" class="btn btn-success" onClick={event => handleSearch(event)}>Search</button>
            </form>
        </div>
    )

}

export default SearchBar