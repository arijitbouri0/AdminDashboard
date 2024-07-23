import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { findProducts } from '../../Redux/Product/Action';
import { MoonLoader } from 'react-spinners';

const ProductPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { products, loading, error } = useSelector(state => state.product);

    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(findProducts({ page: currentPage, category: selectedCategory, minPrice, maxPrice, sort: selectedSortOption }));
    }, [dispatch, currentPage, selectedCategory, minPrice, maxPrice, selectedSortOption]);

    const handleSortChange = (event) => {
        const sortOption = event.target.value;
        setSelectedSortOption(sortOption);
        setCurrentPage(1); // Reset to the first page
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('sort', sortOption);
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to the first page
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('category', category);
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    const filterByPrice = () => {
        setCurrentPage(1); // Reset to the first page
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('price', `${minPrice}-${maxPrice}`);
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    const search = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        // Implement search functionality if needed
    };

    const handleNextPage = () => {
        const totalPages=Math.ceil(products.totalElements / products.size);
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
    

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const clearFilters = () => {
        setMinPrice(0);
        setMaxPrice(200);
        setSelectedSortOption('');
        setSelectedCategory('all');
        setCurrentPage(1);
        dispatch(findProducts());
    };
    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='fixed top-0 left-0 right-0 z-10 flex justify-between p-2 bg-white shadow-md md:hidden'>
                <div className='relative'>
                    <button className='btn btn-primary' onClick={toggleFilter}>Filter</button>
                    {filterOpen && (
                        <div className='absolute top-full left-0 right-0 bg-white shadow-md p-3 z-10'>
                            <div className='border-t border-gray-200'>
                                <h2 className='font-bold text-lg mb-2'>Categories</h2>
                                <ul>
                                    {['all', 'Men', 'Women', 'Sports', 'Kids', 'Accessories'].map(category => (
                                        <li key={category} className='mb-2 text-black cursor-pointer'>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    value={category}
                                                    checked={selectedCategory === category}
                                                    onChange={() => filterByCategory(category)}
                                                />
                                                <span className='ml-2'>{category}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='border-t border-gray-200 mt-3'>
                                <h2 className='font-bold text-lg mb-2'>Price</h2>
                                <div className='flex justify-between items-center'>
                                    <input
                                        type="number"
                                        min="0"
                                        className="input input-bordered input-primary w-1/2"
                                        placeholder="Min"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                    <span className='mx-2'>to</span>
                                    <input
                                        type="number"
                                        min="0"
                                        className="input input-bordered input-primary w-1/2"
                                        placeholder="Max"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-primary mt-3 w-full' onClick={filterByPrice}>Apply</button>
                            </div>
                        </div>
                    )}
                </div>
                <select
                    className="select select-bordered select-primary bg-slate-100"
                    value={selectedSortOption}
                    onChange={handleSortChange}
                >
                    <option value="" disabled>Sort by</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>

            <div className='flex flex-col md:flex-row mt-20'>
                <div className={`bg-white w-full md:w-1/4 rounded-md m-3 p-3 shadow-md md:sticky md:top-20 h-max ${filterOpen ? 'block' : 'hidden'} md:block`}>
                    <div className='mb-5'>
                        <h2 className='font-bold text-lg mb-3'>Categories</h2>
                        <ul>
                            {['all', 'Men', 'Women', 'Sports', 'Kids', 'Accessories'].map(category => (
                                <li key={category} className='mb-2 text-black cursor-pointer'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category}
                                            checked={selectedCategory === category}
                                            onChange={() => filterByCategory(category)}
                                        />
                                        <span className='ml-2'>{category}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg mb-3'>Price</h2>
                        <div className='flex justify-between items-center'>
                            <input
                                type="number"
                                min="0"
                                className="input input-bordered input-primary w-1/2"
                                placeholder="Min"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <span className='mx-2'>to</span>
                            <input
                                type="number"
                                min="0"
                                className="input input-bordered input-primary w-1/2"
                                placeholder="Max"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary mt-3 w-full' onClick={filterByPrice}>Apply</button>
                        <button className='btn btn-primary mt-3 w-full' onClick={clearFilters}>Clear Filter</button>
                    </div>
                </div>
                <div className='flex-1 m-3'>
                    <div className='hidden md:flex bg-white p-3 rounded-md shadow-md flex-col md:flex-row items-center justify-between'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered input-primary w-full max-w-xs bg-slate-100 mb-3 md:mb-0"
                            onChange={search}
                        />
                        <select
                            className="select select-bordered select-primary bg-slate-100 ml-0 md:ml-3"
                            value={selectedSortOption}
                            onChange={handleSortChange}
                        >
                            <option value="" disabled>Sort by</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <MoonLoader />
                        </div>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <div>
                            <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                {products.content && products.content.length ? (
                                    products.content.map((product) => (
                                        <ProductCard
                                            key={product._id}
                                            id={product._id}
                                            title={product.title}
                                            Img={product.imageUrl}
                                            price={product.price}
                                        />
                                    ))
                                ) : (
                                    <p>No products available</p>
                                )}
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <button className='btn btn-primary' onClick={handlePrevPage} disabled={currentPage === 1}>
                                    Previous
                                </button>
                                <span>Page {currentPage}</span>
                                <button className='btn btn-primary' onClick={handleNextPage} disabled={!products.content || products.content.length === 0}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
