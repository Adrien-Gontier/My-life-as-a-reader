import React from 'react';
import WomanInFrontOfLibrary from "../assets/pexels-abby-chung-1106468.jpg";
import RoutesTitles from '../components/RoutesTitles';


export default function Wishlist() {

    const titlePictures = {title: "Reading finished", pictureSrc: WomanInFrontOfLibrary}


    return (
        <div>
            <p>Hello world Wishlist !</p>
            <RoutesTitles props={titlePictures} />
        </div>
    )
    
}