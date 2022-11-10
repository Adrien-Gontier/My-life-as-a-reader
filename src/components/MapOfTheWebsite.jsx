import React from 'react';
import BookList from "../assets/books.json";


export default function MapOfTheWebsite() {


  const idBooks = BookList.map((eachIdBook => <p key={eachIdBook.id}>{eachIdBook.author_name} {eachIdBook.title_of_the_book}</p> ));


  // will be continu

  return (
    <div className="all-pages-links">
        <p>Hello world MapOfTheWebsite !</p>
        {/* TODO put the links here */}
        <div>{idBooks}</div>
    </div>
  )
}
