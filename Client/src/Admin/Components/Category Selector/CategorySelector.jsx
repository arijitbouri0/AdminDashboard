import React from 'react';

const CategorySelector = ({ formData, handleInputChange, errors }) => {
  const categories = ['Mens', 'Women', 'Kids', 'Accessories', 'Sports'];

  return (
    <>
      <div>
        <label htmlFor="topLevelCategory" className="block text-sm font-medium text-gray-700">Category</label>
        <select
          id="topLevelCategory"
          name="topLevelCategory"
          value={formData.topLevelCategory}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.topLevelCategory ? 'border-red-500' : ''}`}
        >
          <option value="">Select a Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        {errors.topLevelCategory && <p className="mt-2 text-sm text-red-600">{errors.topLevelCategory}</p>}
      </div>

      <div>
        <label htmlFor="secondLevelCategory" className="block text-sm font-medium text-gray-700">Sub Category</label>
        <input
          type="text"
          id="secondLevelCategory"
          name="secondLevelCategory"
          value={formData.secondLevelCategory}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>

      <div>
        <label htmlFor="thirdLevelCategory" className="block text-sm font-medium text-gray-700">Sub Sub Category</label>
        <input
          type="text"
          id="thirdLevelCategory"
          name="thirdLevelCategory"
          value={formData.thirdLevelCategory}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>
    </>
  );
};

export default CategorySelector;
