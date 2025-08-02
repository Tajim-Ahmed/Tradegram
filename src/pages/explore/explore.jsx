import React from 'react'
import Stories from '../../components/stories/sample'
import Radius from '../../components/radius/radius'
import Post from '../../components/posts/samplepc'
import Nav from '../../components/nav/nav'
import Footer from '../../components/mobilefooter/routeset'
import Explore from '../../components/ex-posts/exploregrid'
import Home from '../home/home'

 
 function App () {
    return(
        
    <div>
    <Nav className="shadow-md hidden sm:block p-0"/>
    <Explore/>
    <Footer/>
</div>
    );
 };
 
 export default App;