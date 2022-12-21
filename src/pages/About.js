import React from "react";
import imranpics from "../images/imran.jpg";
import { FaLinkedin, FaEnvelope} from "react-icons/fa";
import {GoMarkGithub} from "react-icons/go";




export default function About() {
  return (
    <>
      <div className="container emp-profile">
      <form action="">
        <div className="row">
          <div className="col-md-4">
            <img src={imranpics} className="pphoto" alt={imranpics} />
          </div>

          
          <div className="col-md-6">
          <div className="profile-head">
              <h5>Mohammad Imran Khan </h5>
              <h6>Web Developer</h6>
              
              {/* <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10</span>  </p> */}
              <h4>Carrier Objectives:</h4><p>Seeking an entry-level role at a reputed IT organisation to utilize my engineering skills that can contribute to the 
                company’s growth as well as enhance my knowledge by exploring new things. </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" >
                <a className="nav-link active"  id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link active"  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"  aria-selected="false">Timeline</a>
              </li>
         </ul>
         
          </div>
          </div>

          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" value="Edit Profile" name='btnAddMore' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">

               <a href="https://www.linkedin.com/in/khan38imran/" target="imran"><FaLinkedin size="2em"/></a>
               <a href="https://github.com/Imran6324" target="thapa">  <GoMarkGithub size="2em"/>  </a>
               <a href="mailto:khan38imran@gmail.com" target="thapa">  <FaEnvelope size="2em"/>  </a>
              
        
            </div>
          </div>
          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id='myTabContent'>
    
    

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
        <div className="row">
      </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label >Name</label>
              </div>
              <div className="col-md-6">
                <p>Mohammad Imran Khan</p>
              </div>
            </div>
              
              <div className="row mt-3">
                <div className="col-md-6">
                  <label >Email</label>
                </div>
                <div className="col-md-6">
                  <p>khan38imran@gmail.com</p>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label >Phone</label>
                </div>
                <div className="col-md-6">
                  <p>6387074878</p>
                </div>
              </div>
            </div>
            
            <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="row">
              <div className="col-md-6">
                <label > Course </label>
              </div>
              <div className="col-md-6">
                <p>B.Tech</p>
              </div>
            </div>
          

            <div className="row mt-3">
              <div className="col-md-6">
                <label > Branch</label>
              </div>
              <div className="col-md-6">
                <p>Computer Science and Engineering</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label > Yera of passing</label>
              </div>
              <div className="col-md-6">
                <p>2023</p>
              </div>
            </div>

            </div>
            
          </div>
        </div>

        </div>
      </form>
    </div> 
     </>
  );
}
