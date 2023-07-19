import React from 'react'
import './createac.css';
import './Login';
import './dashboard';
import {Link} from 'react-router-dom';
function createac() {
  return (
    <body>
   <header class="header">
   </header>
    <div class="background"></div>
    <div class="container">
        <div class="item">
            </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>REGISTER</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Email' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="confirm password" placeholder='confirm Password'required/>
                    </div>
                    <Link to="/dashboard"><button class="btn">Sign Up</button></Link>
                    <div class="create-account">
                         <Link to="/Login"><a class="register-link">Login Here</a></Link>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
    
  )
}

export default createac