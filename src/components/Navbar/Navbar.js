import React, {useState} from 'react';
import './navbar.css';
import {AiTwotonePhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import caretotallogo from "../../image/caretotallogo.jpeg";

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    const changeBackground= ()=>{
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=130){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <div className="newnavbar-container">
            <div className="top-navbar">
                <div className="container">
                    <div className="newnav-top">
                        <p className='start'><AiTwotonePhone  className="react-icon" />Need help? call us now: <span> <a href="tel:+6494461709"> +23456789002</a></span>
                            <span className='email'><MdEmail className="react-icon" /><a href="mailto:caretotal@gmail.com" target="_blank"  rel="noopener noreferrer" ><span>caretotal@gmail.com</span></a></span>
                        </p>
                        <p className='end'>
                            <span>Register</span> |  <span>Login</span>
                        </p>
                        
                    </div>        
                </div>
        
            </div>

            <div className={navbar ? "navbar active":"navbar"}>
                <div className="container nav-container">
                    <div className="nav-logo">
                        <NavLink to="/"><img src={caretotallogo} alt="caretotal logo" /></NavLink>
                    </div>

                    <div className="navigation">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/" exact   className="nav-links"onClick={handleClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" exact  className="nav-links">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/awarding_partner" exact  className="nav-links">Awarding body</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/courses"   className="nav-links"onClick={handleClick}>Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/newsupdate"  className="nav-links"onClick={handleClick}>Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/faqs"  className="nav-links"onClick={handleClick}>Faq</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact"  className="nav-links "onClick={handleClick}>Contact</NavLink>
                            </li>

                            <li className="nav-apply">
                                <div className='nav-btn' style={{paddingTop:"20px"}}>
                                    <button>Apply today</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='nav-mini-btn'>
                        <div className='nav-btn'>
                            <button>Apply today</button>
                        </div>
                    </div>
                    

                    <div className="nav-icon" onClick={handleClick}>
                        {click === true ? <div> 
                            <span className=""  onClick={handleClick} > <FiXCircle />   </span>
                            </div> : <div> 
                                <span className=""  onClick={handleClick} > <FiAlignRight />   </span>
                            </div>
                        }
                    </div>
                </div>

               
            </div>

            
            
        </div>
    )
}

export default Navbar