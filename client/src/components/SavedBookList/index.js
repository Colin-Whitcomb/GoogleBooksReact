import React, { useEffect } from "react";
import { useBookContext } from "../../utils/GlobalState"
import { UPDATE_BOOKS } from "../../utils/action"
import API from '../../utils/API'

const SavedBookList = () => {



    const [state, dispatch] = useBookContext();

    const getSavedBooks = () => {
        // console.log('useEff called');
        API.getBooks()
          .then(res => dispatch({ type: UPDATE_BOOKS, books: res.data }))
          .catch(err => console.log(err));
          console.log(state.books);
      }

       useEffect(() => {
           getSavedBooks();
        // console.log('useEff called');
        // API.getBooks()
        //   .then(res => dispatch({ type: UPDATE_BOOKS, books: res.data }))
        //   .catch(err => console.log(err));
        //   console.log(state.books);
      }, []);

    return (
        <div>
            <button onClick={() => useEffect()}>Hello</button>
            <li>[{state.books.author}]</li>
        </div>
    )
}

export default SavedBookList