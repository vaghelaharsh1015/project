import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

export default function Cart() {
  const { cart: cartItems, removeFromCart: removeItem, updateQuantity } = useCart();

  const [coupon, setCoupon] = useState("");

  // Handle quantity changes
  const handleQtyChange = (id, val) => {
    const numericVal = Math.max(1, parseInt(val) || 1);
    updateQuantity(id, numericVal);
  };

  // Calculate subtotal
  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="animate-fadeIn pb-20 bg-white font-sans text-left">
      
      {/* Page Banner */}
      <div className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16 border-b border-gray-100"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">
          Cart
        </h1>
      </div>

      {/* Cart Workspace */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-gray-400 text-sm">Your shopping cart is currently empty.</p>
            <Link to="/shop" className="inline-block border border-[#8cc63f] text-[#8cc63f] hover:bg-[#8cc63f] hover:text-white font-bold text-xs px-8 py-3 rounded-full uppercase tracking-wider transition">
              Return To Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* 1. CART ITEMS TABLE AREA */}
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="text-gray-700 text-xs font-bold bg-white border-b border-gray-200">
                    <th className="p-4 w-16 text-center"></th>
                    <th className="p-4">Products</th>
                    <th className="p-4 text-center w-28">Price</th>
                    <th className="p-4 text-center w-28">Quantity</th>
                    <th className="p-4 text-center w-28">Total</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-gray-600">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition">
                      
                      {/* Remove Button */}
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 font-bold text-sm transition cursor-pointer select-none"
                        >
                          ×
                        </button>
                      </td>

                      {/* Product Image & Title */}
                      <td className="p-4 flex items-center gap-6">
                        <div className="w-16 h-16 border border-gray-200 p-1 bg-white flex items-center justify-center flex-shrink-0">
                          <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <span className="font-bold text-gray-700 text-xs md:text-sm">{item.name}</span>
                      </td>

                      {/* Product Individual Price */}
                      <td className="p-4 text-center font-semibold text-gray-700 text-xs md:text-sm">
                        ${item.price.toFixed(2)}
                      </td>

                      {/* Quantity Input Form */}
                      <td className="p-4 text-center">
                        <input 
                          type="number" 
                          value={item.quantity} 
                          min="1"
                          onChange={(e) => handleQtyChange(item.id, e.target.value)}
                          className="w-14 p-1.5 border border-gray-200 text-center text-xs focus:outline-none focus:border-gray-400 text-gray-700 bg-white font-medium" 
                        />
                      </td>

                      {/* Subtotal Item Price */}
                      <td className="p-4 text-center font-bold text-gray-700 text-xs md:text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coupon & Update Cart Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-1">
              
              {/* Left Side: Coupon code alignment */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <input 
                  type="text" 
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="bg-[#f4f4f4] rounded-full pl-5 pr-5 py-2 text-xs italic text-gray-700 focus:outline-none border border-transparent focus:border-gray-200 w-full sm:w-44"
                />
                <button 
                  onClick={() => alert('Coupon code entry active')}
                  className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-[10px] px-6 py-2.5 rounded-full uppercase tracking-wider transition whitespace-nowrap cursor-pointer shadow-2xs"
                >
                  Apply Code
                </button>
              </div>

              {/* Right Side: Update cart button trigger */}
              <button 
                onClick={() => alert('Cart values synced successfully!')}
                className="bg-[#8cc63f] hover:bg-[#7db335] text-white font-bold text-[10px] px-6 py-2.5 rounded-full uppercase tracking-wider transition w-full sm:w-auto whitespace-nowrap cursor-pointer shadow-2xs"
              >
                Update Cart
              </button>
            </div>

            {/* Cart Totals */}
            <div className="flex justify-end pt-8">
              <div className="w-full sm:w-80 space-y-4">
                
                {/* Board Section Header */}
                <h3 className="text-base font-bold text-gray-800 text-left tracking-wide uppercase">
                  Cart Total
                </h3>

                {/* Sub-Total & Final Price Specs box */}
                <div className="border border-gray-200 bg-white text-xs text-gray-600 font-medium select-none">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <span>Sub-Total</span>
                    <span className="font-bold text-gray-800 text-sm">${subTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white">
                    <span>Total</span>
                    <span className="font-bold text-gray-800 text-sm">${subTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Sky Blue Procedural Capsular Button Layout */}
                <div className="pt-2">
                  <Link 
                    to="/checkout" 
                    className="block text-center bg-[#00b2ff] hover:bg-[#009ed4] text-white font-bold text-[10px] py-3.5 rounded-full uppercase tracking-widest transition duration-300 shadow-2xs"
                  >
                    Proceed to Checkout
                  </Link>
                </div>

              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}