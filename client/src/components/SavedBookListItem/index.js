import React, { useRef } from 'react'
import { useBookContext, } from "../../utils/GlobalState"
import { SET_CURRENT_BOOK, UPDATE_BOOKS } from "../../utils/action"
import Col from "../Col"
import Row from "../Row"
import API from "../../utils/API"



function savedBookListItem({ book }) {
    console.log(book);
  
    const [state, dispatch] = useBookContext();

    const handleView = (author, title, description) => {
        // event.preventDefault();
        console.log(author, title, description);
        const currentBook = {title: title, author: author, description: description, }
        dispatch({type: SET_CURRENT_BOOK, book: currentBook })
        console.log(currentBook);
    }

    const handleDelete = (id) => {
        console.log('delete called');
        API.deleteBook(id).then(getSavedBooks())
    }

    const getSavedBooks = () => {
        // console.log('useEff called');
        API.getBooks()
          .then(res => dispatch({ type: UPDATE_BOOKS, books: res.data }))
          .catch(err => console.log(err));
          console.log(state.books);
          window.location.reload();
      }

    if (book.description) {
        return (
            <Col columns="col-sm-6 col-md-6 col-lg-6 p-4">
                <Row>
                <Col columns="col-sm-8 col-md-8 col-lg-8 book-item">
                    <p className="text-center mt-3">{book.title}</p>
                    <p className="text-center">{book.author.join(",  ")}</p>
                    <p>{book._id}</p>
                    {/* <p className="text-center">{book.description}</p> */}
                    <button type="button ml-2" className="btn btn-success" onClick={event => handleView(book.authors, book.title, book.description)}>View</button>
                    {'      '}
                    <button type="button ml-2" className="btn btn-success" onClick={event => handleDelete(book._id)}>Delete</button>
                </Col>
                <Col columns="col-sm-4 col-md-4 col-lg-4 book-item">
                    <img className="list-img" src={book.image} />


                </Col>
                </Row>
            </Col>
        )
        
    }
    else {
        return null
    }
}

export default savedBookListItem;