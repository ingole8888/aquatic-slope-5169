import React, { useState } from "react"
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi";
export default function Navbar(){
    const [showMedia, setShowMedia]=useState(false);
    return(
        <>
          <nav className="main_nav">
                <div className="logo">
                   <img
                   src="https://www.verywellfit.com/thmb/h_u0eP6KSAYTivXlcasVYGCCdjQ=/2052x320/filters:no_upscale():max_bytes(150000):strip_icc()/Carb_Manager-9e916e2ec1614c9a9e5213534c1184b3.jpg"
                   alt="logo"
                   />
                </div>

                <div className={showMedia ? "menupart mobile-menu":"menupart"}>
                    
                    <div><a href="#">Premium</a></div>
                    <div><a href="#">Reciepes</a></div>
                    <div><a href="#">Articles</a></div>
                    <div><a href="#">CookBook</a></div>
                    <div><a href="#">Support</a></div>
                </div>

                <div className="buttonpart">
                    <div className="buttonpart1">
                    <div><a href="">Log In</a></div>
                    <div><button className="buttonjoin">Join for Free</button></div>
                    </div>

                    <div className="hamburger-menu">
                         <a href="#" onclick={() => setShowMedia(!showMedia)}>
                         <GiHamburgerMenu/>
                         </a>
                    </div>
                </div>
          </nav>
        </>
    )
}