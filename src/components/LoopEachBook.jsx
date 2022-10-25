import React from 'react';
import BooksList from '../assets/books.json';
import EachBook from './EachBook';

export default function LoopEachBook() {

  return (
    <div>  
      {BooksList?.map((eachBook) => <div key={eachBook.idBook}><EachBook props={eachBook} /></div>)}
    </div>
  )
}

// WILL BE CONTINUE