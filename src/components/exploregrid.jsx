import React from "react";
import ExplorePost from './explorepost';


const dummyPosts = [
  {
    imageUrl:"https://images.unsplash.com/photo-1700234272458-cdad09b6b7ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    likes: 150,
    comments: 25,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1752430038064-250d400e220f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    likes: 420,
    comments: 88,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    likes: 150,
    comments: 25,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1754265222750-687ab87f5549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://plus.unsplash.com/premium_photo-1685868556097-641c237f3fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    likes: 420,
    comments: 88,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1744297428826-0a575d7033f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    likes: 420,
    comments: 88,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1735736617534-533cf25e3770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1523944339743-0fe06f079939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    likes: 420,
    comments: 88,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1594234591488-128c2968837a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1751998605703-984b24b3db78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
    likes: 420,
    comments: 88,
  },
  // Add more as needed

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// https://images.unsplash.com/photo-1531177071274-8a96d1e6ab27
// https://images.unsplash.com/photo-1501769214405-5e8ccc4272b2
// https://images.unsplash.com/photo-1500530855697-b586d89ba3ee
// https://images.unsplash.com/photo-1501747315-124a0eaca060
// 
// https://images.unsplash.com/photo-1493244040629-496f6d136cc3
// https://images.unsplash.com/photo-1496395034830-b79abbd5f1b5
// https://images.unsplash.com/photo-1504198453319-5ce911bafcde
// https://images.unsplash.com/photo-1483721310020-03333e577078


];

const ExploreGrid = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center m-2  md:hidden py-1 w-full">
      <div className="text-lg font-bold text-black">
          TRADEGRAM
        </div>

    <div className="container mx-auto flex justify-between items-center m-2" >
        <input type="text" name="search" className=" px-2 placeholder:text-slate-700 rounded-md border-2 border-b-gray-500  m-5 mt-0 mb-0" placeholder="search.. " />

      </div>
      </div>
    <div className="grid md:grid-cols-4 grid-cols-3 gap-1 md:gap-1">
      {dummyPosts.map((post, idx) => (
        <ExplorePost
          key={idx}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </div>
    </div>
  );
};

export default ExploreGrid;