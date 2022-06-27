import React, { Component } from 'react'
import { Link } from "react-router-dom";
const NavBar = (props) => {


    return (
        <div>

            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0 text-center nav justify-content-center">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#"><img src="./logo2.jpg" alt="Logo" style={{ height: 40 }} /></Link></li>{/* this is used to set a website icon */}
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"></li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/location">Location</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/checkKart">CheckKart</Link></li>
                            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar

//❤🤣🤣❤❤🤣❤❤❤❤💖😢💖😢😢💖💖//Link to changes the URL to desired endpoint as a  result......Routes&Switch Renders components with respect to the changed URL