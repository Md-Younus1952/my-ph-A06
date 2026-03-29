import React from "react";
import heroImg from "../../../assets/banner.png";

function Banner() {
  return (
    <div className=" container mx-auto px-4 py-8">
      <div>
        <div className="hero min-h-screen gradient-bg">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Welcome to DigiTools</h1>
              <p className="py-6">
                Discover the power of our digital tools and transform your
                workflow today.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <img src={heroImg} alt="Hero" />
    </div>
  );
}

export default Banner;
