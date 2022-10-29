import React from 'react'
import { useParams } from 'react-router-dom'

export default function RoutesTitles(props) {

    const {pageTitle} = useParams(); 
    const picture = props.props; // will be checked

    return (
        <div class="page_title_head">
            <a id="" class="page-title">{pageTitle}</a>
            <img class="" src={picture} alt="" />
        </div>
    )
}