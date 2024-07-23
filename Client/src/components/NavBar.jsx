import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart/Cart';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../Redux/Auth/Action';
import { getCart } from '../Redux/Cart/Action';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const auth = useSelector((state) => state.auth);
  const {cart}=useSelector((state)=>state.cart);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleRegisterOpen = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };
  const handleRegisterClose = () => setRegisterOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    window.location.reload();
  };


  useEffect(()=>{
    if(auth.user){
      dispatch(getCart())
    }
  },[auth?.user,dispatch])
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    if (auth.user) {
      handleRegisterClose();
    }
  }, [auth.user,dispatch]);

  return (
    <>
      <div className='bg-red-300 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50'>
        <div className="navbar bg-red-300">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
              </ul>
            </div>
            <a href='/' className="btn btn-ghost text-2xl font-bold text-violet-800">ABstore</a>
          </div>
          <div className='navbar-end space-x-3 text-white'>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-3">
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
              </ul>
            </div>
            <div>
              <button className='px-4 text-white justify-center' onClick={() => setCartOpen(true)}><ShoppingCartIcon className='w-7 h-7'/> {cart?.data.totalItems}</button>
              {auth.user ? (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn text-violet-700 bg-pink-500 hover:bg-pink-400 text-xl cursor-pointer outline-none border-none rounded-badge">
                    {auth.user.firstname[0]}
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-black rounded-box w-52">
                    <li><NavLink to='/orders' className={({ isActive }) => isActive ? 'active' : ''}>My Orders</NavLink></li>
                    <li><a onClick={handleLogout}>Logout</a></li>
                  </ul>
                </div>
              ) : (
                <a className="btn text-white bg-violet-800 hover:bg-violet-500 cursor-pointer outline-none border-none" onClick={handleLoginOpen}>Login</a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Login handleClose={handleLoginClose} open={loginOpen} handleRegisterOpen={handleRegisterOpen} />
      <Register handleClose={handleRegisterClose} open={registerOpen} />
      <Cart open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default NavBar;