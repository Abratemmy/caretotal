import React, { Component } from 'react';
import './home.css';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaYoutube} from 'react-icons/fa'
import Slider from "react-slick";


export class Home extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      speed: 2000,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div className='home-container'>
        <div className='home-bg-wrapper'>
          <div className='row g-0'>
            <div className='col-lg-1 col-md-1 col-sm-12 home-bg-social-wrap '>
              <div className='home-bg-social'>
                <ul>
                  <li><a href="https://facebook.com"><FaFacebookF className="home-bg-icon" /></a></li>
                  <li><a href="https://twitter.com"><FaTwitter className="home-bg-icon" /></a></li>
                  <li><a href="https://linkedin.com"><FaLinkedinIn className="home-bg-icon" /></a></li>
                  <li><a href="https://google.com"><FaGoogle className="home-bg-icon" /></a></li>
                  <li><a href="https://youtube.com"><FaYoutube className="home-bg-icon" /></a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-11 col-md-11 col-sm-12'>
              <div className='home-bg-slider-wrap'>
                <Slider {...settings} className="home-bg-slider">
                  <div className='home-bg-first'>
                    <div className='container'>
                      <div className='home-bg-content'>
                        <h1>Take The First Step To Knowledge With Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <div className="button">
                          <button>Browse Courses</button>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className='home-bg-second '>
                    <div className='container'>
                      <div className='home-bg-content'>
                        <h1>Take The First Step To Knowledge With Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <div className="button">
                          <button>Browse Courses</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </Slider>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home