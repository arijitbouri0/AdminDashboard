import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../../Redux/Product/Action'; // import the action
import FileUpload from '../../../Components/File Upload/FileUpload';
import Sizes from '../../../Components/Sizes/Sizes';
import CategorySelector from '../../../Components/Category Selector/CategorySelector';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: null,
    price: '',
    quantity: '',
    color: '#000000',
    topLevelCategory: '',
    secondLevelCategory: '',
    thirdLevelCategory: '',
    sizes: [{ name: '', quantity: '' }],
  });
  const [errors, setErrors] = useState({});
  // const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData({ ...formData, imageUrl: file });
  //     setImagePreview(URL.createObjectURL(file));
  //     validateField('imageUrl', file);
  //   }
  // };

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index][field] = value;
    setFormData({ ...formData, sizes: newSizes });
  };

  const addSize = () => {
    setFormData({
      ...formData,
      sizes: [...formData.sizes, { name: '', quantity: '' }],
    });
  };

  const removeSize = (index) => {
    const newSizes = formData.sizes.filter((_, i) => i !== index);
    setFormData({ ...formData, sizes: newSizes });
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case 'title':
        if (!value.trim()) {
          newErrors.title = 'Product name is required';
        } else {
          delete newErrors.title;
        }
        break;
      case 'imageUrl':
        if (!value) {
          newErrors.imageUrl = 'Product image is required';
        } else {
          delete newErrors.imageUrl;
        }
        break;
      case 'quantity':
        if (!value || isNaN(value) || parseInt(value) <= 0) {
          newErrors.quantity = 'Valid quantity is required';
        } else {
          delete newErrors.quantity;
        }
        break;
      case 'topLevelCategory':
        if (!value) {
          newErrors.topLevelCategory = 'Category is required';
        } else {
          delete newErrors.topLevelCategory;
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to add product
    dispatch(addProduct(formData));
  };

  return (
    <div className='bg-white border border-stroke rounded-sm shadow-sm p-10'>
      <h1 className='text-lg'>Add Products</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Paste Link of the Product</label>
          <textarea
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
          />
        </div>
        {/* <FileUpload
        handleImageUpload={handleImageUpload}
        imagePreview={imagePreview}
        errors={errors}
      /> */}

        <CategorySelector
          formData={formData}
          handleInputChange={handleInputChange}
          errors={errors}
        />

        <Sizes
          sizes={formData.sizes}
          handleSizeChange={handleSizeChange}
          addSize={addSize}
          removeSize={removeSize}
        />

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="0"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.quantity ? 'border-red-500' : ''}`}
          />
          {errors.quantity && <p className="mt-2 text-sm text-red-600">{errors.quantity}</p>}
        </div>

        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            className="mt-1 block w-16 h-8 p-0 border border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </form>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {product && <p className="mt-2 text-sm text-green-600">Product added successfully!</p>}
    </div>
  );
};

export default AddProducts;
