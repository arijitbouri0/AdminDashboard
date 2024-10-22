import React from 'react';
import { FiUpload } from 'react-icons/fi';

const FileUpload = ({ handleImageUpload, imagePreview, errors }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Product Image</label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
          ) : (
            <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
          )}
          <div className="flex text-sm text-gray-600">
            <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span>Upload a file</span>
              <input id="image" name="image" type="file" className="sr-only" onChange={handleImageUpload} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image}</p>}
    </div>
  );
};

export default FileUpload;
