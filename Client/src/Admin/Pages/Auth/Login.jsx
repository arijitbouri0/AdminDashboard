import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

function AuthTabs() {

  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 my-5 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex w-full mb-4">
        <button
          onClick={() => handleTabClick('login')}
          className={`flex-1 py-2 text-center ${
            activeTab === 'login' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabClick('register')}
          className={`flex-1 py-2 text-center ${
            activeTab === 'register' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
          }`}
        >
          Register
        </button>
      </div>

      {/* Content for Login */}
      {activeTab === 'login' && (
        <div className="w-full">
          <div className="text-center mb-4">
            <p>Sign in with:</p>
            <div className="flex justify-center space-x-4">
              <button className="text-blue-600">
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
              <button className="text-blue-600">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </div>
          </div>
          <p className="text-center mb-3">or:</p>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#!" className="text-blue-600 text-sm">Forgot password?</a>
          </div>
          <button className="w-full py-2 bg-blue-600 text-white rounded-md">Sign in</button>
          <p className="text-center mt-4">
            Not a member? <a href="#!" className="text-blue-600">Register</a>
          </p>
        </div>
      )}

      {/* Content for Register */}
      {activeTab === 'register' && (
        <div className="w-full">
          <div className="text-center mb-4">
            <p>Sign up with:</p>
            <div className="flex justify-center space-x-4">
            
              <button className="text-blue-600">
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
              <button className="text-blue-600">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </button>
            </div>
          </div>
          <p className="text-center mb-3">or:</p>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label className="flex items-center mb-4 space-x-2">
            <input type="checkbox" />
            <span>I agree to the terms and conditions</span>
          </label>
          <button className="w-full py-2 bg-blue-600 text-white rounded-md">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default AuthTabs;
