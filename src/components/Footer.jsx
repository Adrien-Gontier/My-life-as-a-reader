import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className="footer">
        <p>Hello world Footer !</p>
        <Link to="/mapofthewebsite">Map of the website</Link>
    </div>
  )
}
