import React, { useEffect } from 'react';
import Stories from '../components/sample';
import Radius from '../components/radius';
import Post from '../components/samplepc';
import Nav from '../components/nav';
import Footer from '../components/routeset';
// import Offer from '../components/offer';

function Home() {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch('http://localhost:5000/api/location', {
             

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ latitude, longitude })
        })
        .then(res => res.json())
        .then(data => console.log("Location saved:", data))
        .catch(err => console.error("Error saving location:", err));
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, []); // run only once

  return (
    <div>
      <Nav />
      <Stories />
      <Radius />
      <Post />
      {/* <Offer/> */}
      <Footer />
    </div>
  );
};

export default Home;
