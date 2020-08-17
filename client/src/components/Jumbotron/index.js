import React from 'react'
import { useBookContext } from "../../utils/GlobalState"

function Jumbotron() {

    const [state, dispatch] = useBookContext()

    

    return (

        <div className="jumbotron">
            <h4 className="text-center display-4">{state.currentBook ? state.currentBook.title : "React Google Books Search"}</h4>
            <p className="text-center lead">{state.currentBook ? state.currentBook.author : "Search for and Save Books of Interest"}</p>
            <p className="text-center lead">{state.currentBook ? state.currentBook.description : ""}</p>
            <img className="list-img" src={state.currentBook ? state.currentBook.image : ""} />
        </div>

    )
}

export default Jumbotron