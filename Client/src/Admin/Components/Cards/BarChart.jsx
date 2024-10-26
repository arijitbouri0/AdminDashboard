
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Redux/Admin/Orders/Action';
import { getAllUsers } from '../../../Redux/Auth/Action';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Aggregating monthly data for users and orders
function aggregateMonthlyData(data, type) {
    const monthlyData = {};

    data.forEach(({ createdAt, orderDate, totalItem }) => {
        const date = type === 'users' ? new Date(createdAt) : new Date(orderDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const label = `${monthNames[month]} ${year}`;

        if (!monthlyData[label]) {
            monthlyData[label] = 0;
        }
        monthlyData[label] += type === 'users' ? 1 : totalItem;
    });

    return Object.keys(monthlyData).map(month => ({
        month,
        count: monthlyData[month],
    }));
}

const BarChartComponent = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.adminOrder);
    const { users } = useSelector((state) => state.auth);

    const [showUsers, setShowUsers] = useState(true);
    const [showOrders, setShowOrders] = useState(true);

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getAllUsers());
    }, [dispatch]);

    const monthlyUsers = aggregateMonthlyData(users, 'users');
    const monthlyOrders = aggregateMonthlyData(orders, 'orders');

    const allMonths = Array.from(new Set([...monthlyUsers, ...monthlyOrders].map(item => item.month))).sort((a, b) => new Date(a) - new Date(b));

    const data = allMonths.map(month => ({
        month,
        'Total Orders': monthlyOrders.find(item => item.month === month)?.count || 0,
        'Total Users': monthlyUsers.find(item => item.month === month)?.count || 0,
    }));

    return (
        <div style={{ width: '100%', height: '100%' }}>
           <div className="mb-4 ml-10 flex space-x-4">
                <button
                    onClick={() => setShowUsers(!showUsers)}
                    style={{ color: 'rgba(135, 206, 250, 0.8)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    Total Users
                </button>
                <button
                    onClick={() => setShowOrders(!showOrders)}
                    style={{ color: 'rgba(43, 63, 229, 0.8)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    Total Users
                </button>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="none" vertical={false} />
                    <XAxis dataKey="month" 
                        interval={0}
                        tick={{fontSize:12,textAnchor:'middle'}}
                    />
                    <YAxis
                     axisLine={false} 
                     allowDecimals={false}  />
                    <Tooltip />
                    {showOrders && (
                        <Bar dataKey="Total Orders" fill="rgba(43, 63, 229, 1)" stackId="a" barSize={10}   />
                    )}
                    {showUsers && (
                        <Bar dataKey="Total Users" fill="rgba(135, 206, 250, 1)" stackId="a" barSize={10}  />
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

export default BarChartComponent; 


