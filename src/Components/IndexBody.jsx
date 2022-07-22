import "./IndexBody.css"
import {Link} from "react-router-dom"

export default function IndexBody(){
    return(
        <>
          <div className="box1">
            <div className="box1a">
                <h1>Keto & Low-Carb</h1>
                <h1>Made Easy</h1>
                <h2>The #1 Low-Carb and Keto Diet App</h2>
                <h3>For healthy & sustainable low-carb living</h3>
                <input type="text" placeholder="Enter Email Address"/>
                <button><Link to="/signup">Create Free Account</Link></button>
                <div className="box1as">
                <div>
                <img
                src="https://www.carbmanager.com/_nuxt/img/cd5b00b.png"
                alt=""
                />
                </div>
                <div>
                <img
                src="https://www.carbmanager.com/_nuxt/img/189f2dc.png"
                alt=""
                />
                </div>
                </div>
            </div>
            <div className="box1b">
                <img
                src="https://www.carbmanager.com/_nuxt/img/9bfac4e.png"
                alt=""
                />
            </div>
          </div>
          <div className="box2">
            <div>
                <img
                src="https://images.prismic.io/cm-website/85c79988-767d-486a-82ca-9e9482b92455_company-1%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
            </div>
            <div>
            <img
                src="https://images.prismic.io/cm-website/6bd07041-3f55-485d-89c1-5229f6555f10_company-2%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
            </div>
            <div>
            <img
                src="https://images.prismic.io/cm-website/a0b2f5b5-ccfe-4a2f-917e-d42744ff546c_company-3%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
            </div>
            <div>
            <img
                src="https://images.prismic.io/cm-website/9606bffa-ce4e-4669-931f-bd24ffacf062_company-4%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
            </div>
            <div>
            <img
                src="https://images.prismic.io/cm-website/9cb7402b-b14f-45e7-9b92-9eeddfb5973f_company-5%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
            </div>
            <div>
            <img
                src="https://images.prismic.io/cm-website/7edf097e-db2c-4f7b-9384-3017911f6fc0_company-6%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
            </div>
          </div>
        </>
    )
}