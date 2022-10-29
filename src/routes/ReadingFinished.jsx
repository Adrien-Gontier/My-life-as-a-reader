import React from 'react';
import BooksInLibrary from "../assets/pexels-pixabay-159711.jpg";
import RoutesTitles from '../components/RoutesTitles';


export default function ReadingFinished() {
    return (
        <div>
            <p>Hello world Reading Finished !</p>
            <RoutesTitles props={BooksInLibrary} />
        </div> 
    )
    
}
