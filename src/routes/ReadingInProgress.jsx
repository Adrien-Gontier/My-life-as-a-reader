import React from "react";
import BookOpen from "../assets/pexels-pixabay-415071.jpg"
import LoopEachBook from "../components/LoopEachBook";
import RoutesTitles from "../components/RoutesTitles";

export default function ReadingInProgress() {

    return (
        <div>
            <p >Hello world Reading in progress !</p>
            <RoutesTitles props={BookOpen} />
            <div><LoopEachBook /></div>
        </div>

    )
}
