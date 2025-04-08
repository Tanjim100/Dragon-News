import React from 'react';
import Header from '../components/Header';
import RightNavbar from '../components/LayoutComponents/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-4'>Dragon News</h2>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="">
                            <img
                                src={news?.image_url}
                                alt="news"
                                className="rounded-md" />
                        </figure>
                        <div className="card-body py-4 px-0">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news.category_id}`} className="btn bg-red-600 text-white">All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;