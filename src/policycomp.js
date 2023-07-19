import React from 'react'
import './policycomp.css';
import './dashboard';
import './payment';
import {Link} from 'react-router-dom';
function policycomp() {
  return (
    <div>
      
      <div class="comp1">
        <br></br>
      <center><h1>Standard or Premium</h1></center></div>
      <div class="report-body1">
                    <div class="box-container1"></div>
      <div class="box box81">
                        <div class="text">
                      
                            <center><h1 class="topic1">STANDARD</h1></center>
                            <div class="comp1">

<br></br>
<center>
<p>Standard policy is a simple and smooth policy offered by Safewheels</p>
<p>Coverage Information:</p>
<p>Blood injury:Rs.5000 each person</p>
<p>Property Damage:Rs.10,000 each incident</p></center>
<br></br>
</div>

                            <Link to="/payment"><div class="fine2">
      
<center><button onclick="window.location.href='https://pay.google.com/';">Buy</button></center>
      </div></Link>
                        </div>
                    </div>
    
                    <div class="box box82">
                        <div class="text">
                      <center><h1 class="topic1">PREMIUM</h1></center>
                      <div class="comp2">
<br></br>
<center>
<p>Premium policy is a high level policy offered by Safewheels</p>
<p>Coverage Information:</p>
<p>Blood injury:Rs.7000 each person</p>
<p>Property Damage:Rs.14,000 each incident
  <p>New Feature:<b>Pay As You Drive</b></p>
</p></center>
</div>
<Link to="/payment"><div class="fine2">
      <center><button onclick="window.location.href='https://pay.google.com/';">Buy</button></center>
      </div></Link>
      </div>
          </div>
        </div>
      

      <div class="fine">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default policycomp
