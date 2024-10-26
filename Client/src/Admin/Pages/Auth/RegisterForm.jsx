import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Auth/Action';  

function RegisterForm() {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = () => {
    console.log("Registration data submitted:", registerData);
    dispatch(register(registerData)).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="w-full">
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={registerData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={registerData.lastname}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={registerData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={registerData.password}
        onChange={handleInputChange}
      />
      <select
        name="role"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        value={registerData.role}
        onChange={handleInputChange}
      >
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <label className="flex items-center mb-4 space-x-2">
        <input type="checkbox" />
        <span>I agree to the terms and conditions</span>
      </label>
      <button onClick={handleRegister} className="w-full py-2 bg-blue-600 text-white rounded-md">Sign up</button>
    </div>
  );
}

export default RegisterForm;
