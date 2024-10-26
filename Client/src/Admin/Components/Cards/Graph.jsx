import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../Redux/Auth/Action';
import { getOrders } from '../../../Redux/Admin/Orders/Action';

const monthNames = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];

const generateMonthRange = (startDate, endDate) => {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  const months = [];

  while (start <= end) {
    months.push({ 
      name: `${monthNames[start.getMonth()]} ${start.getFullYear()}`,
      year: start.getFullYear(),
      month: start.getMonth(),
    });
    start.setMonth(start.getMonth() + 1);
  }

  return months;
};

const Chart = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.adminOrder);
  
  // State to manage which chart to show
  const [showUsers, setShowUsers] = useState(true); // Default to show users
  const [showOrders, setShowOrders] = useState(true); // Default to show orders

  const allDates = [...users.map(u => new Date(u.createdAt)), ...orders.map(o => new Date(o.orderDate))];
  const firstDate = new Date(Math.min(...allDates));
  const lastDate = new Date(Math.max(...allDates));

  const monthRange = generateMonthRange(firstDate, lastDate);

  function aggregateMonthlyData(data, type) {
    const monthlyData = {};
    data.forEach(({ createdAt, orderDate, totalItem }) => {
      const date = type === 'users' ? new Date(createdAt) : new Date(orderDate);
      const yearMonth = `${date.getFullYear()}-${date.getMonth()}`;

      if (!monthlyData[yearMonth]) {
        monthlyData[yearMonth] = 0;
      }
      monthlyData[yearMonth] += type === 'users' ? 1 : totalItem;
    });
    return monthlyData;
  }

  const usersData = aggregateMonthlyData(users, 'users');
  const ordersData = aggregateMonthlyData(orders, 'orders');

  const mergedData = monthRange.map(({ name, year, month }) => {
    const yearMonth = `${year}-${month}`;
    const userCount = usersData[yearMonth] || 0;
    const orderCount = ordersData[yearMonth] || 0;

    return {
      name, 
      'Total Users': userCount,
      'Total Orders': orderCount,
    };
  });

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>

      {/* Custom Checkboxes for selecting chart types */}
      <div className="mb-4 flex flex-col ml-10">
        <label className="flex items-center mb-2">
          <input 
            type="checkbox" 
            checked={showUsers} 
            onChange={() => setShowUsers(!showUsers)} 
            className="form-checkbox h-5 w-5 text-blue-600 rounded-full border-gray-300"
          />
          <span className={`ml-2 ${showUsers ? 'text-blue-600' : 'text-gray-600'} font-medium`}>Total Users</span>
        </label>
        <label className="flex items-center mb-2">
          <input 
            type="checkbox" 
            checked={showOrders} 
            onChange={() => setShowOrders(!showOrders)} 
            className="form-checkbox h-5 w-5 text-indigo-600 rounded-full border-gray-300"
          />
          <span className={`ml-2 ${showOrders ? 'text-indigo-600' : 'text-gray-600'} font-medium`}>Total Orders</span>
        </label>
      </div>
      <div className="ml-10 text-gray-500 mb-4 font-normal">
        <span> {firstDate.toLocaleDateString()}</span> &nbsp; - &nbsp; 
        <span> {lastDate.toLocaleDateString()}</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={mergedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(135, 206, 250, 0.8)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgba(135, 206, 250, 0.2)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(43, 63, 229, 0.8)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgba(43, 63, 229, 0.2)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <YAxis 
            stroke="gray" 
            tick={{ fontSize: 12 }} 
            allowDecimals={false}  
            axisLine={false} 
            tickLine={false}
          />

          <XAxis
            dataKey="name"
            stroke="gray"
            interval={0}  
            tick={{fontSize:12,textAnchor:'middle'}}
            axisLine={false} 
            tickLine={false}
          />

          <CartesianGrid stroke="#ccc" vertical={false} className="stroke-gray-300" />
          <Tooltip />

          {showUsers && (
            <Area
              type="monotone"
              dataKey="Total Users"
              stroke="rgba(135, 206, 250, 1)"
              fillOpacity={1}
              fill="url(#usersGradient)"
            />
          )}
          {showOrders && (
            <Area
              type="monotone"
              dataKey="Total Orders"
              stroke="rgba(43, 63, 229, 1)"
              fillOpacity={1}
              fill="url(#ordersGradient)"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
