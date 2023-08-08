import React from "react";

const Footer = ()=>{

function myfunc(){
 
  let progress = document.getElementById("mtype").value;

  if(progress == "")
  {
    alert("Please Enter Your E-Mail ID...");
    
  }
  else if(!progress.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
  alert("Invalid E-Mail ID...");
  }
  
  else
  {
    alert("Thank you!! Visiting our page Keep Supporting and Our Future Updates will Sent on your E-mail ID!!");
   
  }
  document.getElementById('mtype').value = "";
  
}

    return(
<div className=" bg-light text-white pt-5 pb-4">
<p className="d-flex justify-content-center shift2 ">
<h1 className="text-uppercase1  font-weight-bold shift1">SUBSCRIBE FOR NEW UPDATES</h1>
  <input type="email" id="mtype" className="emails " placeholder="Enter Your Email-ID" />
 <button className="dots" onClick={myfunc}>Subscribe</button></p>
<div className="container text-center text md-left">
<div className="row text-center text-md-left">
  <div className="col-md-3 col-lg-3 col-xl-3  mx-auto mt-3">
  <h5 className="text-uppercase mb-4 font-weight-bold shift ">SKYE</h5>
  <hr className="mb-4 text-dark" />
  <p className="text-dark">Here as Our product has been successfully running in our company. Our product is very Unique and styling, 
    here as our product is brand new and many offers is available at SKYE. </p>
</div>
<div className="col-md-2 col-mg-2 mx-auto mt-3">
  <h5 className="text-uppercase mb-4 font-weight-bold shift ">
    Products
  </h5>
  <hr className="mb-4 text-dark" />
  <p  className="flow">
    <a href="#" className="text-dark flow" style={{textDecoration:"none"}}> The Providers</a>
  </p>
  <p  className="flow">
    <a href="#" className="text-dark flow" style={{textDecoration:"none"}}> Creativity</a>
  </p>
  <p  className="flow">
    <a href="#" className="text-dark flow" style={{textDecoration:"none"}}>Offers Available</a>
  </p>
  <p  className="flow">
    <a href="#" className="text-dark flow" style={{textDecoration:"none"}}> Quality Styling</a>
  </p>
</div>

<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
  <h5 className="text-uppercase mb-4  font-weight-bold  shift"> LET US HELP</h5>
  <hr className="mb-4 text-dark" />
  <p className="flow">
    <a href="#" className="text-dark " style={{textDecoration:"none"}}> Your Account</a>
  </p>
  <p  className="flow">
    <a href="#" className="text-dark" style={{textDecoration:"none"}}>Become a Affiliates</a>
  </p>
  <p  className="flow">
    <a href="#" className="text-dark " style={{textDecoration:"none"}}>Shipping Rates</a>
  </p>
  <p  className="flow">
    <a href="#" className="text-dark " style={{textDecoration:"none"}}> Help</a>
  </p>
</div>

<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
<h5 className="text-uppercase mb-4 font-weight-bold  shift "> Contact</h5>
<hr className="mb-3 text-dark" />
<p className="text-dark flow">
  <i className="fa fa-home  mr-3 text-dark  me-2"></i> New York, NY 2333,US
</p>
<p className="text-dark flow">
  <i className="fa fa-envelope mr-3 text-dark  me-2"></i> skye@gmail.com
</p>
<p className="text-dark flow">
  <i className="fa fa-phone mr-3 text-dark  me-2"></i> +45 65478302 453
</p>
<p className="text-dark flow">
  <i className="fa fa-print mr-3 text-dark  me-2"></i> 98765433310
</p>

</div> 

</div>

<hr className="mb-4 text-dark" />
<div className="row align-items-center">

<div className="col-md-7 col-lg-8">
<p className="text-dark">
  CopyRight 02023 All rights reserved by: <a href="#" style={{textDecoration:"none"}}>
    <strong className=" shift mx-2">SKYE Providers</strong>
  </a>
</p>
</div>
<div className="col-md-5 col-lg-4">
  <div className="text-center text-md-right">
<ul className="list-unstyled list-inline">
  <p className=" text-uppercase mb-2 font-weight-bold  shift ">Follow Us</p>
  <li className="list-inline-item">
    <a href="#" className="btn-floating btn-sm flow text-dark me-2" style={{fontSize:"23px"}}><i className="fa fa-facebook"></i></a>
  </li>

  <li className="list-inline-item">
    <a href="#" className="btn-floating btn-sm flow text-dark me-2" style={{fontSize:"23px"}}><i className="fa fa-twitter"></i></a>
  </li>

  <li className="list-inline-item">
    <a href="#" className="btn-floating btn-sm flow text-dark me-2 " style={{fontSize:"23px"}}><i className="fa fa-instagram"></i></a>
  </li>

  <li className="list-inline-item">
    <a href="#" className="btn-floating btn-sm flow text-dark me-2" style={{fontSize:"23px"}}><i className="fa fa-linkedin"></i></a>
  </li>

  <li className="list-inline-item">
    <a href="#" className="btn-floating btn-sm flow text-dark me-2" style={{fontSize:"23px"}}><i className="fa fa-youtube"></i></a>
  </li>

</ul>

  </div>

</div>

</div>

</div>
</div>
    )
}

export default Footer;