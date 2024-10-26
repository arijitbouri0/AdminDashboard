import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const UserDetails = ({ user }) => {
    return (
        <div className="min-h-screen dark:bg-gray-900 text-white p-4 overflow-hidden">
            <div className="flex mb-5">
                <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                    <li className="inline-flex items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center text-gray-300 hover:text-primary-600' dark: 'text-gray-800 hover:text-blue-600' ${isActive ? 'border-b-0' : ''}`
                            }
                        >
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <NavLink
                            to="/admin/user"
                            className={({ isActive }) =>
                                `flex items-center text-gray-300 hover:text-primary-600' dark: 'text-gray-800 hover:text-blue-600' ${isActive ? 'border-b-0' : ''}`
                            }
                        >
                            Users
                        </NavLink>
                    </li>
                </ol>
            </div>

            <div className="p-3 text-2xl dark:text-white text-gray-800 font-medium">
                User Settings
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 space-y-6">
                    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
                        <div className="flex flex-col items-center">
                            {/* Initial Letter as Avatar */}
                            <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold text-white">
                                {user.firstname.charAt(0)}
                            </div>
                            <h2 className="mt-4 font-bold text-xl dark:text-white text-gray-800">{user.firstname} {user.lastname}</h2>
                            <p className="text-gray-400 text-sm">{user.role}</p>
                            <p className="text-sm text-gray-400 mt-2">JPG, GIF, or PNG. Max size of 800K</p>
                            <div className="mt-4 space-x-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                    Upload Picture
                                </button>
                                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 dark:text-white text-gray-800">
                        <h2 className="text-xl font-bold mb-4">Connect Social Media</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <FaFacebook />
                                <span>Facebook</span>
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </button>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <FaInstagram />
                                <span>Instagram</span>
                            </button>
                            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <FaTwitter />
                                <span>Twitter</span>
                            </button>
                            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <FaGithub />
                                <span>GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 space-y-6">
                    {/* General Information Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 dark:text-white text-gray-800">
                        <h2 className="text-xl font-bold mb-4">General Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm">First Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 bg-white dark:bg-gray-700 rounded-lg"
                                    placeholder="enter your firstname"
                                    defaultValue={user.firstname}
                                />
                            </div>
                            <div>
                                <label className="block text-sm">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 bg-white dark:bg-gray-700 rounded-lg"
                                    placeholder="enter your lastname"
                                    defaultValue={user.lastname}
                                />
                            </div>
                            <div>
                                <label className="block text-sm">Email</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 p-2 bg-white dark:bg-gray-700 rounded-lg"
                                    placeholder="enter your email"
                                    defaultValue={user.email}
                                />
                            </div>
                        </div>
                        {/* Save Button */}
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Change Password Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 dark:text-white text-gray-800">
                        <h2 className="text-xl font-bold mb-4">Change Password</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm">Current Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 bg-white dark:bg-gray-700 rounded-lg"
                                    placeholder="enter your password"
                                    defaultValue={user.password}
                                />
                            </div>
                            <div>
                                <label className="block text-sm">New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 bg-white dark:bg-gray-700 rounded-lg"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div>
                                <label className="block text-sm">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 p-2 bg-white dark:bg-gray-700 rounded-lg"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Save Password
                            </button>
                        </div>
                    </div>

                    <div className="bg-red-800 rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Delete Account</h2>
                        <p className="text-sm text-red-300">
                            Warning: Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;



