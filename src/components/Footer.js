import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <div>
    <footer>
       <div className="container">
        <div className="row">
            <div className='col-12 col-lg-10 mx-auto'>
                <div className="row">
                    <div className="col-6 col-lg-3" >
                          <h2>Company </h2>
                          <ul>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>

                          </ul>

                    </div>
                    <div className="col-6 col-lg-3" >
                          <h2>Support </h2>
                          <ul>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              
                          </ul>

                    </div>
                    <div className="col-6 col-lg-3" >
                          <h2>Services</h2>
                          <ul>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              <li>
                                 About
                              </li>
                              
                          </ul>

                    </div>
                    <div className="col-6 col-lg-3" >
                          <h2>Follow Us </h2>
                          <div className="row">
                              <div className="col-3 mx-auto">
                                          
                                  <i className="fab fa-facebook  fontawesome-style"></i> 
                              </div>
                            
                              <div className="col-3 mx-auto">
                             
                                  <i className="fab fa-instagram  fontawesome-style"></i>
                              </div>
                             
                              <div className="col-3 mx-auto">
                             

                                  <i className="fab fa-youtube fontawesome-style"></i>
                              </div>
                              <div className="col-3 mx-auto">
                            
                              <i className="fab fa-twitter fontawesome-style"></i>
                              </div>
                          </div>

                    </div>
                    <hr/>
                    <div className='mt-5'>
                        <p className='main-hero-para text-center w-100'>Copyright @2022 FoodCart.All rights reserved.</p>
                    </div>

                </div>
            </div>

        </div>

       </div>
      
    </footer>
   </div>
  )
}

export default Footer;