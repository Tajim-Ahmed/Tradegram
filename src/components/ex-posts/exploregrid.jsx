import React from "react";
import ExplorePost from './explorepost';


const dummyPosts = [
  {
    imageUrl:"https://i.pravatar.cc/100?img=3",
    likes: 150,
    comments: 25,
  },
  {
    imageUrl: "https://i.pravatar.cc/100?img=3",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://i.pravatar.cc/100?img=3",
    likes: 420,
    comments: 88,
  },
  {
    imageUrl: "https://i.pravatar.cc/100?img=3",
    likes: 150,
    comments: 25,
  },
  {
    imageUrl: "https://i.pravatar.cc/100?img=3",
    likes: 300,
    comments: 67,
  },
  {
    imageUrl: "https://i.pravatar.cc/100?img=3",
    likes: 420,
    comments: 88,
  },
  // Add more as needed
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