import React from 'react';
import WomanInFrontOfLibrary from "../assets/pexels-abby-chung-1106468.jpg";
import RoutesTitles from '../components/RoutesTitles';


export default function Wishlist() {

    const titlePictures = {title: "Wishlist", pictureSrc: WomanInFrontOfLibrary}


    return (
        <div>
            <RoutesTitles props={titlePictures} />
        </div>
    )
    
}