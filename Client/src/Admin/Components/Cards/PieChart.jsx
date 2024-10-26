import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../Redux/Auth/Action';
import { getOrders } from '../../../Redux/Admin/Orders/Action';

const Chart = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.adminOrder);

  const [showUsers, setShowUsers] = useState(true); // Default to show users
  const [showOrders, setShowOrders] = useState(true); // Default to show orders

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);


  const userCount = users.length; // Total number of users
  const orderCount = orders.reduce((acc, order) => acc + order.totalItem, 0); // Total number of orders

  // Create the pie chart data
  const pieChartData = [];
  if (showUsers) {
    pieChartData.push({ name: 'Total Users', value: userCount });
  }
  if (showOrders) {
    pieChartData.push({ name: 'Total Orders', value: orderCount });
  }

  const COLORS = ['#87CEFA', '#2B3FE5']; // Colors for the pie chart segments

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
          <span className={`ml-2 ${showOrders ? 'text-indigo-600' : 'text-gray-600'} font-medium`}>Total Sales</span>
        </label>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`} 
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
