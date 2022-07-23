import "./Reciepes.css";
import  Navbar  from "./Navbar";
import Footer from "./Footer"

export default function Reciepes(){
    return(
        <>
        <Navbar/>

        {/* reciepes start */}
        <div className="con1">
           <div className="con1a">
            <h1>Explore Over 50,000+ Unique Low-</h1>
            <h1>Carb and Keto Recipes</h1>
           </div>
           <div className="con1b">
            <input placeholder="search reciepes"/>
            <button>Search</button>
           </div>
           <div className="con1c">
            <p>Cant think of anything? Try these popular tags</p>
            <div>
                <button>Gluten Free</button>   <button>Quick & Easy</button>   <button>Snacks</button>   <button>Desserts</button>
            </div>
           </div>
        </div>


        {/* reciepes end */}
        <Footer/>
        </>
    )
}