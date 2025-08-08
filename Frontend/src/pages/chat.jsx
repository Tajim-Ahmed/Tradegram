import React from "react";
import Nav from '../components/nav'
import Footer from '../components/routeset'

const users = [
  {
    id: 1,
    name: "Alice",
    profilePic: "https://i.pravatar.cc/150?img=1",
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    profilePic: "https://i.pravatar.cc/150?img=2",
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie",
    profilePic: "https://i.pravatar.cc/150?img=3",
    isActive: true,
  },
];

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
     <Nav className="shadow-md hidden sm:block p-0"/>
      {/* Top bar */}
      <div className="bg-white shadow p-4 text-xl font-bold text-center sticky top-0 z-10">
        Chat
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar - User List */}
        <div className="md:w-1/4 w-full border-r bg-white overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 border-b hover:bg-gray-100 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                {user.isActive && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="text-sm font-medium">{user.name}</div>
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div className="flex-1 p-4">
          <div className="h-full w-full flex items-center justify-center text-gray-500">
            Select a user to start chatting.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ChatPage;