import React from 'react';
import { Link } from 'react-router-dom';

export default function Title() {
    return (
        <div>
            <Link to="/home" className="website-title">My life as a reader</Link>
        </div>
    )
    
}