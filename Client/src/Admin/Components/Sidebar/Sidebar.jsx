
import { useState } from "react";
import {
  UilSignOutAlt,
  UilDashboard,
  UilClipboardAlt,
  UilUsersAlt,
  UilBox,
  UilAngleDown,
  UilAngleUp,
} from '@iconscout/react-unicons';
import SideBarItems from "./SidebarItem/SideBarItems";
import { NavLink } from "react-router-dom";
import {logout} from "./../../../Redux/Auth/Action" 
import { useDispatch } from 'react-redux';


export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const menuItems = [
    { icon: <UilDashboard />, label: 'Dashboard', path: '/' },
    { icon: <UilClipboardAlt />, label: 'Orders', path: '/admin/orders' },
    { icon: <UilUsersAlt />, label: 'Customers', path: '/admin/customers' },
  ];

  const toggleProductsAccordion = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(logout());
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div className={`h-screen fixed transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} bg-purple-950 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <nav
          className="min-h-screen flex flex-col bg-black"
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
        >
          <div className="p-4 pb-2 flex justify-center items-center">
            <div
              className={`font-bold text-3xl text-yellow-400 marker:text-purple-700 overflow-hidden transition-all ${isSidebarOpen ? "w-32" : "w-0"}`}
            >
              AB<span className="text-pink-400">store</span>
            </div>
          </div>
          <div className="flex-1 pl-3 mt-5 ">
            {menuItems.map((item, index) => (
              <SideBarItems
                key={index}
                icon={item.icon}
                text={item.label}
                expanded={isSidebarOpen}
                path={item.path}
              />
            ))}
            <button
              className={`flex items-center justify-between md:justify-start gap-4 p-2 rounded-s-full cursor-pointer hover:bg-pink-400 hover:text-black   text-white transition-all w-full ${isSidebarOpen ? "" : "justify-between"}`}
              onClick={toggleProductsAccordion}
            >
              <UilBox className="text-2xl md:text-3xl text-white" />
              {isSidebarOpen && (
                <>
                  <span className="text-white font-medium">Products</span>
                  <span className="text-white">
                    {isProductsOpen ? <UilAngleUp /> : <UilAngleDown />}
                  </span>
                </>
              )}
            </button>

            {isProductsOpen && isSidebarOpen && (
              <div className=" flex flex-col  bg-gray-800 rounded-md">
                <NavLink
                  to="/admin/add-new"
                  className={({ isActive }) =>
                    `relative flex items-center py-2 px-3 font-medium rounded-md transition-all duration-200 ease-in-out ${isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-700 hover:text-indigo-300 text-gray-300"
                    }`
                  }
                >
                  <span className="flex-grow">Add Products</span>
                </NavLink>
                <NavLink
                  to="/admin/products"
                  className={({ isActive }) =>
                    `relative flex items-center py-2 px-3 font-medium rounded-md transition-all duration-200 ease-in-out ${isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-700 hover:text-indigo-300 text-gray-300"
                    }`
                  }
                >
                  <span className="flex-grow">All Products</span>
                </NavLink>
              </div>
            )}

          </div>
          <div className="flex p-3">
            <UilSignOutAlt className="text-white text-2xl " />
            {isSidebarOpen && (
              <div className="ml">
                <span onClick={handleLogout}className="text-white cursor-pointer">Sign Out</span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}




