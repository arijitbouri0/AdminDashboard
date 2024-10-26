import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; 

const List = ({ props}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border bg-white">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-4 text-sm font-medium">CUSTOMERS</th>
            <th className="p-4 text-sm font-medium">CUSTOMER ID</th>
            <th className="p-4 text-sm font-medium">ORDERS</th>
            <th className="p-4 text-sm font-medium">TOTAL SPENT</th>
            <th className="p-4 text-sm font-medium">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              <td className="p-4 flex items-center space-x-3">
                <div className="flex flex-col w-80">
                  <p className="font-semibold text-sm">{`${user.firstname} ${user.lastname}`}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </td>
              <td className="p-4 text-sm">
                <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                  {user._id}
                </span>
              </td>
              <td className="p-4 text-sm">{user.__v}</td>
              <td className="p-4 text-sm">{user.quantity}</td>
              <td className="p-4 text-sm flex space-x-4">
                <button className="flex items-center justify-center p-3 text-blue-500 hover:text-blue-700 text-lg rounded-md border border-transparent">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="flex items-center justify-center p-3 text-gray-500 hover:text-gray-700 text-lg rounded-md border border-transparent">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
