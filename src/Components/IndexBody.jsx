import "./IndexBody.css"
import {Link} from "react-router-dom"
import { FaCheck, FaCookieBite, FaStarHalfAlt,FaFire } from 'react-icons/fa';
import { GiChefToque,GiKitchenKnives, GiRoundShield, GiRoundStar, GiStopwatch } from 'react-icons/gi';

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

          <div className="box3">
            <div className="box3a">
                <h1>Get to Know Keto & Low-Carb</h1>
                <h3>And get results in as little as 3 weeks.</h3>
            </div>
            <div className="box3b">
                <img
                src="data:image/jpeg;base64,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"
                alt=""
                />
            </div>
          </div>

          <div className="box4">
            <div className="box4a">
                <div box4a1>
                <img
                src="https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
                </div>
                <div className="box4a2">
                    
                </div>
            </div>
            <div className="box4b">
                <h1>Keto for you .</h1>
                <p>Personalize your low-carb journey and meet all your important health goals.  </p>
                <p>We’re more than just a Keto calorie counter.</p>
                <p>Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of </p>
                <p>other apps and devices via Apple Health and Google Fit, helping you to:</p>
                <div className="box4b1">
                    <div><FaCheck/>    Lose weight quickly</div>
                    <div><FaCheck/>    Reduce inflammation</div>
                    <div><FaCheck/>    Optimize energy</div>
                    <div><FaCheck/>    Gain mental clarity</div>
                    <div><FaCheck/>    Restore balance</div>
                    <div><FaCheck/>    Manage cravings</div>
                </div>
            </div>
          </div>
          <div className="box5">
            <div className="box5a">
             <h1>Keto for everyone .</h1>
             <p>Keto isn’t just another diet. It’s a lifestyle. And Carb Manager</p>
             <p>isn’t just another Keto diet tracker. Our state-of-the-art features</p>
             <p>make it convenient and fun for everyone to join in.</p>
             <p> <GiChefToque/>    Save time with automatic meal plans and grocery lists tailored to specific food preferences and allergies</p>
             <p><FaCookieBite/>    Stay inspired by our database of thousands of Keto recipes</p>
             <p><GiKitchenKnives/>    Have fun tracking the macros and micros of over 1 million foods with cutting-edge features, like our popular Snap Foods feature that uses photo recognition technology</p>
            </div>
            <div className="box5b">
            <div className="box5b2"></div>
                <div className="box5b1">
                    <img
                    src="https://images.prismic.io/cm-website/1b4d20a7-fd3b-42a0-ba35-cae306374b4a_article_2%402x.jpg?auto=compress%2Cformat&w=1&auto=format&fit=max"
                    alt=""
                    />
                </div>
                
            </div>
          </div>

          <div className="box4">
            <div className="box4a">
            <div className="box4a22">
                    
                    </div>
                <div box4a1>
                <img
                src="https://images.prismic.io/cm-website/26adf515-88d3-46ff-b5c4-f73eb3c6c78f_article_3%402x.jpg?auto=compress%2Cformat&w=1&auto=format&fit=max"
                alt=""
                />
                </div>
                
            </div>
            <div className="box4b">
                <h1>Keto for life .</h1>
                <p>Carb Manager is here to help you stick to your low-carb lifestyle.  </p>
                
                <div className="box4b11">
                    <div><GiRoundShield/>    Lose weight quickly</div>
                    <div><GiRoundShield/>    Reduce inflammation</div>
                    <div><GiRoundShield/>    Optimize energy</div>
                </div>
                <p>Our popular blog will keep you inspired and informed. And our</p>
                <p>active social media community lets you stay connected to other</p>
                <p>low-carb folks, so you’ll always get the support you need.</p>
            </div>
            </div>

            <div className="box6">
                <h1>Trending Keto and Low-Carb Recipes</h1>
                <p>Tasty low-carb Keto recipes the whole family will love.</p>
            </div>
           <div className="box7">
            <div className="box7a">
                <img
                src="https://images.carbmanager.com/KX_qoye6ANti14QJwDRG9MPr2II6VlyI6BfI7AqXouI/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY0NzA2NjYyLWQ2ZGMtNDczYS1hNjBmLTA2YzcxMjdlYmI0My5qcGc_YWx0PW1lZGlh"
                alt=""
                />
                <h2>Low Carb Shakshuka with Goat Cheese</h2>
                <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
                <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
                <img
                src="https://images.carbmanager.com/6PTRxprvY-P0MmFYoTJ97mivcDBWV_Kauzujqzcsmh0/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjc0ZDQ1YTc0LTQzODEtNGI1OC1hZGVkLTk2ZTI4NTcwNDk0Zi5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Low Carb Thai Chicken Curry with Coconut Rise</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    70 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/3GiCPeI7ee_QrhEAhtX3ssFYDXtjANKtF8Kq0GFMcHs/resize:fit:1400/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2EzMWNiZGMyLTg5YTYtMzZhYi05YjM1LWJjY2UzNGFjMmQwOC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1mN2VhMDVmMi0xN2MxLTQxYTktYTI3Zi1lYWNhODg4Mzk4MDg"
                alt=""
                />
             <h2>The Best Pepermint Motcha Keto Coffee</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    60 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/2zKoELTLzv_GgCsWdQfazC_kgZqkRBOkY93Vd1HU18s/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk3MTk2MjZkLTUyYzAtNGVlZC1iOTAyLTVkYjUyZTJiNmE3Yi5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto Spinach And Artichoke Dip</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/KnXBQ0LC7El7i3zkiyqbHqQ7goPYKq3DUFsJrEFzeFA/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjRiOWNiMmI1LTBhNGMtNDFiZi05NWM1LTQ2ZWYxM2Y5MTIyOS5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto Passover Matzo Ball Soup</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    50 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/_t1191hqUehEd-nYpgl3oEZU_2fP-c_7RgEtyZjCtMw/resize:fit:1400/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2NjMGVlZmI3LWFjZDMtOTE5My1hMDUxLWVhMjc0OTdmYjBhNy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jZDYzZTE2MS02MWQ5LTRmNjgtYjhiZC01MGVhYzZlMmI1YTg"
                alt=""
                />
             <h2>Keto Edible Cookie Dough</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    100 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/QjR4JLAuDeFGX5Z4S4MHnnZH9mf_DUupDRTq1MdU43g/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJlMTFmNWEzLWNlNDUtNGIxNC1iOGMxLTA2MmY2MmI0NjI5Mi5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto Kid-Friendly Pancake Cereal</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    104 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/0VpCSxOuBte9m0JEduQXEEfgtzFj91FPf35jtsW6U9s/resize:fit:1400/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzg3MjY1NjE4LTIyY2UtYjU0NS1lMTVhLWFhZTFlN2Q0NTQxNS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj02YjkxODVlYy1iNDI2LTQyZmUtYjdhYi0xZGJkNzY0MDU4NmU"
                alt=""
                />
             <h2>Keto Simple Chocolate Ganache Tart</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/Loztf6auEq7DeHvGTSilelnNVISHsXr_Fd77kM3Qo4U/resize:fit:1400/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JhNzFkZTZkLWU0Y2UtNGE5OS00MmI3LWFmNmUxMjQ5N2UyOS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj02YTNjMDk0NC04NGIzLTRjMDItYWNiMC1lYzFhZTBmYTE1NWY"
                alt=""
                />
             <h2>Keto Fish Taco Avocado Bowl</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    44 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/247YcapiWRscq9DE-uioC0sYzdowkwrRAne8HsyotoA/resize:fit:1400/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2VkN2QwMjMyLTgxYWQtZDI5MC02MWMyLWI0MzgwNjg4ZTEyNC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kM2JiZjAwZS05ZmYyLTRmOTYtOTBkNS1iZDRjYjdhNTc3NWU"
                alt=""
                />
             <h2>Keto Cloud Bread</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
           </div>
        </>
    )
}