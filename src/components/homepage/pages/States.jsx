import React from "react";

function States() {
  return (
    <section className="bg-linear-to-r from-[#5f2eea] via-[#7b2ff7] to-[#c026d3] text-white py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
          <div className="py-6">
            <h3 className="text-3xl md:text-4xl font-bold">50K+</h3>
            <p className="text-white/80 mt-2">Active Users</p>
          </div>

          <div className="py-6">
            <h3 className="text-3xl md:text-4xl font-bold">200+</h3>
            <p className="text-white/80 mt-2">Premium Tools</p>
          </div>

          <div className="py-6">
            <h3 className="text-3xl md:text-4xl font-bold">4.9</h3>
            <p className="text-white/80 mt-2">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default States;
