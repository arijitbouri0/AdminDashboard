import React from 'react';
import Revenue from '../../Components/Cards/Revenue';
import RecentOrders from '../../Components/Cards/RecentOrder';
import TotalOrders from '../../Components/Cards/TotalOrders'
import TotalUsers from '../../Components/Cards/TotalUsers'
import TopProducts from '../../Components/Cards/TopProducts';
import Chart from '../../Components/Cards/Graph';
import BarChart from '../../Components/Cards/BarChart';

const Dashboard = () => {
  return (
    <div className='p-4'>
      <h1 className='text-5xl p-6 font-bold text-pink-600 '>
        Hi ! <span className='text-purple-500'>Arijit <span className='text-slate-400 text-3xl '>Welcome To Dashboard <span>👋</span></span></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Revenue />
        <TotalUsers />
        <TotalOrders />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-sm border border-stokes shadow-lg bg-white">
          <Chart />  
        </div>
        <div className="p-4 rounded-sm shadow-lg bg-white border border-stroke">
          <BarChart/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-sm  shadow-lg bg-white border border-stokes">
          <TopProducts />  
        </div>
        <div className="p-4 rounded-sm bg-white shadow-lg border border-stokes">
        </div>
      </div>

      <div className="p-4 rounded-sm shadow-lg mt-4 bg-white border border-stokes">
        <RecentOrders />  
      </div>

      <footer className="text-center mt-6">
        <p className="text-purple-500 font-medium text-lg">© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>

  );
};

export default Dashboard;
