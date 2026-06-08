import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      login({ name, email });
      navigate('/'); // લોગિન પછી સીધા હોમ પેજ પર જવા
    }
  };

  return (
    <div className="animate-fadeIn pb-20 bg-white font-sans text-left min-h-screen">
      {/* Page Banner */}
      <div className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16 border-b border-gray-100" style={{ backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')` }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">Login</h1>
      </div>
      
      <div className="max-w-md mx-auto px-4">
        <div className="bg-[#f4f4f4] p-8 md:p-10 shadow-xs rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide mb-6 text-center uppercase">Welcome Back!</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 shadow-2xs" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 shadow-2xs" 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 shadow-2xs" 
            />
            <button type="submit" className="w-full bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-xs px-12 py-4 rounded-full uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}