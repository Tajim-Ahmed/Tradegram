import React from 'react';
import PostCard from './postcard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-0.5">
      <PostCard
        username="john_doe"
        profilePic="https://i.pravatar.cc/100?img=3"
        postImage="https://i.pravatar.cc/60?img=2"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
      <PostCard
        username="john_doe"
        profilePic="https://i.pravatar.cc/100?img=3"
        postImage="https://i.pravatar.cc/60?img=3"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
      <PostCard
        username="john_doe"
        profilePic="https://i.pravatar.cc/100?img=3"
        postImage="https://i.pravatar.cc/60?img=1"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
    </div>
  );
}

export default App;