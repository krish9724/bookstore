import React, { useEffect, useState } from 'react';
import Cards from './cards';
import list from "../../public/list.json";
import { Link } from "react-router-dom";  // Use named import

function Course() {
  
    const [list, setList] = useState([]);
  
    useEffect(() => {
      fetch('/list.json')
        .then(response => response.json())
        .then(data => setList(data))
        .catch(error => console.error('Error fetching list:', error));
    }, []);
  
    const filterData = list.filter(data => data.category === "special");
  
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto pt-1  md:px-20 sm:px-4 dark:bg-slate-900 dark:text-white'>
        <div className='mt-28 items-center justify-center text-center '>
          <h1 className='text-2xl font-semibold md:4xl '>
            Discover Our Special <span className='text-blue-600'>Collection Here!</span>
          </h1>
          <p className='mt-12'>
            Indulge in the finest selection of premium books, handpicked for discerning readers. From exclusive editions to collector's items, explore stories that captivate and inspire. Elevate your reading experience with timeless classics and modern masterpieces in our curated collection.
          </p>
          <Link to="/">
            <button className='mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))} </div>
      </div>
    </>
  );
}

export default Course; 
