import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 my-5 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex w-full mb-4">
        <button
          onClick={() => handleTabClick('login')}
          className={`flex-1 py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabClick('register')}
          className={`flex-1 py-2 text-center ${activeTab === 'register' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
        >
          Register
        </button>
      </div>

      {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default AuthTabs;
