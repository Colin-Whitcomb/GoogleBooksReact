import React from 'react'
import { useBookContext } from "../../utils/GlobalState"
import { SET_CURRENT_BOOK } from "../../utils/action"

function Jumbotron() {

    const [state, dispatch] = useBookContext()

    const handleClear = () => {
        const currentBook = {title: "React Google Books Search", author: "Search for and Save Books of Interest"}
        dispatch({type: SET_CURRENT_BOOK, book: currentBook })
        console.log(currentBook);
    }



    return (

        <div className="jumbotron">
            <h4 className="text-center display-4">{state.currentBook ? state.currentBook.title : "React Google Books Search"}</h4>
            <p className="text-center lead">{state.currentBook ? state.currentBook.author : "Search for and Save Books of Interest"}</p>
            <p className="text-center lead">{state.currentBook ? state.currentBook.description : ""}</p>
            <button className="btn btn-danger float-right" onClick={event => handleClear()}>X</button>
        </div>

    )
}

export default Jumbotron