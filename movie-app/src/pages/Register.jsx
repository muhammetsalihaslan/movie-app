
import React from 'react';

const Register = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="form-image d-none d-md-block">
                <img src={'https://picsum.photos/800/800'} alt="sample-movie" />

            </div>
            <div className="register-form">
                 <h1 className="form-title display-3">Register</h1>
                 <form id="register">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"/>
                
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"/>
                    
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your e-mail"/>
                    
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"/>
                
                </form>
            </div>

        </div>
    )
}

export default Register;