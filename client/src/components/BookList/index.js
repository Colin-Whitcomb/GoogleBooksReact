import React, { useRef } from 'react'
import './style.css'
import { useBookContext, } from "../../utils/GlobalState"
import { SET_CURRENT_BOOK } from "../../utils/action"
import Col from "../Col"
import Row from "../Row"
import API from '../../utils/API'

function BookListItem({ book }) {
    console.log(book);
    // const currentBookTitle = useRef(null);
    // const currentBookAuthor = useRef(null);
    const [state, dispatch] = useBookContext();

    const handleView = (author, title, description) => {
        // event.preventDefault();
        console.log(author, title, description);
        const currentBook = {title: title, author: author, description: description, }
        dispatch({type: SET_CURRENT_BOOK, book: currentBook })
        console.log(currentBook);
    }

    const handleSave = (author, title, description, image) => {
        console.log("save clicked");
        const savedBook = {title: title, author: author, description: description, image: image};
        console.log(savedBook);
        API.saveBook(savedBook).then(res => {
            console.log("res.data = " + res.data);
        })
    }

    // const handleSearch = (event) => {
    //     event.preventDefault()
    //     API.searchBooks(searchQuery.current.value).then(response => {
    //         searchQuery.current.value = ""
    //         const books = []
    //         for (const book of response.data) {
    //             books.push(book.volumeInfo)
    //         }

    //         dispatch({ type: NEW_QUERY, results: books })
    //     })
    // }

    if (book.description) {
        return (
            <Col columns="col-sm-6 col-md-6 col-lg-6 p-4">
                <Row>
                <Col columns="col-sm-8 col-md-8 col-lg-8 book-item">
                    <p className="text-center mt-3">{book.title}</p>
                    <p className="text-center">Written by: {book.authors.join(",  ")}</p>
                    {/* <p className="text-center">{book.description}</p> */}
                    <button type="button ml-2" className="btn btn-success" onClick={event => handleView(book.authors, book.title, book.description)}>View</button>
                    {'      '}
                    <button type="button ml-2" className="btn btn-success" onClick={event => handleSave(book.authors, book.title, book.description, book.imageLinks.smallThumbnail)}>Save</button>
                </Col>
                <Col columns="col-sm-4 col-md-4 col-lg-4 book-item">
                    <img className="list-img" src={book.imageLinks.smallThumbnail} />

                </Col>
                </Row>
            </Col>
        )
        
    }
    else {
        return null
    }
}


function BookList() {

    const [state, dispatch] = useBookContext()

    if (state.searchResults) {
        return (
        <div className="mt-3">
            <Row attributes="divider-row">
                {state.searchResults.map(book => {
                    return <BookListItem book={book} />
                })}
            </Row>
        </div>
    )
    }

    else {
        return (
            <div className="text-center">Your search results will appear here!</div>
        )
    }
    

}

export default BookList