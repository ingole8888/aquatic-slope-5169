import React, { useState } from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi";
export default function Navbar(){
    const [showMedia, setShowMedia]=useState(false);
    return(
        <>
          <div className="main_nav">
                <div className="logo">
                   <Link to="/">
                   <img
                   src="https://www.verywellfit.com/thmb/h_u0eP6KSAYTivXlcasVYGCCdjQ=/2052x320/filters:no_upscale():max_bytes(150000):strip_icc()/Carb_Manager-9e916e2ec1614c9a9e5213534c1184b3.jpg"
                   alt="logo"
                   />
                   </Link>
                </div>

                <div className={showMedia ? "menupart mobile-menu":"menupart"}>
                    <div><a href="https://www.carbmanager.com/feature-summary">Features</a></div>
                    <div><a href="https://www.carbmanager.com/premium">Premium</a></div>
                    <div><Link to="/reciepes">Reciepes</Link></div>
                    <div><a href="https://www.carbmanager.com/articles">Articles</a></div>
                    <div><a href="https://www.carbmanager.com/cookbook">CookBook</a></div>
                    <div><a href="https://help.carbmanager.com/">Support</a></div>
                </div>
                <div className="buttonpart">
                    <div className="buttonpart1">
                    <div><Link to="/login">Log In</Link></div>
                    <div className="buttonpart1a"><Link to="/signup" className="buttonjoin">Join for Free</Link></div>
                    </div>
                    <div className="hamburger-menu" onclick={() => setShowMedia(!showMedia)}>
                         <GiHamburgerMenu/>
                    </div>
                </div>
          </div>
        </>
    )
}