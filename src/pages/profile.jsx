import React, { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Nav from '../components/nav'
import Footer from '../components/routeset'
import Offer from '../components/offer'
import { Link } from "react-router-dom";
import { useAuth } from "../authcontext";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "../authcontext";
  
  export default function ProfilePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [backgroundPic, setBackgroundPic] = useState(null);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

   useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

const handlePostUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPosts((prevPosts) => [reader.result, ...prevPosts]); // Add new post to start
    };
    reader.readAsDataURL(file);
  }
};

  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Nav className="shadow-md hidden sm:block p-0"/>
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 font-sans relative">
      {/* Header with Hamburger */}
      <div className="flex justify-end p-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="absolute right-4 top-14 bg-white shadow-lg rounded-lg w-48 z-10 p-3 space-y-2">
            <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Change Username</div>
            <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Change Password</div>
            <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Wish List</div>
            <div className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Saved</div>
            <div onClick={handleLogout} className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Logout</div>
            <Link to='/support' className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Support</Link>
          </div>
        )}
      </div>

      {/* Background Image */}
<div
  className="relative w-full h-48 bg-gray-200 rounded-b-xl overflow-hidden cursor-pointer"
  onClick={() => document.getElementById('backgroundUpload').click()}
>
  {backgroundPic ? (
    <img
      src={backgroundPic}
      alt="Background"
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="flex items-center justify-center h-full text-gray-500 text-sm">
      Upload Background
    </div>
  )}

  <input
    id="backgroundUpload"
    type="file"
    accept="image/*"
    onChange={(e) => handleImageUpload(e, setBackgroundPic)}
    className="hidden"
  />
</div>

{/* Profile Image */}
<div className="relative -mt-12 flex justify-center">
  <div
    className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-gray-300 text-gray-600 cursor-pointer"
    onClick={() => document.getElementById('profileUpload').click()}
  >
    {profilePic ? (
      <img
        src={profilePic}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-sm">
        Upload DP
      </div>
    )}

    <input
      id="profileUpload"
      type="file"
      accept="image/*"
      onChange={(e) => handleImageUpload(e, setProfilePic)}
      className="hidden"
    />
  </div>
</div>



      {/* User Info */}
      <div className="text-center mt-4 space-y-1">
        <h2 className="text-xl font-bold">@username</h2>
        <p className="text-gray-700 font-medium">Shop Name</p>
        <p className="text-gray-500 text-sm">123 Main St, City</p>
        <p className="text-gray-600">Latest post caption or status</p>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <p><strong>Name:</strong> {user.displayName || "Anonymous"}</p>
        <p><strong>Email:</strong> {user.email || "N/A"}</p>
        <p><strong>Phone:</strong> {user.phoneNumber || "N/A"}</p>
        <p><strong>User ID:</strong> {user.uid}</p>
        <p><strong>Provider:</strong> {user.providerData[0]?.providerId}</p>
      </div>

      {/* Stats */}
      <div className="flex justify-around mt-6 border-t pt-4">
        <div className="text-center">
          <p className="text-lg font-semibold">120</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">180</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>
      {/* User Posts Section */}
<div className="mt-6 px-2">
  <h3 className="text-lg font-semibold mb-2">Posts</h3>

  {/* Upload Post */}
  <div className="mb-4">
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handlePostUpload(e)}
      className="text-sm"
    />
  </div>


  {/* Posts Grid */}
  <div className="grid grid-cols-3 gap-2 sm:gap-4">
    {posts.map((post, idx) => (
      <img
        key={idx}
        src={post}
        alt={`Post ${idx + 1}`}
        className="w-full h-32 sm:h-40 object-cover rounded"
      />
    ))}
   </div>
  </div>
    {/* <Offer/> */}
     <Footer/>
 
</div>
</div>
  );
}