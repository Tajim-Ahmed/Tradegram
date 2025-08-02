import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Footer from './components/mobilefooter/routeset';
import Home from './pages/home/home';
import Explore from './pages/explore/explore';
import Profile from './pages/profile/profile';
import Chat from './pages/chats/chat';
import Post from './pages/add-posts/post'
import Offers from './components/offers/offer'
import Support from './components/support/popup';


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
