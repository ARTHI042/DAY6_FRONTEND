import React from 'react'
import './policy.css';
import './dashboard';
import './payment';
import {Link} from 'react-router-dom';
function policy() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div class="policy">
      <center><h1>Policy Information </h1></center></div>
      <div class="report-body1">
                    <div class="box-container1"></div>
      <div class="box box810">
                        <div class="text">
                      
                            <center><h1 class="topic1"></h1></center>
                            <div class="policy">
                            <center>
      
        <p>Automobile insurance, also known as auto insurance or car insurance, is a type of insurance policy that provides financial protection to vehicle owners against losses and damages that may arise from accidents, theft, or other unforeseen events related to their vehicles. Automobile insurance policies typically consist of several coverage types, each serving different purposes. Here's a description of the key components commonly found in an automobile insurance policy:</p></center>
      <center><p>Liability Coverage</p>
      <p>Collision Coverage</p>
      <p>Comprehensive Coverage</p>
      <p>Personal Injury Protection (PIP)</p></center>
</div>
</div>
</div>
      </div>
      <div class="mine">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  
  )
}

export default policy
