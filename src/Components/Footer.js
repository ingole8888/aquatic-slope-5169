import React from "react";
import "./Footer.css"  
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

export default function Footer(){
    return(
        <>
         <div className="footer">
           <div className="logo1">
                   <img
                   src="https://www.verywellfit.com/thmb/h_u0eP6KSAYTivXlcasVYGCCdjQ=/2052x320/filters:no_upscale():max_bytes(150000):strip_icc()/Carb_Manager-9e916e2ec1614c9a9e5213534c1184b3.jpg"
                   alt="logo1"
                   />
            </div>

            <div className="block1">
                <a href="https://www.carbmanager.com/feature-summary">Features</a>
                <a href="https://www.carbmanager.com/premium">Premium</a>
                <a href="https://www.carbmanager.com/recipes">Keto Recipes</a>
                <a href="https://www.carbmanager.com/cookbook">Keto Cookbook</a>
                <a href="https://www.carbmanager.com/articles">Articles</a>
                <a href="https://www.carbmanager.com/about-us">About Us</a>
                <a href="https://www.carbmanager.com/food-index">Foods</a>
                <a href="https://help.carbmanager.com/">Support</a>
                <a href="https://my.carbmanager.com/account/signin">Log In</a>
                <a href="https://my.carbmanager.com/">Join For Free</a>
            </div>

            <div className="block2">
                <a href="https://www.carbmanager.com/gift-cards">Gift Card</a>
                <a href="https://help.carbmanager.com/">Support Center</a>
                <a href="https://forums.carbmanager.com/">Forums</a>
                <a href="https://www.carbmanager.com/terms-of-service">Terms Of Service</a>
                <a href="https://www.carbmanager.com/privacy-policy">Privacy Policy</a>
                <a href="https://www.carbmanager.com/contact">Contact</a>
                <a href="https://status.carbmanager.com/">System Status</a> 
            </div>

            <div className="block3">
                <div><a href="https://www.facebook.com/carbmanager"><FaFacebook/></a></div>
                <div><a href="https://www.instagram.com/carbmanagerapp/"><FaInstagram/></a></div>
                <div><a href="https://www.pinterest.com/carbmanagerapp"><FaPinterest/></a></div>
                <div><a href="https://www.youtube.com/channel/UCmVTbl7NTm_Cd4rA8XJWUVw?sub_confirmation=1"><FaYoutube/></a></div>
            </div>

            <div className="block4"><p>© 2010-2022 Wombat Apps LLC. All Rights Reserved.</p></div>

            <p><i>Carb Manager's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional</i></p>
            <p><i>medical advice, diagnosis, or treatment.</i></p>
            </div>
        </>
    )
}