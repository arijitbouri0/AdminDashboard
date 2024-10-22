import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../Redux/Auth/Action';
import dayjs from 'dayjs'; 
import { getOrders } from '../../../Redux/Admin/Orders/Action';

const Chart = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.adminOrder);
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  const groupUsersByMonth = (users) => {
    const groupedData = {};
    users.forEach((user) => {
      const month = dayjs(user.createdAt).format('MMMM YYYY'); 
      if (!groupedData[month]) {
        groupedData[month] = 1;
      } else {
        groupedData[month] += 1;
      }
    });

    return Object.keys(groupedData).map((month) => ({
      name: month,
      Total: groupedData[month],
    }));
  };

  const groupOrdersByMonth = (orders) => {
    const groupedOrders = {};
    const groupedRevenue = {};

    orders.forEach((order) => {
      const month = dayjs(order.createdAt).format('MMMM YYYY'); 
      if (!groupedOrders[month]) {
        groupedOrders[month] = 1;
        groupedRevenue[month] = order.totalPrice; 
      } else {
        groupedOrders[month] += 1;
        groupedRevenue[month] += order.totalPrice; 
      }
    });

    const ordersData = Object.keys(groupedOrders).map((month) => ({
      name: month,
      Total: groupedOrders[month],
    }));

    const revenueData = Object.keys(groupedRevenue).map((month) => ({
      name: month,
      Total: groupedRevenue[month],
    }));

    return { ordersData, revenueData };
  };

  const { ordersData, revenueData } = groupOrdersByMonth(orders);
  const usersData = groupUsersByMonth(users);

  const data = {
    revenue: revenueData,
    orders: ordersData,
    users: usersData,
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);


  const handleMetricChange = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <button
            className={`p-2 border rounded transition-colors duration-300 ${selectedMetric === "revenue" ? "bg-blue-500 text-white" : "bg-white"
              } hover:bg-blue-100`}
            onClick={() => handleMetricChange("revenue")}
          >
            Revenue
          </button>
          <button
            className={`p-2 border rounded transition-colors duration-300 ${selectedMetric === "orders" ? "bg-blue-500 text-white" : "bg-white"
              } hover:bg-blue-100`}
            onClick={() => handleMetricChange("orders")}
          >
            Orders
          </button>
          <button
            className={`p-2 border rounded transition-colors duration-300 ${selectedMetric === "users" ? "bg-blue-500 text-white" : "bg-white"
              } hover:bg-blue-100`}
            onClick={() => handleMetricChange("users")}
          >
            Users
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data[selectedMetric]} 
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
