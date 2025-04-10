'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Post2 from '@/components/Post2';
import CreationDate from '@/components/Date';
import Link from 'next/link';
import usNews from '@/constants/usnews';
import Breadcrumb from '@/components/Breadcrumb';

const Usnews = () => {
  const [visiblePosts, setVisiblePosts] = useState(12); // Show 4 initially

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4); // Load 4 more each click
  };

  return (
    <>
      <div className='bg-white'>
        <div className='mt-20 pt-8 text-black text-center  flex flex-col justify-center'>
        <div className="max-w-7xl text-black lg:px-28">
       <Breadcrumb />
        </div>
          

          <div className="max-w-7xl text-left mx-auto lg:p-4">
          {/* {usNews.slice(0,1).map((post,index) => (
          <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
            <Blogs
            maincontent={post.title}
            maindesc= {post.contents[0]}
            mainimg={`/articles/${post.imgUrl}`}
            author={post.authorName}
            days={post.articleNumber}
            title={post.section}
            maintitle={post.section}
            buttontext='see all'
            buttoncolor='bg-orange-500'
            buttonhovercolor='hover:bg-blue-600'
            />
        
            </Link>
         ))} */}

           <div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6 ">
                  <Link href="/etfs"  >
                    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer
                     text-black font-bold">
                      STOCK
                    </span>
                  </Link>
                  
           </div>

           <div className='bg-white mt-8 '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-2  w-full  gap-4">
  {usNews.slice(5,7).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white ">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
        />
      </div>
    </Link>
  ))}
</div>
</div>

            <div className="grid mt-6 grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
              {usNews.slice(0, visiblePosts).map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                  className='bg-white p-4 lg:p-0'
                >
                  <Image
                    src={`/articles/${post.imgUrl}`}
                    width={1000}
                    height={1000}
                    alt='efe'
                    className='h-[250px] xl:h-[200px] object-cover'
                  />
                  <h2 className='mt-3 text-xl text-left font-bold text-black'>{post.title}</h2>
                  <p className="text-gray-500 text-left text-sm p-2">
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>
                </Link>
              ))}
            </div>

            {visiblePosts < usNews.length && (
              <div className='flex justify-center mt-8'>
                <button
                  onClick={loadMore}
                  className='bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300'
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='h-20 bg-white'></div>
        <Footer />
      </div>
    </>
  );
};

export default Usnews;
