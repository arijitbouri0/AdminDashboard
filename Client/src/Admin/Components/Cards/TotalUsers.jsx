// import React, { useEffect, useState } from 'react';
// import Button from '../Button/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllUsers } from '../../../Redux/Auth/Action';
// import {
//   UilUsersAlt,

// } from '@iconscout/react-unicons';

// const UsersStats = () => {
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state) => state.auth);
//   const [filterOption, setFilterOption] = useState('year');
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   const filterUsersByDate = (users, startTimestamp, endTimestamp) => {
//     return users.filter((user) => {
//       const userCreatedAt = new Date(user.createdAt).getTime();
//       return userCreatedAt >= startTimestamp && userCreatedAt <= endTimestamp;
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

//   const currentUsers = filterUsersByDate(users, startDate.getTime(), endDate.getTime());

//   const previousStartDate = startDate - (endDate - startDate);
//   const previousEndDate = endDate - (endDate - startDate);

//   const previousUsers = filterUsersByDate(users, previousStartDate, previousEndDate);

//   const currentUsersCount = currentUsers.length;
//   const previousUsersCount = previousUsers.length;
//   const change = currentUsersCount - previousUsersCount;

//   const isIncrease = change >= 0;
//   const percenatge = (change) / currentUsersCount * 100;

//   return (
//     <div className="bg-white border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
//       <div className="absolute top-4 right-4">
//         <Button setFilterOption={setFilterOption} />
//       </div>
//       <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 justify-center mb-3 rounded-full">
//         <UilUsersAlt className="text-blue-700" size={24} />
//       </div>
//       <div className="mt-4 flex items-end justify-between">
//         <div>
//           <h4 className="text-title-md text-4xl  font-bold text-black ">
//             {currentUsersCount}
//           </h4>
//           <span className="text-sm font-medium text-slate-400">Total Users</span>
//         </div>
//         <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
//           {percenatge}% <span className={`${isIncrease ? "text-green-500" : "text-red-500"} text-xl`} >{isIncrease ? '↑' : '↓'} </span>
//         </span>
//         {/* {loading && <p className="mt-2 text-sm text-gray-500">Loading users...</p>}
//         {error && <p className="mt-2 text-sm text-red-500">{error}</p>} */}
//       </div>
//     </div>
//   );
// };

// export default UsersStats; 

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../Redux/Auth/Action';
import { UilUsersAlt } from '@iconscout/react-unicons';

const UsersStats = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.auth);
  const [filterOption, setFilterOption] = useState('year');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const filterUsersByDate = (users, startTimestamp, endTimestamp) => {
    return users.filter((user) => {
      const userCreatedAt = new Date(user.createdAt).getTime();
      return userCreatedAt >= startTimestamp && userCreatedAt <= endTimestamp;
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

  const currentUsers = filterUsersByDate(users, startDate.getTime(), endDate.getTime());

  const previousStartDate = new Date(startDate.getTime() - (endDate.getTime() - startDate.getTime()));
  const previousEndDate = new Date(endDate.getTime() - (endDate.getTime() - startDate.getTime()));

  const previousUsers = filterUsersByDate(users, previousStartDate.getTime(), previousEndDate.getTime());

  const currentUsersCount = currentUsers.length;
  const previousUsersCount = previousUsers.length;
  const change = currentUsersCount - previousUsersCount;

  const isIncrease = change >= 0;
  const percentage = currentUsersCount > 0 ? (change / currentUsersCount) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
      <div className="absolute top-4 right-4">
        <Button setFilterOption={setFilterOption} />
      </div>
      <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 dark:bg-blue-900 justify-center mb-3 rounded-full">
        <UilUsersAlt className="text-blue-700 dark:text-blue-300" size={24} />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md text-4xl font-bold text-black dark:text-white">
            {loading ? "Loading..." : error ? "Error" : currentUsersCount}
          </h4>
          <span className="text-sm font-medium text-slate-400 dark:text-slate-300">Total Users</span>
        </div>
        {error ? (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        ) : (
          <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
            {Math.abs(percentage).toFixed(2)}% 
            <span className={`${isIncrease ? "text-green-500" : "text-red-500"} text-xl`}>
              {isIncrease ? '↑' : '↓'}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default UsersStats;
