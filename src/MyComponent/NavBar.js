import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import "../css/navbar.css"

export const NavBar = () => {
    return (
        <div className="content-navigation">
            <div className="brand-name">Brand name</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Blogs</Link>
                <Link to="/">Gallery</Link>
            </div>
        </div>
    )
}
