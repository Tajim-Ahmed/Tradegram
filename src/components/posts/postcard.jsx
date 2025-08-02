import React from 'react';
import { Heart, Bookmark, UserPlus } from 'lucide-react';

const truncateCaption = (text, maxWords = 50) => {
  const words = text.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : text;
};

const PostCard = ({ username, profilePic, postImage, caption }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden my-2  border border-gray-200">
      
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={profilePic}
          alt={`${username} profile`}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <span className="ml-4 font-semibold text-gray-800">{username}</span>
      </div>

      {/* Post Image */}
      <div className="w-full">
        <img
          src={postImage}
          alt="Post content"
          className="w-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-red-500 transition">
            <Heart className="w-6 h-6" />
          </button>
          <button className="text-gray-700 hover:text-blue-500 transition">
            <UserPlus className="w-6 h-6" />
          </button>
        </div>
        <button className="text-gray-700 hover:text-yellow-500 transition">
          <Bookmark className="w-6 h-6" />
        </button>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{username}</span>{' '}
          {truncateCaption(caption)}
        </p>
      </div>
    </div>
  );
};

export default PostCard;