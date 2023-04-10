import React from 'react'
import WomanInFrontOfLibrary from '../assets/pictures/pexels-abby-chung-1106468.jpg'
import LoopEachBook from '../components/LoopEachBook'
import RoutesTitles from '../components/RoutesTitles'

export default function Wishlist() {
    const titlePictures = {
        title: 'Wishlist',
        pictureSrc: WomanInFrontOfLibrary,
    }

    return (
        <div>
            <RoutesTitles props={titlePictures} />
            <LoopEachBook props={'WL'} />
        </div>
    )
}
