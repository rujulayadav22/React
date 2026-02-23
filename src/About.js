import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Eatry 🍔
          </h1>
          <p className="text-gray-600 text-lg">
            Delivering happiness to your doorstep, one meal at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Eatry, our mission is simple — connect people with their 
              favorite restaurants instantly. We aim to provide a seamless, 
              fast, and delightful food ordering experience through modern 
              technology.
            </p>
          </div>
          <img
            className="rounded-2xl shadow-md"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food"
          />
        </div>

        {/* Features Section */}
        <div className="bg-white shadow-lg rounded-2xl p-10 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            🍽️ Why Choose Eatry?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold mb-2">⚡ Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Lightning-fast food delivery powered by smart routing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">🍴 Wide Variety</h3>
              <p className="text-gray-600 text-sm">
                From local favorites to trending cuisines, everything in one place.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">💳 Easy Payments</h3>
              <p className="text-gray-600 text-sm">
                Secure and seamless checkout experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;