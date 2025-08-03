import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/routeset';
import Home from './pages/home';
import Explore from './pages/explore';
import Profile from './pages/profile';
import Chat from './pages/chat';
import Post from './pages/post'
import Offers from './components/offer'
import Support from './components/popup';


const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/offers" element={<Offers />} /> */}
      </Routes>
     
    </>
  );
};

export default App;
