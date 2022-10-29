import React from "react";
import BookOpen from "../assets/pexels-pixabay-415071.jpg"
import RoutesTitles from "../components/RoutesTitles";
import LoopEachBook from "./LoopEachBook";

export default function ReadingInProgress() {

    return (
        <div>
            <p >Hello world Reading in progress !</p>
            <RoutesTitles props={BookOpen} />
            <div><LoopEachBook /></div>
        </div>

    )
}
