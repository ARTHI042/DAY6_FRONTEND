import React from 'react'
import './accman.css';
import './Login';
import './dashboard';
import {Link} from 'react-router-dom';
function profile_update() {
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
                    <h2>Update Your Profile</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Enter name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Enter email' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input type="text" placeholder='Enter vehicle no.'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="confirm password" placeholder='Enter new password'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="confirm password" placeholder='Confirm new password'required/>
                    </div>
                    <Link to="/dashboard"><button class="btn">Update</button></Link>
                 
                </form>
            </div>
            </div>
        </div>
    
</body>
    
  )
}

export default profile_update