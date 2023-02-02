import React from 'react'

export default function RoutesTitles({props}) {

    const titlePicture = props;

    return (
        <div className="page-title-head">
            <h1 id="" className="page-title-head__page-title">{titlePicture.title}</h1>
            <img className="page-title-head__picture" src={titlePicture.pictureSrc} alt="" />
        </div>
    )
}