import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-white border-b border-border-light py-2.5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4 flex gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9.5 h-9.5 border-2 border-cyan-primary rounded-full flex items-center justify-center text-cyan-primary text-3.75 flex-shrink-0">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <div className="text-2.75 font-bold text-text-primary leading-tight">Mail us:</div>
                <div className="text-2.75 text-text-tertiary leading-tight">petty@support.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9.5 h-9.5 border-2 border-cyan-primary rounded-full flex items-center justify-center text-cyan-primary text-3.75 flex-shrink-0">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <div className="text-2.75 font-bold text-text-primary leading-tight">Call us:</div>
                <div className="text-2.75 text-text-tertiary leading-tight">(+1) 345 678 000</div>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center">
            <div className="bg-white py-1.5 px-7 text-center relative z-10 -mt-3 inline-block">
              <img src="https://htmlbeans.com/html/petshop/images/logo.png" alt="Petty Logo" className="h-9 w-auto mx-auto" />
              <span className="text-5 font-bold text-text-primary tracking-wide block mt-0.5">Petty</span>
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-end">
            <div className="flex gap-1">
              <a href="#" className="w-8 h-8 rounded-full bg-border-light text-text-secondary text-3.25 flex items-center justify-center transition-all hover:bg-cyan-primary hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-border-light text-text-secondary text-3.25 flex items-center justify-center transition-all hover:bg-cyan-primary hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-border-light text-text-secondary text-3.25 flex items-center justify-center transition-all hover:bg-cyan-primary hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="flex gap-3.5 ml-3.5">
              <a href="#" className="text-3.25 text-text-secondary flex items-center gap-1.25 font-medium transition-colors hover:text-cyan-primary">
                <i className="fas fa-user text-3.75"></i> Account
              </a>
              <a href="#" className="text-3.25 text-text-secondary flex items-center gap-1.25 font-medium transition-colors hover:text-cyan-primary">
                <i className="fas fa-shopping-cart text-3.75"></i> Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
