import React from 'react';
import BooksInLibrary from "../assets/pexels-pixabay-159711.jpg";
import RoutesTitles from '../components/RoutesTitles';


export default function ReadingFinished() {


    const titlePictures = {title: "Reading finished", pictureSrc: BooksInLibrary}


    return (
        <div>
            <RoutesTitles props={titlePictures} />
        </div> 
    )
    
}
