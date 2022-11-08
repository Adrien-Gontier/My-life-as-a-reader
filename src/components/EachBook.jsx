import React from 'react';


export default function EachBook(props) {

  const bookData = props.props;

  const authorName = <p className="author-name">{bookData.author_name}</p>;
  const authorDateBornDeath = <p className="author-date-born-death">{bookData.author_date_born_death}</p>
  const titleOfTheBook = <p className="title-of-the-book">{bookData.title_of_the_book}</p>;
  const bookYearPublication = <p className="book-year-publication">{bookData.book_year_publication}</p>;

  const divTagOne = <div>{authorName}{authorDateBornDeath}{titleOfTheBook}{bookYearPublication}</div>;

  const bookSummaryParagraph = bookData.book_summary.map((eachSummaryParagraph) => <p key={bookData.book_summary.indexOf(eachSummaryParagraph)}>{eachSummaryParagraph}</p>);
  const summaryTitle = <p className="summary-title">Summary</p>;
  const bookSummary = <section className="book-summary">{bookSummaryParagraph}</section>; // fix the book summary with .map

  const divTagTwo = <div>{summaryTitle}{bookSummary}</div>
  
  const oneBookTitleTest = bookData.inProgress == props.propsEncore ? <div id="" className="books">{divTagOne}{divTagTwo}</div> : null;

  return (

    <>
     {oneBookTitleTest} 
    </>

  )
}
