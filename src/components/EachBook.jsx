import React from 'react';

// TODO improving className of each book will be done
export default function EachBook({props}) {

  const bookData = props;
  const inProgressBook = props.propsInProgress;

  const authorName = <p className="books__author-name">{bookData.author_name}</p>;
  const authorDateBornDeath = <p className="books__author-date-born-death">{bookData.author_date_born_death}</p>
  const titleOfTheBook = <p className="books__title-of-the-book">{bookData.title_of_the_book}</p>;
  const bookYearPublication = <p className="books__book-year-publication">{bookData.book_year_publication}</p>;

  const divTagOne = <div>{authorName}{authorDateBornDeath}{titleOfTheBook}{bookYearPublication}</div>;

  const bookSummaryParagraph = bookData.book_summary.map((eachSummaryParagraph) => <p key={bookData.book_summary.indexOf(eachSummaryParagraph)}>{eachSummaryParagraph}</p>);
  const summaryTitle = <p className="books__summary-title">Summary</p>;
  const bookSummary = <section className="books__book-summary">{bookSummaryParagraph}</section>; // fix the book summary with .map

  const divTagTwo = <div>{summaryTitle}{bookSummary}</div>
  
  const oneBookTitleTest = bookData.inProgress == inProgressBook ? <div id="" className="books">{divTagOne}{divTagTwo}</div> : null;

  return (

    <>
     {oneBookTitleTest} 
    </>

  )
}
