import React from 'react';
import PileOfBooks from "../assets/pictures/pexels-sharon-mccutcheon-1148399.jpg";
import LoopEachBook from '../components/LoopEachBook';
import RoutesTitles from '../components/RoutesTitles';


export default function PileToRead() {


    const titlePictures = { title: "Pile to read", pictureSrc: PileOfBooks }


    return (
        <div>
            <RoutesTitles props={titlePictures} />
            <LoopEachBook props={"PTR"} />
        </div>

    )

}