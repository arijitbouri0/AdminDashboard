import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Sizes = ({ sizes, handleSizeChange, addSize, removeSize }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Sizes</label>
      {sizes.map((size, index) => (
        <div key={index} className="flex items-center space-x-4 mb-2">
          <input
            type="text"
            placeholder="Size Name"
            value={size.name}
            onChange={(e) => handleSizeChange(index, 'name', e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:placeholder-gray-500"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={size.quantity}
            onChange={(e) => handleSizeChange(index, 'quantity', e.target.value)}
            min="0"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:placeholder-gray-500"
          />
          <button
            type="button"
            onClick={() => removeSize(index)}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 dark:bg-red-600 dark:hover:bg-red-700"
          >
            <IoMdClose />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addSize}
        className="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:text-white dark:hover:bg-indigo-600"
      >
        Add Size
      </button>
    </div>
  );
};

export default Sizes;
