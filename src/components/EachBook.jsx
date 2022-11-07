import React from 'react';


export default function EachBook(props) {

  // console.log(props.propsEncore);

  const bookData = props.props;


  const authorName = <p className="author-name"></p>;
  const authorDateBornDeath = <p className="author-date-born-death"></p>
  const titleOfTheBook = <p className="title-of-the-book"></p>;
  const bookYearPublication = <p className="book-year-publication"></p>;

  const divTagOne = <div>{authorName + authorDateBornDeath + titleOfTheBook + bookYearPublication}</div>;


  const summaryTitle = <p className="summary-title">Summary</p>;
  const bookSummary = <section className="book-summary"></section>; // fix the book summary with .map

  const divTagTwo = <div>{summaryTitle + bookSummary}</div>
  


  const oneBookTitleTest = bookData.inProgress == props.propsEncore ? <div id="" className="books">{divTagOne + divTagTwo}</div> : null;

  
  // WILL BE CONITNUE 
  // TODO each book will be link to another component wich display one book only
  // TODO do conditional for each book to be dixplay or not

  return (

    <div id="" className="books">  {/* that's where I describe a book I anticipate to read. It's divide in flex-box. */}
      <div>
        <p className="author-name"></p>  {/* First name and last name of the author */}
        <p className="author-date-born-death">1928 - 1984</p>  {/* Year of born and year of death of the author. */}
        <p className="title-of-the-book">{oneBookTitleTest}</p>  {/* Title of the book. */}
        <p className="book-year-publication">1983</p>  {/* Year of the publication of the book. If it's more than one year : choose the most relevant year. */}
      </div>
      <div>
        <p className="summary-title">Summary</p>  {/* Title : "summary" of the book. */}
        <section className="book-summary">  {/* Summary of the book. From wikipedia, mostly. */}
          <p>During her childhood, Beth learns the failures of Mister Shaibel. A few months later, she is introduced to a high school teacher who runs a chess club.</p>
          <p>At the age of 13, Beth was adopted by a couple who separated shortly afterwards. At a local high school chess tournament, she wins.</p>
          <p>From tournament to tournament, she is noticed as a prodigy.</p>
          <p>Finally, following an international career, she meets a group of men in a park who play for love of the game.</p>
        </section>
      </div>
    </div>

  )
}
