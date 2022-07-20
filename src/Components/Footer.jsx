import React from "react";
import "./Footer.css"  
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

export default function Footer(){
    return(
        <>
        <div className="allfooter">
           <div className="logo1">
                   <img
                   src="https://www.verywellfit.com/thmb/h_u0eP6KSAYTivXlcasVYGCCdjQ=/2052x320/filters:no_upscale():max_bytes(150000):strip_icc()/Carb_Manager-9e916e2ec1614c9a9e5213534c1184b3.jpg"
                   alt="logo1"
                   />
            </div>

            <div className="block1">
                <a href="">Features</a>
                <a href="">Premium</a>
                <a href="">Keto Recipes</a>
                <a href="">Keto Cookbook</a>
                <a href="">Articles</a>
                <a href="">About Us</a>
                <a href="">Foods</a>
                <a href="">Support</a>
                <a href="">Log In</a>
                <a href="">Join For Free</a>
            </div>

            <div className="block2">
                <a href="">Gift Card</a>
                <a href="">Support Center</a>
                <a href="">Forums</a>
                <a href="">Terms Of Service</a>
                <a href="">Privacy Policy</a>
                <a href="">Contact</a>
                <a href="">System Status</a> 
            </div>

            <div className="block3">
                <div><a href=""><FaFacebook/></a></div>
                <div><a href=""><FaInstagram/></a></div>
                <div><a href=""><FaPinterest/></a></div>
                <div><a href=""><FaYoutube/></a></div>
            </div>
        </div>
        </>
    )
}