import React, { useRef } from 'react'
import { useBookContext, } from "../../utils/GlobalState"
// import { SET_CURRENT_BOOK } from "../../utils/action"
import Col from "../Col"
import Row from "../Row"
// import API from '../../utils/API'



function savedBookListItem({ book }) {
    console.log(book);
  
    const [state, dispatch] = useBookContext();


    if (book.description) {
        return (
            <Col columns="col-sm-6 col-md-6 col-lg-6 p-4">
                <Row>
                <Col columns="col-sm-8 col-md-8 col-lg-8 book-item">
                    <p className="text-center mt-3">{book.title}</p>
                    <p className="text-center">{book.author.join(",  ")}</p>
                    {/* <p className="text-center">{book.description}</p> */}
                </Col>
                <Col columns="col-sm-4 col-md-4 col-lg-4 book-item">
                    {/* <img className="list-img" src={book.imageLinks.smallThumbnail} /> */}

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