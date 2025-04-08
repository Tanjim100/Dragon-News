import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    
    return (
        <div className=''>
            <h2 className='font-semibold mb-4'>Dragon News Home</h2>
            <div className='space-y-2'>
                {
                    news.map(singleNews =>
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;