import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/Auth/Action';  // Adjust the path based on where your auth actions are located

function LoginForm() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    console.log("Login data submitted:", loginData);
    dispatch(login(loginData)).then(() => {
    //   window.location.reload();
    });
  };

  return (
    <div className="w-full">
      <input
        type="email"
        name="email"
        placeholder="Email address"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={loginData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={loginData.password}
        onChange={handleInputChange}
      />
      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <a href="#!" className="text-blue-600 text-sm">Forgot password?</a>
      </div>
      <button onClick={handleLogin} className="w-full py-2 bg-blue-600 text-white rounded-md">Sign in</button>
    </div>
  );
}

export default LoginForm;
