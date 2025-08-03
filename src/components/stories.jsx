import React from 'react';

const Stories = ({ stories, borderColor = 'lightblue' }) => {
  // Map color names to Tailwind classes
  const borderClass = {
    blue: 'border-blue-600',
    yellow: 'border-yellow-300',
  }[borderColor] || 'border-blue-600';

  return (
    <div className="flex overflow-x-auto  space-x-4 p-4 bg-white border-b border-gray-200" 
      style={{scrollbarWidth:'none',msOverflowStyle:'none'}}>
        <style>
          {`div::-webkit-scrollbar {display: none;}`}
        </style>
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center min-w-[70px]">
          <div className={`w-16 h-16 rounded-full border-2  ${borderClass} p-0.5`}>
            <img
              src={story.image}
              alt={story.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p className="text-xs mt-1 text-center truncate w-full">{story.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;