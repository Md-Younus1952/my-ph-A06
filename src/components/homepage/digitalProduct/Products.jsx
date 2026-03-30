import React from "react";

function Products() {
  const products = [
    {
      title: "AI Writing Pro",
      price: "$29",
      desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      badge: "Best Seller",
      features: [
        "Unlimited AI generations",
        "50+ writing templates",
        "Grammar checker",
      ],
    },
    {
      title: "Design Templates Pack",
      price: "$49",
      desc: "2000+ premium templates for social media, presentations, and marketing materials.",
      badge: "Popular",
      features: ["2000+ templates", "Monthly updates", "Commercial license"],
    },
    {
      title: "Premium Stock Assets",
      price: "$19",
      desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      badge: "New",
      features: ["10M+ assets", "Commercial use", "No attribution"],
    },
    {
      title: "Automation Toolkit",
      price: "$79",
      desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
      badge: "Popular",
      features: ["50+ automations", "API access", "Custom workflows"],
    },
    {
      title: "Resume Builder Pro",
      price: "$15",
      desc: "Create professional resumes and cover letters that land interviews.",
      badge: "New",
      features: ["100+ templates", "ATS optimization", "Export to PDF"],
    },
    {
      title: "Social Media Content Kit",
      price: "$39",
      desc: "Complete toolkit for creating engaging social media content across all platforms.",
      badge: "Best Seller",
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Premium Digital Tools
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-linear-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-full">
            Products
          </button>
          <button className="text-gray-500">Cart (2)</button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition relative text-left"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
                {item.badge}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

              {/* Price */}
              <p className="text-xl font-bold text-gray-800 mb-4">
                {item.price}
                <span className="text-sm text-gray-400">/mo</span>
              </p>

              {/* Features */}
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                {item.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-linear-to-r from-purple-600 to-indigo-500 text-white py-2 rounded-full">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
