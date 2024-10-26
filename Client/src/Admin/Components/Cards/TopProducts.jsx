import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopProducts } from '../../../Redux/Product/Action';

const TopProducts = () => {
  const dispatch = useDispatch();

  const { topProducts, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchTopProducts());
  },[dispatch])
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 w-full">Top Products</h2>
      <div className='overflow-x-auto'>
      <table className="w-full border-collapse rounded-lg">
        <thead>
          <tr className="bg-purple-950 rounded-lg text-white text-left border-b">
            <th className="p-2 sm font-medium">Product</th>
            <th className="p-2 sm font-medium">Quantity Sold</th>
            <th className="p-2 sm font-medium">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {topProducts?.map((product, index) => (
            <tr key={index} className="text-left hover:bg-purple-950 hover:text-white">
              <td className="p-2 flex items-center space-x-3">
                <img
                  src={product?.imageUrl} 
                  alt={product?.name}
                  className="w-10 h-10 rounded-full object-cover mx-auto" 
                />
                <div className="flex flex-col w-80">
                  <p className="font-semibold text-sm">{product.title}</p>
                  <p className="text-xs text-gray-500">{product.description}</p>
                </div>
              </td>
              <td className="p-2 text-center">{50 - product.quantity}</td>
              <td className="p-2">{(50-product.quantity)*product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default TopProducts;
