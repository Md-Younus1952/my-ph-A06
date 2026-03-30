import React from "react";
import { PiBroadcast } from "react-icons/pi";

function ReadyTransform() {
  return (
    <div className="items-center text-center py-16 px-6 md:px-16">
      {/* Badge */}
      <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 font-weight-500 text-sm px-4 py-1 rounded-full mb-4">
        <PiBroadcast /> New: AI-Powered Tools Available
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
        Supercharge Your <br />
        Digital Workflow
      </h1>

      {/* Description */}
      <p className="text-gray-500 mb-6 max-w-lg">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="gradient-bg text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90">
          Explore Products
        </button>

        <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50">
          ▶ Watch Demo
        </button>
      </div>
    </div>
  );
}

export default ReadyTransform;
