import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="animate-fadeIn bg-white pb-20 font-sans text-left">
      
      {/* Page Banner */}
      <div className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-center px-4 mb-16 border-b border-gray-100"
        style={{
          backgroundImage: `url('https://htmlbeans.com/html/petshop/images/img33.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-xs">
          Checkout
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <form className="flex flex-col lg:flex-row gap-10" onSubmit={(e) => { e.preventDefault(); alert('Order Placed Successfully!'); }}>

          {/* Billing Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-base font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-3 mb-6">Billing Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <label className="block text-gray-500 font-semibold mb-2">First Name *</label>
                <input type="text" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-500 font-semibold mb-2">Last Name *</label>
                <input type="text" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 font-semibold mb-2">Company Name</label>
                <input type="text" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 font-semibold mb-2">Country *</label>
                <select className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>India</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 font-semibold mb-2">Street Address *</label>
                <input type="text" placeholder="House number and street name" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none mb-3" required />
                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-500 font-semibold mb-2">Town / City *</label>
                <input type="text" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-500 font-semibold mb-2">State / County *</label>
                <input type="text" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-500 font-semibold mb-2">Postcode / ZIP *</label>
                <input type="text" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-500 font-semibold mb-2">Phone *</label>
                <input type="tel" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
              <div>
                <label className="block text-gray-500 font-semibold mb-2">Email Address *</label>
                <input type="email" className="w-full p-3 border border-gray-200 focus:border-[#8cc63f] focus:outline-none" required />
              </div>
            </div>
          </div>

          {/* Order Summary & Payment */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8 pt-4">
              
              {/* 1. Your Order Table */}
              <div className="space-y-5">
                <h2 className="text-base font-bold text-gray-800 uppercase tracking-wide text-left">
                  Your Order
                </h2>
                <div className="border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-gray-700 text-xs font-bold bg-white border-b border-gray-200">
                        <th className="p-4 pl-6">Products</th>
                        <th className="p-4 pr-6 text-right w-44">Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-gray-600 font-medium">
                      <tr className="border-b border-gray-100">
                        <td className="p-4 pl-6 text-gray-500">Pets Puriest × 1</td>
                        <td className="p-4 pr-6 text-right font-semibold text-gray-700">34.00</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 pl-6 text-gray-500">Nutri Vitamin+ × 1</td>
                        <td className="p-4 pr-6 text-right font-semibold text-gray-700">$40.00</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-white">
                        <td className="p-4 pl-6 text-gray-700 font-bold">Sub-Total</td>
                        <td className="p-4 pr-6 text-right font-bold text-[#8cc63f] text-sm">$74.00</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 pl-6 text-gray-700 font-bold">Total</td>
                        <td className="p-4 pr-6 text-right font-bold text-[#8cc63f] text-sm">$74.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-5">
                <h2 className="text-base font-bold text-gray-800 uppercase tracking-wide text-left">
                  Payment Method
                </h2>
                
                {/* Payment Options Container */}
                <div className="bg-[#fcfbf9] border border-gray-200 p-6 md:p-8 space-y-6 text-left">
                  
                  {/* Option 1: Cheque Payment */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 text-xs font-bold text-gray-800 cursor-pointer uppercase tracking-wide">
                      <input type="radio" name="payment_method" defaultChecked className="accent-[#00b2ff] mt-0.5" />
                      <span>Cheque Payment</span>
                    </label>
                    <p className="text-[11px] text-gray-400 font-light pl-6 leading-relaxed">
                      Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                    </p>
                  </div>

                  {/* Option 2: Direct Transfer */}
                  <div>
                    <label className="flex items-center gap-3 text-xs font-bold text-gray-800 cursor-pointer uppercase tracking-wide">
                      <input type="radio" name="payment_method" className="accent-[#00b2ff]" />
                      <span>Direct Transfer</span>
                    </label>
                  </div>

                  {/* Option 3: Paypal with Cards Image logos */}
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="flex items-center gap-3 text-xs font-bold text-gray-800 cursor-pointer uppercase tracking-wide">
                      <input type="radio" name="payment_method" className="accent-[#00b2ff]" />
                      <span>Paypal</span>
                    </label>
                    <img 
                      src="https://htmlbeans.com/html/petshop/images/icon02.png" 
                      alt="PayPal Cards accepted" 
                      className="h-5 object-contain ml-1"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <a href="#" className="text-xs text-[#00b2ff] hover:underline font-medium pl-1">
                      What is Paypal?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      className="bg-[#00b2ff] hover:bg-[#009ed4] text-white font-bold text-[10px] px-10 py-3.5 rounded-full uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-2xs"
                    >
                      Place Your Order
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </form>
      </div>
    </div>
  );
}