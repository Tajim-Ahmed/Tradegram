import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/routeset';
import Home from './pages/home';
import Auth from './components/auth';
import Explore from './pages/explore';
import Profile from './pages/profile';
import Chat from './pages/chat';
import Post from './pages/post'
import Offers from './components/offer'
import Support from './components/popup';
import PrivateRoute from './components/Privateroute';


const App = () => {
  return (
    <>
     
         
      <Routes>
        <Route path="/" element={ <Auth />} />
        <Route path="/home" element={ <PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/explore" element={<PrivateRoute><Explore /></PrivateRoute>} />
        <Route path="/chats" element={<PrivateRoute><Chat /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/Post" element={<PrivateRoute><Post /></PrivateRoute>} />
        <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} />
        {/* <Route path="/offers" element={<Offers />} /> */}
      </Routes>
        
     
    </>
  );
};

export default App;
