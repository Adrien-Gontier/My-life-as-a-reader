import React, { useContext } from 'react';
import BookDataContext from '../context/BookDataContext';

import EachBook from './EachBook';

export default function LoopEachBook(props) {

  const { bookData, setBookData } = useContext(BookDataContext);

  return (
    <div>  
      {bookData.map((eachBookData) => <EachBook key={eachBookData.idBook} props={eachBookData} propsInProgress={props.props}/>)}
    </div>
  )
}
// TODO improving className of each book will be done