import React, { useContext } from 'react';
import BookDataContext from '../context/BookDataContext';

import EachBook from './EachBook';

export default function LoopEachBook(props) {

  const { bookData, setBookData } = useContext(BookDataContext);

  return (
    <div>  
      {bookData.map((eachBook) => <EachBook key={eachBook.idBook} props={eachBook} propsEncore={props.props}/>)}
    </div>
  )
}
