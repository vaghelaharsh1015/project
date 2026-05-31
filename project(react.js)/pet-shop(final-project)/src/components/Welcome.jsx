import React from 'react';

const Welcome = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-6 text-center">
            <h2 className="text-9 font-black text-text-dark tracking-widest uppercase mb-3.5">Welcome to Petty</h2>

            <p className="text-3.5 text-text-tertiary leading-loose max-w-120 mx-auto mb-9">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters as opposed to using content here its
              making it look like readable.
            </p>

            <hr className="border-t border-border-gray mb-10" />

            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-20 h-20 border-2 border-cyan-primary rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-primary text-7 transition-all hover:bg-cyan-primary hover:text-white hover:-translate-y-1">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="text-3.75 font-bold text-text-dark mt-1">Lowest Price</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 border-2 border-cyan-primary rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-primary text-7 transition-all hover:bg-cyan-primary hover:text-white hover:-translate-y-1">
                  <i className="fas fa-atom"></i>
                </div>
                <div className="text-3.75 font-bold text-text-dark mt-1">Healthy Pets</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 border-2 border-cyan-primary rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-primary text-7 transition-all hover:bg-cyan-primary hover:text-white hover:-translate-y-1">
                  <i className="fas fa-smile"></i>
                </div>
                <div className="text-3.75 font-bold text-text-dark mt-1">Happy People</div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <img
              src="https://htmlbeans.com/html/petshop/images/img02.jpg"
              alt="Petty Dog"
              className="max-h-120 w-auto max-w-full object-contain block ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
