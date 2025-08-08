import React from 'react'
import Stories from '../components/sample'
import Radius from '../components/radius'
import Post from '../components/samplepc'
import Nav from '../components/nav'
import Footer from '../components/routeset'
import Explore from '../components/exploregrid'
import Home from './home'

 
 function App () {
    return(
        
    <div>
    <Nav className="shadow-md hidden sm:block "/>
    <Explore/>
    <Footer/>
</div>
    );
 };
 
 export default App;