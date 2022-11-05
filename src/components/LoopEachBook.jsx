import React, { useContext } from 'react';
import BookDataContext from '../context/BookDataContext';

import EachBook from './EachBook';

export default function LoopEachBook(props) {

  const { bookData, setBookData } = useContext(BookDataContext);

  // console.log(bookData);


  // do some conditional thing to fix the problem

  return (
    <div>  
      {bookData.map((eachBook) => <div key={eachBook.idBook}><EachBook props={eachBook} propsEncore={props.props}/></div>)}
    </div>
  )
}

// WILL BE CONTINUE