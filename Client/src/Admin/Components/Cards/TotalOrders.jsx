// import React, { useEffect, useState } from 'react';
// import Button from '../Button/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { getOrders } from '../../../Redux/Admin/Orders/Action';
// import {
//   UilClipboardAlt,
// } from '@iconscout/react-unicons';

// const Revenue = () => {
//   const dispatch = useDispatch();
//   const { orders, loading, error } = useSelector((state) => state.adminOrder)
//   const [filterOption, setFilterOption] = useState('year');
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     dispatch(getOrders());
//   }, [dispatch]);

//   const filterOrdersByDate = (orders, startTimestamp, endTimestamp) => {
//     return orders.filter((order) => {
//       const orderCreatedAt = new Date(order.createdAt).getTime();
//       return orderCreatedAt >= startTimestamp && orderCreatedAt <= endTimestamp;
//     });
//   };

//   useEffect(() => {
//     const today = new Date();
//     switch (filterOption) {
//       case 'year':
//         setStartDate(new Date(today.getFullYear(), 0, 1));
//         setEndDate(new Date(today.getFullYear() + 1, 0, 1));
//         break;
//       case 'month':
//         setStartDate(new Date(today.getFullYear(), today.getMonth(), 1));
//         setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 1));
//         break;
//       case 'week':
//         const firstDayOfWeek = new Date(today);
//         firstDayOfWeek.setDate(today.getDate() - today.getDay());
//         setStartDate(firstDayOfWeek);
//         const lastDayOfWeek = new Date(firstDayOfWeek);
//         lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
//         setEndDate(lastDayOfWeek);
//         break;
//       default:
//         setStartDate(new Date(today));
//         setEndDate(new Date(today));
//     }
//   }, [filterOption]);

//   const currentOrders = filterOrdersByDate(orders, startDate.getTime(), endDate.getTime());

//   const previousStartDate = startDate - (endDate - startDate);
//   const previousEndDate = endDate - (endDate - startDate);

//   const previousOrders = filterOrdersByDate(orders, previousStartDate, previousEndDate);

//   const currentOrdersCount = currentOrders.length;
//   const previousOrdersCount = previousOrders.length;
//   const change = currentOrdersCount - previousOrdersCount;

//   const isIncrease = change >= 0;
//   const percenatge=(change)/currentOrdersCount*100;

//   return (
//     <div className="bg-white border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
//     <div className="absolute top-4 right-4">
//       <Button setFilterOption={setFilterOption} />
//     </div>
//     <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 justify-center mb-3 rounded-full">
//       <UilClipboardAlt className="text-blue-700" size={24} />
//     </div>
//     <div className="mt-4 flex items-end justify-between">
//       <div>
//         <h4 className="text-title-md text-4xl  font-bold text-black ">
//           {currentOrdersCount}
//         </h4>
//         <span className="text-sm font-medium text-slate-400">Total Orders</span>
//       </div>
//       <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
//           {percenatge}% <span className={`${isIncrease ? "text-green-500":"text-red-500"} text-xl`} >{isIncrease ? '↑' : '↓'} </span>
//         </span>
//       {/* {loading && <p className="mt-2 text-sm text-gray-500">Loading users...</p>}
//           {error && <p className="mt-2 text-sm text-red-500">{error}</p>} */}
//     </div>
//   </div>
//   );
// };

// export default Revenue;


import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Redux/Admin/Orders/Action';
import { UilClipboardAlt } from '@iconscout/react-unicons';

const Revenue = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.adminOrder);
  const [filterOption, setFilterOption] = useState('year');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const filterOrdersByDate = (orders, startTimestamp, endTimestamp) => {
    return orders.filter((order) => {
      const orderCreatedAt = new Date(order.createdAt).getTime();
      return orderCreatedAt >= startTimestamp && orderCreatedAt <= endTimestamp;
    });
  };

  useEffect(() => {
    const today = new Date();
    switch (filterOption) {
      case 'year':
        setStartDate(new Date(today.getFullYear(), 0, 1));
        setEndDate(new Date(today.getFullYear() + 1, 0, 1));
        break;
      case 'month':
        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1));
        setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 1));
        break;
      case 'week':
        const firstDayOfWeek = new Date(today);
        firstDayOfWeek.setDate(today.getDate() - today.getDay());
        setStartDate(firstDayOfWeek);
        const lastDayOfWeek = new Date(firstDayOfWeek);
        lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
        setEndDate(lastDayOfWeek);
        break;
      default:
        setStartDate(new Date(today));
        setEndDate(new Date(today));
    }
  }, [filterOption]);

  const currentOrders = filterOrdersByDate(orders, startDate.getTime(), endDate.getTime());

  const previousStartDate = new Date(startDate.getTime() - (endDate.getTime() - startDate.getTime()));
  const previousEndDate = new Date(endDate.getTime() - (endDate.getTime() - startDate.getTime()));

  const previousOrders = filterOrdersByDate(orders, previousStartDate.getTime(), previousEndDate.getTime());

  const currentOrdersCount = currentOrders.length;
  const previousOrdersCount = previousOrders.length;
  const change = currentOrdersCount - previousOrdersCount;

  const isIncrease = change >= 0;
  const percentage = currentOrdersCount > 0 ? ((change / currentOrdersCount) * 100).toFixed(2) : 0;

  return (
    <div className="bg-white dark:bg-gray-800 border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
      <div className="absolute top-4 right-4">
        <Button setFilterOption={setFilterOption} />
      </div>
      <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 dark:bg-blue-900 justify-center mb-3 rounded-full">
        <UilClipboardAlt className="text-blue-700 dark:text-blue-300" size={24} />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md text-4xl font-bold text-black dark:text-white">
            {currentOrdersCount}
          </h4>
          <span className="text-sm font-medium text-slate-400 dark:text-gray-400">Total Orders</span>
        </div>
        <span className="flex items-center gap-1 text-sm font-medium">
          {percentage}% 
          <span className={`${isIncrease ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"} text-xl`}>
            {isIncrease ? '↑' : '↓'}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Revenue;


