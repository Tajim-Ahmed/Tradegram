import Nav from '../components/nav'

import Footer from '../components/routeset'
import React from 'react'
import Upload from '../components/upload'

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
