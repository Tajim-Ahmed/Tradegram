import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileFooter from "./footer";
import Nav from '../nav/nav'
import Stories from '../stories/sample'
import Radius from '../radius/radius'
import Post from '../posts/samplepc'
import Footer from '../mobilefooter/routeset'
import Explore from '../../pages/explore/explore'
import Support from '../support/wrapper'
import Upload  from '../uploads/upload'
import Profile from '../../pages/profile/profile'
import Offer from '../offers/offer'
import  Home from '../../pages/home/home'

// Dummy components for pages
// const HomePage = () => <div className="p-4"></div>;
// const ExplorePage = () => <div className="p-4">Explore Page</div>;
// const UploadPage = () => <div className="p-4">Upload Page</div>;
// const OffersPage = () => <div className="p-4">Offers Page</div>;
// const ProfilePage = () => <div className="p-4">Profile Page</div>;

function App() {
  return (
   
      <MobileFooter />
    );
    
  }
export default App;