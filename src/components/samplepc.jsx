import React from 'react';
import PostCard from './postcard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-0.5">
      <PostCard
        username="john_doe"
        profilePic="https://i.pravatar.cc/100?img=3"
        postImage="https://images.unsplash.com/photo-1735736617534-533cf25e3770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
      <PostCard
        username="john_doe"
        profilePic="https://images.unsplash.com/photo-1753993981167-32a3b29e3065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"
        postImage="https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
      <PostCard
        username="john_doe"
        profilePic="https://images.unsplash.com/photo-1594234591488-128c2968837a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"
        postImage="https://images.unsplash.com/photo-1584021756961-b5e21a1274a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
      <PostCard
        username="john_doe"
        profilePic="https://images.unsplash.com/photo-1594234591488-128c2968837a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"
        postImage="https://plus.unsplash.com/premium_photo-1685868556097-641c237f3fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
        caption="This is a beautiful sunset captured during my vacation. The colors in the sky were absolutely mesmerizing and made me realize how wonderful nature is. Sometimes, we just need to slow down and appreciate the beauty around us, no matter how busy life gets. Nature heals."
      />
    </div>
  );
}

export default App;