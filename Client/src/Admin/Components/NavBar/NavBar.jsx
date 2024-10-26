import React, { Fragment } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { UilBars } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../CheckBox/DarkMode';
import Notification from '../Notification/Notifiction';
import { logout } from '../../../Redux/Auth/Action';
import { useDispatch } from 'react-redux';

const NavBar = ({ className, setIsSidebarOpen, isSidebarOpen, user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    window.location.reload();
  };


  const getRandomColor = () => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <nav className={`${className} transition-all duration-300 ease-in-out dark:bg-gray-900 dark:text-gray-200`}>
      <div className="mx-auto w-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center space-x-5">
            <button
              className="p-2 rounded-md md:hidden border dark:border-gray-700"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle Sidebar"
            >
              <UilBars className="text-xl text-gray-700 dark:text-gray-300" />
            </button>
            <span className="text-3xl font-bold text-yellow-400 dark:text-yellow-300">
              AB<span className="text-pink-500 dark:text-pink-400">store</span>
            </span>
          </div>
          <div className="relative inset-y-0 right-1 flex items-center pr-5 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-5 lg:mr-10 sm:mr-1">
            <DarkModeToggle className="bg-slate-300 dark:bg-slate-600" />
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton
                  className="flex rounded-full p-1 text-gray-400 dark:text-gray-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform transform hover:scale-110"
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
                <MenuItems className="absolute right-0 z-50 mt-2 w-96 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-opacity-20">
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">Notifications</div>
                  <Notification />
                </MenuItems>
              </Transition>
            </Menu>

            <Menu as="div" className="relative ml-3">
              <div>
              <MenuButton className="flex rounded-full bg-gray-800 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform transform hover:scale-110">
                  <span className="sr-only">Open user menu</span>
                  <div className={`h-8 w-8 flex items-center justify-center rounded-full text-white ${getRandomColor()}`}>
                    {user.firstname.charAt(0).toUpperCase()}
                  </div>
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
                <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-opacity-20">
                  <div className="px-4 py-3">
                    <p className="text-sm text-black dark:text-gray-200">{user.firstname} {user.lastname}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-300 truncate">{user.email}</p>
                  </div>
                  <ul className="py-1">
                    <MenuItem>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" : "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" // specify your non-active class here
                        }
                      >
                        Dashboard
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <NavLink
                        to="/admin/user"
                        className={({ isActive }) =>
                          isActive ? "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" : "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300" // specify your non-active class here
                        }
                      >
                        Settings
                      </NavLink>
                    </MenuItem>

                    <MenuItem>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
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
