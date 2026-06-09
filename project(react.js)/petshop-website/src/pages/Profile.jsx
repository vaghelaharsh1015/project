import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { toast } from 'react-toastify';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center py-20 min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Please login to view this page.</h2>
        <button onClick={() => navigate('/login')} className="bg-[#8cc63f] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide text-xs shadow-sm hover:bg-[#7db335] transition">Go to Login</button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn pb-20 bg-white font-sans text-left min-h-screen">
      <div className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16 border-b border-gray-100" style={{ backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')` }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">My Profile</h1>
      </div>
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="w-24 h-24 bg-[#f4f4f4] text-gray-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 select-none shadow-inner">
          👤
        </div>
        <h2 className="text-3xl font-bold text-gray-800 tracking-wide">Hello, {user.name}!</h2>
        {user.email && <p className="text-gray-600 font-medium mb-1">{user.email}</p>}
        <p className="text-gray-500 text-sm">Welcome to your dashboard. Here you can manage your account settings and view recent orders.</p>
        
        <div className="pt-10">
          <button 
            onClick={() => { 
              logout(); 
              toast.info("Logged out successfully!");
              navigate('/'); 
            }} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-10 py-3.5 rounded-full uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}