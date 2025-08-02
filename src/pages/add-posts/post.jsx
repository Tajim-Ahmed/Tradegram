import Nav from '../../components/nav/nav'
import Footer from '../../components/mobilefooter/routeset'
import React from 'react'
import Upload from '../../components/uploads/upload'

function Post () {
    return(
    
    <div>
   <Nav className="shadow-md hidden sm:block p-0"/>
    <Upload/>
    {/* <Offer/> */}
    <Footer/>
</div>
    );
 };
 
 export default Post;
