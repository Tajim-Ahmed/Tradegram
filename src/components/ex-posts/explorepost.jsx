import React from "react";
import { Heart, MessageCircle } from "lucide-react";
const ExplorePost = ({ imageUrl, likes, comments }) => {
  return (

    <div className="relative group aspect-square w-full cursor-pointer overflow-hidden">
      
      <img
        src={imageUrl}
        alt="Explore Post"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover overlay (for desktop) */}
      <div className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center space-x-4 text-sm font-semibold">
        <div className="flex items-center space-x-1">
          <Heart className="w-5 h-5" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ExplorePost;