import React from 'react';
import { useState, useEffect } from 'react';

const Signup = () => {

    const loginValues = {email:"" , pwd:"", name:""};
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
      
       if(!values.name)
       {
        errors.name = "Please Enter your Username!";
       }
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
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" name="name" className="form-label"> <strong>Username</strong></label>
                                    <input type="text" onChange={handleChange} className="form-con" id="exampleInput" />
                                </div>
                                <p  style={{color:"red"}}>{formErrors.name}</p>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" name="email" className="form-label"><strong>Email address</strong></label>
                                    <input type="email"   onChange={handleChange} className="form-con" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <p  style={{color:"red"}}>{formErrors.email}</p>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" name="pwd" className="form-label"><strong>Password</strong></label>
                                    <input type="password"  onChange={handleChange} className="form-con" id="exampleInputPassword1" />
                                </div>
                                <p  style={{color:"red"}}>{formErrors.pwd}</p>
                               
                                <button type="submit" className="btn btn-outline-dark w-100 mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
