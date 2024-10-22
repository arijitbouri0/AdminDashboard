import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts, deleteProduct } from '../../../../Redux/Product/Action';
import List from '../../../Components/ProductList/List';
import Loader from '../../../Components/Loader/Loader';
import Pagination from '../../../Components/Pagination/Pagination';
import { Select, Option } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductListing = () => {
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [localProducts, setLocalProducts] = useState([]);

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);
  const totalPages = Math.ceil(products.totalElements / rowsPerPage);
  useEffect(() => {
    dispatch(findProducts({
      page: currentPage,
      category: selectedCategory,
      minPrice,
      maxPrice,
      sort: selectedSortOption,
      rowsPerPage
    }));
  }, [dispatch, currentPage, selectedCategory, minPrice, maxPrice, selectedSortOption, rowsPerPage]);

  // Update local state with products from the Redux store when products change
  useEffect(() => {
    if (products?.content) {
      setLocalProducts(products.content);
    }
  }, [products]);


  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);  // Reset to first page when rows per page is changed
  };

  const handleDeleteProduct = async(productId) => {
    await dispatch(deleteProduct(productId))
    .then(()=>{
      toast.success('Product deleted successfully!');
      setLocalProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    })
    .catch(() => {
      toast.error('Failed to delete Product.');
    });
  };

  return (
    <div className="p-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="md:col-span-1 lg:col-span-4 p-4 border-b">
          <h2 className="text-xl text-gray-400 mb-4">Filters</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-white border border-stroke rounded-sm shadow-sm'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Sort by:</label>
              <select
                value={selectedSortOption}
                onChange={(e) => setSelectedSortOption(e.target.value)}
                className='mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="">Select</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="all">All</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>Price Range:</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
                className='mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
                className='mt-1 block border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
          </div>
        </div>

        {/* Export and Add Product Buttons */}
        <div className="md:col-span-1 lg:col-span-4 p-4 flex justify-between bg-white border border-stroke rounded-sm shadow-sm">
          <button className='bg-blue-400 p-2 rounded-md text-white'>Export</button>
          <button className='bg-purple-400 p-2 rounded-md text-white'>
            <NavLink to='/admin/add-new'>+ Add Product</NavLink>
          </button>
        </div>
        <div className="md:col-span-1 lg:col-span-4 overflow-x-auto bg-white border border-stroke rounded-sm shadow-sm">
          {loading ? (
            <Loader />
          ) : (
            <List props={localProducts} onDelete={handleDeleteProduct} />
          )}
        </div>

      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalRows={products?.totalElements}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
      <ToastContainer />
    </div>
  );
};

export default ProductListing;
