
import React, { Fragment } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { UilBars } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../CheckBox/DarkMode';

const NavBar = ({ className, setIsSidebarOpen, isSidebarOpen }) => {
  const notifications = [
    { id: 1, message: 'New order placed!', time: '2 minutes ago' },
    { id: 2, message: 'Server maintenance scheduled for tonight.', time: '1 hour ago' },
    { id: 3, message: 'New user registered.', time: '3 hours ago' },
  ];

  return (
    <nav className={`${className} transition-all duration-300 ease-in-out`}>
      <div className="mx-auto w-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center space-x-5">
            <button
              className="p-2 rounded-md md:hidden border"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              <UilBars className="text-xl text-gray-700" />
            </button>
            <span className="text-3xl font-bold text-yellow-400">
              AB<span className="text-pink-500">store</span>
            </span>
          </div>
          <div className="absolute inset-y-0 right-1 flex items-center pr-5 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-5 lg:mr-10 sm:mr-1">
          <DarkModeToggle className="bg-slate-300"/>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton
                  className="flex rounded-full p-1 text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform transform hover:scale-110"
                  aria-label="View notifications"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </MenuButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-2 text-sm font-medium text-gray-700">Notifications</div>
                  <ul className="py-1">
                    {notifications.length === 0 ? (
                      <li className="px-4 py-2 text-gray-500">No notifications</li>
                    ) : (
                      notifications.map(notification => (
                        <li key={notification.id} className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                          <p>{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </li>
                      ))
                    )}
                  </ul>
                </MenuItems>
              </Transition>
            </Menu>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform transform hover:scale-110">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User Profile"
                  />
                </MenuButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  {/* Profile Info */}
                  <div className="px-4 py-3">
                    <p className="text-sm text-black">Neil Sims</p>
                    <p className="text-sm font-medium text-gray-900 truncate">neil.sims@flowbite.com</p>
                  </div>

                  {/* Menu Links */}
                  <ul className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <NavLink
                          to="/admin/dashboard"
                          className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                        >
                          Dashboard
                        </NavLink>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <NavLink
                          to="/admin/user"
                          className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                        >
                          Settings
                        </NavLink>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </ul>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;




