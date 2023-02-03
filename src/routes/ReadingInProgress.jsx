import React from "react";
import BookOpen from "../assets/pictures/pexels-pixabay-415071.jpg"
import LoopEachBook from "../components/LoopEachBook";
import RoutesTitles from "../components/RoutesTitles";

export default function ReadingInProgress() {

    const titlePictures = { title: "Reading in progress", pictureSrc: BookOpen }

    return (
        <div>
            <RoutesTitles props={titlePictures} />
            <LoopEachBook props={"RIP"} />
        </div>

    )
}
