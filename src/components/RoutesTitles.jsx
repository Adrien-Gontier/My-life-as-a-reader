import React from 'react'

export default function RoutesTitles(props) {

    const titlePicture = props.props;

    return (
        <div className="page-title-head">
            <p id="" className="page-title-head__page-title">{titlePicture.title}</p>
            <img className="page-title-head__picture" src={titlePicture.pictureSrc} alt="" />
        </div>
    )
}