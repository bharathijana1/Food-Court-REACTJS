import React, { useState } from 'react';
import { product } from './Product.jsx';

const Home = ({ cart, setCart }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 
  const maxVisiblePages = 3; 

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const removeCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const currentProducts = product.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className='py-4 h-auto'>
      {/* Product List */}
      <div className='grid grid-cols-2 md:flex p-1 gap-2 md:gap-6 justify-center md:p-2 md:m-4 flex-wrap'>
        {currentProducts.map((data, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center border-2 border-black pb-2'
          >
            <img
              src={data.img}
              alt={data.alt}
              className='w-full lg:w-72 h-32 lg:h-72'
            />
            <p className='capitalize font-medium text-xl py-1'>{data.name}</p>
            <p className='font-medium text-xl p-1'>
              Price RS. <strong>{data.price}</strong>
            </p>
            {cart.some((c) => c.id === data.id) ? (
              <button
                className='bg-red-600 hover:bg-red-700 text-white text-xl px-3 p-1 font-medium m-1'
                onClick={() => removeCart(data)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className='bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-3 p-1 font-medium m-1'
                onClick={() => addCart(data)}
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-4 items-center gap-2'>
        {/* Previous Button */}
        <button
          className={`px-3 py-1 border ${
            currentPage === 1 ? 'bg-yellow-700  text-white opacity-60 cursor-not-allowed text-lg' : 'bg-yellow-700 text-white text-lg'
          }`}
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 border ${
              currentPage === page
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-3 py-1 border ${
            currentPage === totalPages ? 'bg-yellow-700  text-white opacity-60 cursor-not-allowed text-lg' : 'bg-yellow-700 text-white text-lg'
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
