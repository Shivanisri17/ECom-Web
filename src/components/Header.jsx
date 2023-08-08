import React from "react";
import { NavLink } from "react-router-dom";
import Cartbtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";

export default function Header() {
    return (

        <div>

 <nav className="navbar navbar-expand-lg py-0 shadow-sm bg-white">
                <div className="container-fluid">

                    <NavLink className="navbar-brand" to="/">
                        <img src="/assest/logo.PNG" height={90} width={200} />
                    </NavLink>

                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportContent"
                   aria-controls="navbarSupportContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                  </button>
                   
                    <div className="collapse navbar-collapse Hero " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li  className={"nav-item"} >
                                <NavLink  className={"nav-link"}   aria-current="page" to="/">Home</NavLink>
                            </li>
                           
                            <li className="nav-item ">
                                <NavLink  className={"nav-link"}   aria-current="page" to="/products">
                                   Shop
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink  className={"nav-link"}  aria-current="page" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={"nav-link"}  aria-current="page" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                       
 </div>
 <Login />
 <Signup />
 <Cartbtn />
</div>

</nav>




</div>
    );
}

  



