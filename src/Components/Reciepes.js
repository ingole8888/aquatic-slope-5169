import "./Reciepes.css";
import  Navbar  from "./Navbar";
import Footer from "./Footer"
import { FaStarHalfAlt,FaFire } from 'react-icons/fa';
import { GiRoundStar, GiStopwatch } from 'react-icons/gi';

export default function Reciepes(){
    return(
        <>
        <Navbar/>
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
            <p className="con1c">Cant think of anything? Try these popular tags</p>
            <div>
                <button>Gluten Free</button>   <button>Quick & Easy</button>   <button>Snacks</button>   <button>Desserts</button>
            </div>
           </div>
        </div>
        <div className="con2">
            <h1>Popular Recipes</h1>
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
           </div>

           <div className="con2">
            <h1>Newest Recipes</h1>
        </div>

        <div className="box7">
            <div className="box7a">
                <img
                src="https://images.carbmanager.com/gIgKVjxzcOTWJkMtfKhu_eZ-uHGNla5T_54P3_j9yLs/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJlNDRiOGNkLTRjZDUtNDkwZS1iMGIwLWJkOWI0ZmMzNDUyNS5qcGc_YWx0PW1lZGlh"
                alt=""
                />
                <h2>Keto Macroni Salad</h2>
                <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
                <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
                <img
                src="https://images.carbmanager.com/hS60eTTE3Pe_UQTwpdgl_Aj3stuosO3CkRhnXa-3WVU/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjlhMDVhMDRlLTM5MjQtNDRkMS1hOTJjLTBmNmRjOTcxNDU0Ni5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Best Chocolate mint Keto microwave cake</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    70 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/6bKc4ZhYVwX6PQubczF7QXCLBneOklP0xbGykoV0TMY/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQ5NDY0Yjg0LWEzZjgtNDBlMy1iNjY0LTBmYWRiNWFkZTFhYy5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto suassy BBQ Ribs</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    60 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/0ZNQZ1TOS7mQ8f7E1J1Wr4S8CxcKXI2xan9ZlbNd6J0/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjcxNzZjMTIwLTM5ZTQtNGU4NS05MTdlLWEzOTg5NTRiZWNiYS5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>AIP spich and Ginger chicken wings</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/ApVMTbjin70_O3LFGoSHNPhfhQQDy9lnVl3fF3tBFvI/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjAxZmM1YWE0LTQ0MWItNGJhNi1iNGRkLTJmODliNzdlZjk3Yi5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Easy Keto Trail Meal</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    50 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/yLD6Rd7Rj-vEciAjuAHhk8PQoEig2SS1HJEgaZaZdT0/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmQ5YTkzNWUyLWYwMDgtNDYzYS1hYzE4LTI4MzU4NjU2ODBiNC5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto Spicy Trail Meal</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    100 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/DX-wvTGUwXIpmrKzqLEBIOdpIVb5oj8a9UZ9WcYk_LM/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjdkMmQ2MWE2LTdkMzYtNDdhMC04ZjRlLWJlMDMyZDVjMDAxNy5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto Turmeric Trail Mix</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    104 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/rSryophH8Lq2d-BV-zcIrcsH4IprC1_vPJCEYho5Ryk/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjQ4ZTVjYjIyLWY0MWQtNGI3OC1hZTYwLWI0MThiZDZkNmI5OC5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Keto Chocolate and Strwaberry Trail Mix</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
           </div>

           
           <div className="con2">
            <h1>Zero-Waste Keto Recipes for Eco-Friendly Eating</h1>
        </div>

        <div className="box7">
            <div className="box7a">
                <img
                src="https://images.carbmanager.com/we31wxBFNyGroXls5ka3lFyXakpqVBtHGhPNamFYxkY/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmUwMzk2YTdiLTlhMjYtNDhhNS05ODNmLTgwNGZiMjhhOGU5Yy5qcGc_YWx0PW1lZGlh"
                alt=""
                />
                <h2>Zero Waste Keto</h2>
                <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
                <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
                <img
                src="https://images.carbmanager.com/xRe4f_HU4DfamXWiDz7bNLnn54mlrnzp9e7hNeRMxf4/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjNhZDk2ODgzLWJkN2UtNGZjYS1iMTIxLWQzZWMxNjI2MDMxZi5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Zero waste keto chicken</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    70 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/9Ir1CZLRQT7zS19yROjdkQ8sstiDganFynjAK974Wqs/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmM1Y2Y0YWZlLWNkOTItNDQzNi1iMzBmLTRjOTE2YTIyZGU5OS5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Zero Waste Keto celery</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    60 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/0ZNQZ1TOS7mQ8f7E1J1Wr4S8CxcKXI2xan9ZlbNd6J0/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjcxNzZjMTIwLTM5ZTQtNGU4NS05MTdlLWEzOTg5NTRiZWNiYS5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2> Zero Waste Keto Chared chicken </h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    74 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/7-iqBwuR4qtIs1qjqo5kcHxiuOWjX5R8m_ejojHhk_g/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjI0ODQ5YzVlLTcyYjEtNDEzMi1hYTU2LTJlYTIzYThiNDI5Ni5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Zero Waste Juice Pulp</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    50 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
            <div className="box7a">
            <img
                src="https://images.carbmanager.com/jc2SLJXX9TNnFne9AAezcwSgMcxzUzef62q-1J56CbY/resize:fit:1400/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmVjYTEwZDE0LWRkZDYtNGIyMC05YjcwLWE1NmY5YmM4YTUwMC5qcGc_YWx0PW1lZGlh"
                alt=""
                />
             <h2>Eco Keto Easy Avacado DIP</h2>
             <h4><GiRoundStar/><GiRoundStar/><GiRoundStar/><GiRoundStar/><FaStarHalfAlt/>    100 Rating</h4>
             <div className="box7b">
                    <h5><GiStopwatch/>    35 min</h5>
                    <h5><FaFire/>    313 calories</h5>
                </div>
            </div>
           </div>

           <div className="box9">
            <div className="box9a">
                <h1>Looking for Premium?</h1>
                <p>Unlock all of Carb Manager's cutting-edge features with a Premium Membership.</p>
            </div>
            <div className="box9b">
                <button>Get Premium</button>
            </div>
           </div>

        <Footer/>
        </>
    )
}