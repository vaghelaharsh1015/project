import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (name.trim() && email.trim() && password.trim()) {
        const result = register({ name, email, password });
        if (result.success) {
          toast.success(`Account created! Welcome, ${name}!`);
          navigate('/');
        } else {
          toast.error(result.message);
        }
      }
    } else {
      if (email.trim() && password.trim()) {
        const result = login({ email, password });
        if (result.success) {
          toast.success(`Welcome back!`);
          navigate('/');
        } else {
          toast.error(result.message);
        }
      }
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
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide mb-6 text-center uppercase">
            {isRegistering ? "Create Account" : "Welcome Back!"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegistering && (
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 shadow-2xs" 
                required 
              />
            )}
            <input 
              type="email" 
              placeholder="Email ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white px-5 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 shadow-2xs" 
              required 
            />
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white pl-5 pr-12 py-3.5 rounded-full focus:outline-none border border-transparent focus:border-gray-300 text-gray-700 shadow-2xs" 
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer flex items-center justify-center text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button type="submit" className="w-full bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-xs px-12 py-4 rounded-full uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm mt-4">
              {isRegistering ? "Sign Up" : "Login"}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
            <button 
              type="button" 
              onClick={() => setIsRegistering(!isRegistering)} 
              className="text-[#00b2ff] font-bold hover:underline cursor-pointer"
            >
              {isRegistering ? "Login Here" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}