import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from '../../../Redux/Auth/Action';
import Pagination from '../../Components/Pagination/Pagination';
import Loader from '../../Components/Loader/Loader';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserModel from "./../../Components/Modal/UserModel"
import CustomerDeleteModal from './../../Components/Alert/CustomerDeleteModal'


const Customer = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);  

  const toggleModal = (user = null) => {
    setSelectedUser(user);
    setIsModalOpen(!isModalOpen);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => {
    const userId = user._id.toLowerCase();
    const customerName = `${user?.firstname} ${user?.lastname}`.toLowerCase();
    return (
      userId.includes(searchTerm.toLowerCase()) || customerName.includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastOrder = currentPage * rowsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

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


  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleOpenModal = (userId) => {
    setSelectedCustomerId(userId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async() => {
    if (selectedCustomerId) {
      await dispatch(deleteUser(selectedCustomerId))
      .then(() => {
        toast.success('User deleted successfully!');
        dispatch(getAllUsers());
      })
      .catch((err) => {
        toast.error('Failed to delete User.');
      }); 
    }
    setIsDeleteModalOpen(false); 
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch,isModalOpen]);

  return (
    <div className="p-4 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4">Total Users</h2>
      <div className='mt-2 bg-white border border-stroke rounded-sm shadow-sm p-3 dark:bg-gray-800 dark:border-gray-700'>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search User.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 overflow-x-auto">
          {isLoading ? (
            <Loader />
          ) : (
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="p-3">CUSTOMERS</th>
                  <th className="p-3">CUSTOMER ID</th>
                  <th className="p-3">ROLE</th>
                  <th className="p-3">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers?.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {user.firstname} {user.lastname}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm leading-5 text-gray-900">{user._id}</div>
                    </td>
                    <td className="p-3">
                      <div className="text-sm leading-5 text-gray-900">{user.role}</div>
                    </td>
                    <td className="p-4 text-sm flex space-x-4">
                      <button
                        onClick={() => toggleModal(user)}  
                        className="flex items-center justify-center p-3 text-blue-500 hover:text-blue-700 text-lg rounded-md border border-transparent relative group"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
                          Edit User
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </button>

                      <button
                        onClick={() =>handleOpenModal(user._id)}
                        className="flex items-center justify-center p-3 text-gray-500 hover:text-gray-700 text-lg rounded-md border border-transparent relative group"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
                          Delete User
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
          totalRows={filteredUsers.length}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
      {isModalOpen && (
        <UserModel toggleModal={toggleModal} user={selectedUser} />
      )}
      <CustomerDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      <ToastContainer />
    </div>
  );
};

export default Customer;

