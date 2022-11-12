import React from 'react';
import BookList from "../assets/books.json";


export default function MapOfTheWebsite() {


  const idBooks = BookList.map((eachIdBook => <div key={eachIdBook.id}><p>{eachIdBook.author_name}</p><p>{eachIdBook.title_of_the_book}</p></div> ));


  // will be continu

  return (
    <div>
        <p>Map Of The Website</p>
        {/* TODO put the links here with each routes of the website */}
        <div className="all-pages-links">{idBooks}</div>
    </div>
  )
}
