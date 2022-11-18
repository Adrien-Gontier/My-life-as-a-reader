import { Link } from "react-router-dom";
import React from 'react';

export default function Navbar() { // TODO : will be continue
    return (
        <div className="nav">
            <div> 
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/wishlist">Wishlist</Link>
            </div>
            <div>
                <Link to="/piletoread">Pile to read</Link>
            </div>
            <div>
                <Link to="/readinginprogress">Reading in progress</Link>
            </div>
            <div>
                <Link to="/readingfinished">Reading finished</Link> 
            </div>
            <div>
                <Link to="/whoami">Who am I</Link>
            </div>
         </div>
    )
}