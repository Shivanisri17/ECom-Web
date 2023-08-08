import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-outline-dark primary fw-bold mb-4">ABOUT US!</h1>
                        <hr />
                        <p className="lead mb-4">
                        Shopping can be defined as an activity of buying various goods from shops.
You get to meet a number of people when you go out shopping.
When you visit a mall for shopping,from different cuisines. 
Shopping relives stress. You get to go outdoors and explore various shops and that will keep you away from unwanted thoughts.
Well, you need not spend the money every time you go out to shop.
 Remember that there is something called as window shopping.
Shopping gives you a good reason to dress up.
You get to go outdoors and explore various shops and that will keep you away from unwanted thoughts.
Well, you need not spend the money every time you go out to shop.
Shopping can be defined as an activity of buying various goods from shops.
You get to meet a number of people when you go out shopping.
Shopping is fun and we get to spend a quality time with your family and friends.
                        </p>
                        <NavLink  to="/contact"className="btn btn-outline-dark primary px-3">Contact Us</NavLink>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assest/u.jpg" alt="" height={600} width={550} />
                    </div>
                </div>
            </div>
          
           
        </div>
    )
}

export default About;