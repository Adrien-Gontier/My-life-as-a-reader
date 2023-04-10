import React from 'react'
import BooksInLibrary from '../assets/pictures/pexels-pixabay-159711.jpg'
import LoopEachBook from '../components/LoopEachBook'
import RoutesTitles from '../components/RoutesTitles'

export default function ReadingFinished() {
    const titlePictures = {
        title: 'Reading finished',
        pictureSrc: BooksInLibrary,
    }

    return (
        <div>
            <RoutesTitles props={titlePictures} />
            <LoopEachBook props={'RF'} />
        </div>
    )
}
