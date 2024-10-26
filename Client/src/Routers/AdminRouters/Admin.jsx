import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Admin/Components/Sidebar/Sidebar';
import Dashboard from '../../Admin/Pages/Dashboard/Dashboard';
import Orders from '../../Admin/Pages/Orders/Order';
import Customers from '../../Admin/Pages/Customers/Customer';
import AllProducts from '../../Admin/Pages/Products/AllProducts/AllProducts';
import AddProducts from '../../Admin/Pages/Products/CreateProducts/CreateProducts';
import NavBar from '../../Admin/Components/NavBar/NavBar';
import UserDetails from '../../Admin/Pages/UserDetails/UserDetails';

const Admin = ({user}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'm-2 md:ml-20'} h-fit`}>
        <NavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          className={`sticky top-0 left-0 right-0 z-50 
          ${scrolled ? ' shadow-lg bg-white' : ''} 
             transition-colors duration-300 ease-in-out`}
             user={user}
        />
        <Routes>
          <Route path="/" element={<Dashboard user={user}/>} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products" element={<AllProducts />} />
          <Route path="/admin/add-new" element={<AddProducts />} />
          <Route path='/admin/user' element={<UserDetails user={user}/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;

