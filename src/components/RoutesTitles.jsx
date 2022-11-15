import React from 'react'

export default function RoutesTitles(props) {

    const titlePicture = props.props;

    return (
        <div className="page-title-head">
            <p id="" className="page-title">{titlePicture.title}</p>
            <img className="picture-15-100-size" src={titlePicture.pictureSrc} alt="" />
        </div>
    )
}