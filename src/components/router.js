import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact/contact';
import Courses from '../pages/Courses/courses';
import Home from '../pages/Home/Home';



const Router = ()=>(
    <Routes>
        <Route exact path ='/' caseSensitive={false} element={<Home />}/>
        <Route exact path='/contact' caseSensitive={false} element={<Contact />}/>
        <Route exact path='/courses'caseSensitive={false} element={<Courses/>} />
        
       
    </Routes>
)
export default Router