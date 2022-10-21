import React from 'react';
import BooksInLibrary from "../assets/pexels-pixabay-159711.jpg";
import Books from "../assets/books.json";
import EachBook from './EachBook';

export default function ReadingFinished() {
    return (
        <div>
            <p>Hello world Reading Finished !</p>
            <div><EachBook /></div>
        </div> 
    )
    
}
