import React from 'react';

// Sample data for top products
const topProducts = [
  { name: 'Product A', quantitySold: 150, revenue: 1200 },
  { name: 'Product B', quantitySold: 120, revenue: 950 },
  { name: 'Product C', quantitySold: 100, revenue: 800 },
  { name: 'Product D', quantitySold: 80, revenue: 600 },
  { name: 'Product E', quantitySold: 70, revenue: 550 },
];

const TopProducts = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Top Products</h2>
      <table className="w-full border-collapse rounded-lg">
        <thead>
          <tr className="bg-purple-950 rounded-lg text-white text-center border-b">
            <th className="p-2 ">Product Name</th>
            <th className="p-2">Quantity Sold</th>
            <th className="p-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product, index) => (
            <tr key={index} className="text-center hover:bg-purple-950 hover:text-white">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.quantitySold}</td>
              <td className="p-2">${product.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TopProducts;
