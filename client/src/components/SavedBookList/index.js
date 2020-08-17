import React, { useEffect } from "react";
import { useBookContext } from "../../utils/GlobalState"
import { UPDATE_BOOKS } from "../../utils/action"
import SavedBookListItem from '../../components/SavedBookListItem'
import Row from "../../components/Row"
import API from '../../utils/API'

const SavedBookList = () => {

    useEffect(() => {
        getSavedBooks();
   }, []);

    const [state, dispatch] = useBookContext();

    const getSavedBooks = () => {
        // console.log('useEff called');
        API.getBooks()
          .then(res => dispatch({ type: UPDATE_BOOKS, books: res.data }))
          .catch(err => console.log(err));
          console.log(state.books);
      }

    return (
        <div>
            <Row attributes="divider-row">
                {state.books.map(book => {
                    return <SavedBookListItem book={book} />
                })}
            </Row>
        </div>
    )
}

export default SavedBookList