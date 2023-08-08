import React, { useState , useEffect } from "react";
import Footer from "./Footer";

const Contact = () => {

  const initialValues = {name:"" , email: "", msg:"", success:""};
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] =useState(false);
  const [formSuccess, setformSuccess] = useState({});

const handleChange = (e)=>{
  
 const {name, value} = e.target;
 setformValues({...formValues, [name]:value});

}

const handleSubmit = (e)=>
{
 e.preventDefault();
 setformErrors(validate(formValues));
setIsSubmit(true);
}

useEffect(()=>
{
console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit)
{
  console.log(formValues);
}
},[formErrors]);

const validate = (values) =>
{ 
const errors ={};
const success ={};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!values.name)
{
  errors.name = "Please Enter your Full name!";
  
}
if(!values.email)
{
  errors.email = "Please Enter your EmailID!";

}
else if(!regex.test(values.email))

{
  errors.email = "Invalid EmailID!";

}
if(!values.msg)
{
  errors.msg = "Please Enter your Message!";
  
}

return errors;

};

    return(
        <div>  
        <div className="container mb-5 py-4 my-3">
       <div className="row">
        <div className="col-12 text-center py-4 my-4">
           <h1>Leave a Message</h1>
           <hr />
            <h2 className=" py-3 my-3"> 
    We Love to hear from you!
            </h2>
 </div>
</div>
<div className="row">
    <div className="col-md 5 d-flex justify-content-center">
        <img src="/assest/1.png" alt="" height={400} width={400}/>
    </div>
    <div className="col-md-6">

<form  onSubmit={handleSubmit} >
<div className="mb-3">
  <label for="exampleForm" className="form-label">Full Name</label>
  <input type="text" className="form-con" id="exampleFormControlInput1" placeholder="Enter Your Name"  onChange={handleChange} name="name" value={formValues.name} />
<p style={{color:"red"}}>{formErrors.name}</p>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-con" id="exampleFormControlInput1" name="email" placeholder="name@gmail.com" onChange={handleChange} value={formValues.email}/>
  <p  style={{color:"red"}}>{formErrors.email}</p>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-con" name="msg" id="exampleFormControlTextarea1" rows="5"  onChange={handleChange}  value={formValues.msg}></textarea>
  <p  style={{color:"red"}}>{formErrors.msg}</p>
</div>
<button type="submit" name="send" className="btn btn-outline-dark"> Send</button>
<br />

<br></br>
<p style={{color:"green" , textAlign:"center" , fontSize:"20px"}} name="success"> </p>
</form>
    </div>
</div >
</div>
&nbsp;
&nbsp;

        </div>
    )
}


export default Contact;