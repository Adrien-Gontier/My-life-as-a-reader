import { Link } from "react-router-dom";

export default function Navbar() { // TODO : will be continue
    <div>
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
            <Link to="/piletoread">Reading in progress</Link>
        </div>
        <div>
            <Link to="/readinginprogress">Reading finished</Link> 
        </div>
        <div>
            <Link to="/readingfinished">Contact</Link>
        </div>
        <div>
            <Link to="/whoami">Who am I</Link>
        </div>
    </div>
}