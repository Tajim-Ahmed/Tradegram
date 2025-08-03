import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileFooter from "./footer";
import Nav from './nav'
import Stories from './sample'
import Radius from './radius'
import Post from './samplepc'
import Footer from './routeset'
import Explore from '../pages/explore'
import Support from './wrapper'
import Upload  from './upload'
import Profile from '../pages/profile'
import Offer from './offer'
import  Home from '../pages/home'


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