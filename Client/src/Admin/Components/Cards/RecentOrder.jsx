import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getOrders } from '../../../Redux/Admin/Orders/Action';
import Loader from '../Loader/Loader';

const RecentOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.adminOrder);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const [recentOrders, setRecentOrders] = useState([]);
  useEffect(() => {
    if (orders && orders.length > 0) {
      const sortedOrders = [...orders].sort(
        (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
      );
      setRecentOrders(sortedOrders.slice(0, 5));
    }
  }, [orders]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
      {loading ?
        (<Loader />)
        :
        (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 p-2">Products</th>
                  <th className="border border-gray-300 p-2">Tracking ID</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders?.map((order) => (
                  <tr key={order._id}>
                    <td className="border border-gray-300 p-2">
                      {order.orderItems.map((item) => (
                        <img
                          key={item._id}
                          src={item.product.imageUrl}
                          alt={item.product.title}
                          className="w-16 h-16 object-cover"
                        />
                      ))}
                    </td>
                    <td className="border border-gray-300 p-2">{order._id}</td>
                    <td className="border border-gray-300 p-2">{order.orderDate}</td>
                    <td className="border border-gray-300 p-2">
                      <span
                        className={`px-2 py-1 text-xs font-bold ${order.orderStatus === "SHIPPED"
                          ? ' text-blue-500'
                          : order.orderStatus === "DELIVERED"
                            ? ' text-green-500'
                            : order.orderStatus === "CONFIRMED"
                              ? ' text-purple-500'
                              : order.orderStatus === "CANCELLED"
                                ? ' text-red-800'
                                : order.orderStatus === "PLACED"
                                  ? 'text-yellow-500'
                                  : 'text-gray-500'
                          }`}
                      >
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <div className='text-purple-700'>
                        {order.user?.firstname} {order.user?.lastname}
                      </div>
                      <div className='font-semibold'>
                        {order.user?.email}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      <div className='text-right p-5'>
        <NavLink to='/admin/orders' className='bg-blue-500 p-1 text-yellow-50 rounded-sm'>show all</NavLink>
      </div>
    </>
  );
};

export default RecentOrders;
