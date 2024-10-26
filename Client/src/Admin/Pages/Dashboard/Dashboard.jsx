// import React from 'react';
// import Revenue from '../../Components/Cards/Revenue';
// import RecentOrders from '../../Components/Cards/RecentOrder';
// import TotalOrders from '../../Components/Cards/TotalOrders';
// import TotalUsers from '../../Components/Cards/TotalUsers';
// import TopProducts from '../../Components/Cards/TopProducts';
// import Chart from '../../Components/Cards/Graph';
// import BarChart from '../../Components/Cards/BarChart';
// import PieChart from '../../Components/Cards/PieChart';

// const Dashboard = ({ user }) => {
//   return (
//     <div className="p-4 dark:bg-gray-900 min-h-screen">
//       <h1 className="text-5xl p-6 font-bold text-pink-600 dark:text-yellow-400">
//         Hi! <span className="text-purple-500 dark:text-yellow-300">
//           {user.firstname} {user.lastname}{' '}
//           <span className="text-slate-400 text-3xl dark:text-slate-300">Welcome To Dashboard 👋</span>
//         </span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <Revenue />
//         <TotalUsers />
//         <TotalOrders />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         <div className="col-span-3 md:col-span-2 p-4 rounded-sm border border-stroke shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 pt-8">
//           <Chart />
//         </div>
//         <div className="col-span-3 md:col-span-1 p-4 rounded-sm shadow-lg bg-white dark:bg-gray-800 border border-stroke dark:border-gray-700">
//           <BarChart />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         <div className="col-span-3 md:col-span-2 p-4 rounded-sm shadow-lg bg-white dark:bg-gray-800 border border-stroke dark:border-gray-700">
//           <TopProducts />
//         </div>
//         <div className="col-span-3 md:col-span-1 p-4 rounded-sm bg-white dark:bg-gray-800 shadow-lg border border-stroke dark:border-gray-700">
//           <PieChart />
//         </div>
//       </div>

//       <div className="p-4 rounded-sm shadow-lg mt-4 bg-white dark:bg-gray-800 border border-stroke dark:border-gray-700">
//         <RecentOrders />
//       </div>

//       <footer className="text-center mt-6">
//         <p className="text-purple-500 dark:text-yellow-300 font-medium text-lg">© 2024 Arijit Bouri. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


// import React from 'react';
// import Revenue from '../../Components/Cards/Revenue';
// import RecentOrders from '../../Components/Cards/RecentOrder';
// import TotalOrders from '../../Components/Cards/TotalOrders';
// import TotalUsers from '../../Components/Cards/TotalUsers';
// import TopProducts from '../../Components/Cards/TopProducts';
// import Chart from '../../Components/Cards/Graph';
// import BarChart from '../../Components/Cards/BarChart';
// import PieChart from '../../Components/Cards/PieChart';

// const Dashboard = ({ user }) => {
//   return (
//     <div className='p-4 dark:bg-gray-900 min-h-screen overflow-hidden'> {/* Limit max height and add overflow */}
//       <h1 className='text-5xl p-6 font-bold text-pink-600 dark:text-yellow-300'>
//         Hi ! <span className='text-purple-500 dark:text-yellow-300'>{user.firstname} {user.lastname} <span className='text-slate-400 text-3xl dark:text-slate-300'>Welcome To Dashboard <span>👋</span></span></span>
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <Revenue />
//         <TotalUsers />
//         <TotalOrders />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         <div className="col-span-3 md:col-span-2 dark:bg-gray-800 dark:border-gray-700 p-4 rounded-sm border border-stroke shadow-lg bg-white pt-8">
//           <Chart />
//         </div>
//         <div className="col-span-3 md:col-span-1 p-4 dark:bg-gray-800 dark:border-gray-700 rounded-sm shadow-lg bg-white border border-stroke">
//           <BarChart />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         <div className="col-span-3 md:col-span-2 p-4 dark:bg-gray-800 dark:border-gray-700 rounded-sm shadow-lg bg-white border border-stroke">
//           <TopProducts />
//         </div>
//         <div className="col-span-3 md:col-span-1 p-4 dark:bg-gray-800 dark:border-gray-700 rounded-sm bg-white shadow-lg border border-stroke">
//           <PieChart />
//         </div>
//       </div>

//       <div className="p-4 rounded-sm shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-4 bg-white border border-stroke">
//         <RecentOrders />
//       </div>

//       <footer className="text-center mt-6">
//         <p className="text-purple-500 font-medium text-lg">© 2024 Arijit Bouri. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;  




import React from 'react';
import Revenue from '../../Components/Cards/Revenue';
import RecentOrders from '../../Components/Cards/RecentOrder';
import TotalOrders from '../../Components/Cards/TotalOrders';
import TotalUsers from '../../Components/Cards/TotalUsers';
import TopProducts from '../../Components/Cards/TopProducts';
import Chart from '../../Components/Cards/Graph';
import BarChart from '../../Components/Cards/BarChart';
import PieChart from '../../Components/Cards/PieChart';

const Dashboard = ({ user }) => {
  return (
    <div className='p-4 dark:bg-gray-900 min-h-screen'>
        <h1 className='text-5xl p-6 font-bold text-pink-600 dark:text-yellow-300'>
          Hi! <span className='text-purple-500 dark:text-yellow-300'>{user.firstname} {user.lastname} <span className='text-slate-400 text-3xl dark:text-slate-300'>Welcome To Dashboard <span>👋</span></span></span>
        </h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
          <Revenue />
          <TotalUsers />
          <TotalOrders />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1 md:col-span-2 dark:bg-gray-800 dark:border-gray-700 p-4 rounded-sm border border-stroke shadow-lg bg-white">
            <Chart />
          </div>
          <div className="col-span-1 md:col-span-1 p-4 dark:bg-gray-800 dark:border-gray-700 rounded-sm shadow-lg bg-white border border-stroke">
            <BarChart />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1 md:col-span-2 p-4 dark:bg-gray-800 dark:border-gray-700 rounded-sm shadow-lg bg-white border border-stroke">
            <TopProducts />
          </div>
          <div className="col-span-1 md:col-span-1 p-4 dark:bg-gray-800 dark:border-gray-700 rounded-sm bg-white shadow-lg border border-stroke">
            <PieChart />
          </div>
        </div>

        <div className="p-4 rounded-sm shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-4 bg-white border border-stroke">
          <RecentOrders />
        </div>

        <footer className="text-center mt-6">
          <p className="text-purple-500 font-medium text-lg">© 2024 Arijit Bouri. All rights reserved.</p>
        </footer>
    </div>
  );
};

export default Dashboard;
