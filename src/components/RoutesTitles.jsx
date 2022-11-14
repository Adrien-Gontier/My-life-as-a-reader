import React from 'react'

export default function RoutesTitles(props) {

    const titlePicture = props.props;

    return (
        <div className="page_title_head">
            <p id="" className="page-title">{titlePicture.title}</p>
            <img className="picture_15_100_size" src={titlePicture.pictureSrc} alt="" />
        </div>
    )
}