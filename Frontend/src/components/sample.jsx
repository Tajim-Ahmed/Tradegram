import React from 'react';
import Stories from './stories.jsx';

const storiesData = [
  { username: 'john_doe', image: 'https://i.pravatar.cc/60?img=1' },
  { username: 'jane_smith', image: 'https://i.pravatar.cc/60?img=2' },
  { username: 'mike_boss', image: 'https://i.pravatar.cc/60?img=3' },
  { username: 'sarah', image: 'https://i.pravatar.cc/60?img=4' },
  { username: 'john_doe', image: 'https://i.pravatar.cc/60?img=1' },
  { username: 'jane_smith', image: 'https://i.pravatar.cc/60?img=2' },
  { username: 'mike_boss', image: 'https://i.pravatar.cc/60?img=3' },
  { username: 'sarah', image: 'https://i.pravatar.cc/60?img=4' },{ username: 'john_doe', image: 'https://i.pravatar.cc/60?img=1' },
  { username: 'jane_smith', image: 'https://i.pravatar.cc/60?img=2' },
  { username: 'mike_boss', image: 'https://i.pravatar.cc/60?img=3' },
  { username: 'sarah', image: 'https://i.pravatar.cc/60?img=4' },{ username: 'john_doe', image: 'https://i.pravatar.cc/60?img=1' },
  { username: 'jane_smith', image: 'https://i.pravatar.cc/60?img=2' },
  { username: 'mike_boss', image: 'https://i.pravatar.cc/60?img=3' },
  { username: 'sarah', image: 'https://i.pravatar.cc/60?img=4' },
];

function stories() {
  return (
    <div className="max-w  mx-auto  mt-1.5">
      {/* <h2 className="text-lg font-semibold px-4 py-2">Stories</h2> */}
      <Stories className="" stories={storiesData} borderColor="blue" />
    </div>
  );
}

export default stories;