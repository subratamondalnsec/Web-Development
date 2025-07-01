import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';


const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="w-full h-full flex flex-col items-center  gap-x-1">
            <div className='mb-[120px]'>
                <Header />
            </div>
            <div className='max-w-[620px] w-11/12 py-5  flex  gap-y-2'>
                <button 
                className="border-2 border-gray-300 py-1 px-4 rounded-md"
                onClick={() => navigation(-1)}>Back</button>
                
                <h2 className='font-bold text-2xl ml-2 pt-1 '>
                    Blogs On <span className='text-blue-700 text-2xl underline'>{category}</span>
                </h2>
            </div>
            <Blogs />
            <div className='mt-[100px]'>
                <Pagination />
            </div>
        </div>
    )
}

export default CategoryPage