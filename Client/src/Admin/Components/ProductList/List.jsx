import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProductDeleteModal from '../Alert/ProductDeleteModel';
import ProductModal from '../Modal/ProductModal';

const List = ({ props, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedProductId, setSelectedProductId] = useState(null);  // Store selected product ID

  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      onDelete(selectedProductId);  
    }
    setIsModalOpen(false); 
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);  

  const toggleModal = (product = null) => {
    setSelectedProduct(product);
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border bg-white dark:bg-gray-800 dark:border-gray-700">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-4 text-sm font-medium">PRODUCT</th>
            <th className="p-4 text-sm font-medium">CATEGORY</th>
            <th className="p-4 text-sm font-medium">PRICE</th>
            <th className="p-4 text-sm font-medium">QTY</th>
            <th className="p-4 text-sm font-medium">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.map((product) => (
            <tr key={product._id} className="text-center border-b hover:bg-gray-50">
              <td className="p-4 flex items-center space-x-3">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col w-80">
                  <p className="font-semibold text-sm">{product.title}</p>
                  <p className="text-xs text-gray-500">{product.description}</p>
                </div>
              </td>
              <td className="p-4 text-sm">
                <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                  {product.category}
                </span>
              </td>
              <td className="p-4 text-sm">{product.price}</td>
              <td className="p-4 text-sm">{product.quantity}</td>
              <td className="p-4 text-sm flex space-x-4">
                <button onClick={() => toggleModal(product)} className="flex items-center justify-center p-3 text-blue-500 hover:text-blue-700 text-lg rounded-md border border-transparent relative group">
                  <FontAwesomeIcon icon={faEdit} />
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
                    Edit Product
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleOpenModal(product._id)}
                  className="flex items-center justify-center p-3 text-gray-500 hover:text-gray-700 text-lg rounded-md border border-transparent relative group"
                >
                  <FontAwesomeIcon icon={faTrash} />
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
                    Delete Product
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      {isEditModalOpen && (
        <ProductModal toggleModal={toggleModal} product={selectedProduct} />
      )}
    </div>
  );
};

export default List;

