import React from "react";
import Footer from "./Footer";
import DATA from "../Data";
import { NavLink } from "react-router-dom";

const Product =()=>
{
  
    const cardItem = (item)=>{
        return(
          <div className="card5 py-4 my-4 mx-3" key={item.id} style={{width: "18rem"}}>
             <img src={item.img} className="card-img-top" alt={item.title}></img>
            <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                    <p className="lead">₹{item.price} </p>
                <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
            </div>
          </div>
        )
    }
    return(
        <div>
            <div className="container py-5">
                <div className="row justify-content-around">
                    <div className="col-12">
                        <h1 className="mb-3 mx-5 me-9  grap">Latest Products</h1>
                        <hr></hr>
                    </div>
                    <div className="buttons  d-flex justify-content-center py-4  my-3 mx-4 mb-1">
                    
                    <button className="btn btn-outline-dark me-4 mx-2 flow1" > Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-4 mx-2 flow1" > Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-4 mx-2 flow1"> Jewellery
                    </button>
                    <button className="btn btn-outline-dark me-4 mx-2 flow1" >  Electronics
                    </button>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {DATA.map(cardItem)}
                </div>
               <hr />
            </div>
           
        </div>
    )
}


export default Product;