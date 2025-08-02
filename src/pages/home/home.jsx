import React from 'react'
import Stories from '../../components/stories/sample'
import Radius from '../../components/radius/radius'
import Post from '../../components/posts/samplepc'
import Nav from '../../components/nav/nav'
import Footer from '../../components/mobilefooter/routeset'
import Offer from '../../components/offers/offer'
 
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