import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt, FaTruck, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { getOrders, deliverOrder, confirmOrder, shipOrder, deleteOrder } from '../../../Redux/Admin/Orders/Action';
import Pagination from "../../Components/Pagination/Pagination";  // Import the Pagination component
import Loader from "../../Components/Loader/Loader";
import {
  UilClipboardAlt,
} from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderDeleteModal from "../../Components/Alert/OrderDeleteModal";

const Order = () => {
  const dispatch = useDispatch();
  const { orders, loading, error ,deletedOrder} = useSelector((state) => state.adminOrder);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');


  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOpenModal = (orderId) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
  };


  const handleConfirmDelete = async() => {
    if (selectedOrderId) {
      await dispatch(deleteOrder(selectedOrderId))
      .then(() => {
        toast.success('Order deleted successfully!');
        dispatch(getOrders());
      })
      .catch((err) => {
        toast.error('Failed to delete order.');
      }); 
    }
    setIsModalOpen(false); 
  };

  const filteredOrders = orders.filter(order => {
    const orderId = order._id.toLowerCase();
    const customerName = `${order.user?.firstname} ${order.user?.lastname}`.toLowerCase();
    return (
      orderId.includes(searchTerm.toLowerCase()) || customerName.includes(searchTerm.toLowerCase())
    );
  });

  let pendings = 0, delivered = 0, payments = 0;

  orders.forEach(order => {
    if (order.orderStatus === "PLACED") {
      delivered += 1;
    }
    else if (order.orderStatus === "SHIPPED" || order.orderStatus === "CREATED" || order.orderStatus === "CONFIRMED") {
      pendings += 1;
    }
    if (order.paymentDetails && order.paymentDetails.paymentStatus === "PENDING") {
      payments += 1;
    }
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "PLACED":
        return "text-yellow-500";
      case "SHIPPED":
        return "text-blue-500";
      case "DELIVERED":
        return "text-green-500";
      case "CONFIRMED":
        return "text-purple-500";
      case "CANCELLED":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const indexOfLastOrder = currentPage * rowsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handleStatusChange = async (orderId, orderStatus) => {
    try {
      if (orderStatus === "Confirmed") {
        await dispatch(confirmOrder(orderId));
        toast.success('Order Status Updated successfully!');
      } else if (orderStatus === 'Shipped') {
        await dispatch(shipOrder(orderId));
        toast.success('Order Status Updated successfully!');
      } else {
        await dispatch(deliverOrder(orderId));
        toast.success('Order Status Updated successfully!',);
      }
      dispatch(getOrders()); 
    } catch (error) {
      toast.error('Failed to update order status.');
    }
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  
  return (
    <div className="p-4 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Orders Preview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
          <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 dark:bg-blue-900 justify-center mb-3 rounded-full">
            <UilClipboardAlt className="text-blue-700 dark:text-blue-300" size={24} />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md text-4xl dark:text-white font-bold text-black ">
                {orders.length}
              </h4>
              <span className="text-sm font-medium dark:text-white text-slate-400">Total Orders</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
          <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 dark:bg-blue-900 justify-center mb-3 rounded-full">
            <FaClock className="text-blue-700 dark:text-blue-300" size={24} />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md text-4xl  font-bold text-black dark:text-white">
                {pendings}
              </h4>
              <span className="text-sm font-medium text-slate-400 dark:text-white">Orders Pending</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
          <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 dark:bg-blue-900 justify-center mb-3 rounded-full">
            <FaTruck className="text-blue-700 dark:text-blue-300" size={24} />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md text-4xl dark:text-white font-bold text-black ">
                {delivered}
              </h4>
              <span className="text-sm font-medium dark:text-white text-slate-400">Orders Delivered</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
          <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 dark:bg-blue-900 justify-center mb-3 rounded-full">
            <FaMoneyBillWave className="text-blue-700 dark:text-blue-300" size={24} />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md text-4xl dark:text-white font-bold text-black ">
                {payments}
              </h4>
              <span className="text-sm font-medium dark:text-white text-slate-400">Payments Pending</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-white border border-stroke rounded-sm shadow-sm p-3 dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-4 ">
          <input
            type="text"
            placeholder="Search by order ID or customer name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        <div className="grid grid-cols-1 gap-4  overflow-x-auto ">
          {loading ? (
            <Loader />
          ) : (
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="p-3">Order</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Update</th>
                  <th className="p-3">Order Price</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders?.map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-blue-600">{order._id}</td>
                    <td className="p-3">{order.orderDate}</td>
                    <td className="p-3">{`${order.user?.firstname} ${order.user?.lastname}`}</td>
                    <td className={`p-2 text-center font-semibold ${getStatusColor(order.orderStatus)}`}>{order.orderStatus}</td>
                    <td className="p-3">
                      <select
                        value={order.orderStatus}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="border p-1 rounded"
                      >
                        <option value="Delivered">Delivered</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Shipped">Shipped</option>
                      </select>
                    </td>
                    <td className="p-3">{order.totalPrice}</td>
                    <td className="p-3">
                      <button
                        onClick={(e) => handleOpenModal(order._id)}
                        className="text-red-600 hover:text-red-800 relative group"
                      >
                        <FaTrashAlt />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
                          Delete Order
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          totalRows={filteredOrders.length}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
      <OrderDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      <ToastContainer />
    </div>
  );
};

export default Order;




