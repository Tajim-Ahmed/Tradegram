import React from 'react'
import Stories from '../components/sample'
import Radius from '../components/radius'
import Post from '../components/samplepc'
import Nav from '../components/nav'
import Footer from '../components/routeset'
import Offer from '../components/offer'
 
 function Home () {
    return(
    
    <div>
    <Nav/>
    <Stories/>
    <Radius/>
    <Post/>
    {/* <Offer/> */}
    <Footer/>
</div>
    );
 };
 
 export default Home;