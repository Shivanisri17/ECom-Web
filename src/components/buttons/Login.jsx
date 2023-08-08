import React from 'react';
import { useState, useEffect } from 'react';

const Login = () => {

const loginValues = {email:"" , pwd:""};
const [formValues, setformValues] = useState(loginValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] =useState(false);
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
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
   if(!values.email)
   {
     errors.email = "Please Enter your EmailID!";
   
   }
   else if(!regex.test(values.email))
   
   {
     errors.email = "Invalid EmailID!";
   
   }
   if(!values.pwd)
   {
     errors.pwd = "Please Enter your Password!";
     
   }
   
   return errors;
   }   


    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <form  onSubmit={handleSubmit} >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" name="email" className="form-label"><strong>Email address</strong></label>
                                    <input type="email" className="form-con" onChange={handleChange}  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        <p  style={{color:"red"}}>{formErrors.email}</p>
  </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1"name="pwd" className="form-label"><strong>Password</strong></label>
                                        <input type="password" className="form-con" onChange={handleChange}  id="exampleInputPassword1"/>
                                        <p  style={{color:"red"}}>{formErrors.pwd}</p>
  </div>
 
                                            <button type="submit" className="btn btn-outline-dark w-100 mt-3">Submit</button>
</form>
                                    </div>
                                </div>
                </div>
                        </div>
        </>
                    )
}

                    export default Login
