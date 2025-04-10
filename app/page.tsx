"use client"
import React from 'react'
import Slider from '../components/Slider'
//import Blogs from '../components/Blogs'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import entertainment from '@/constants/entertainment'
import money from '@/constants/money'
import politics from '@/constants/politics'
import usNews from '@/constants/usnews'
import Link from "next/link";
import Post2 from '@/components/Post2'

const page = () => {

  


  return (
    <div>

      
   



<main className='mt-16 p-4'>
   
  <Slider/>
    
</main>

<div className="bg-white">
<div className="max-w-7xl mx-auto lg:p-4">


<div className='pt-10'>
{/* <Link href="/post/The-Art-of-Layering-Mastering-Seasonal-Fashion-with-Essentials">
<Blogs title = "politics" mainimg='/articles/Blogheraid50.jpg'
 maintitle='POLITICS' maincontent='The Art of Layering: Mastering Seasonal Fashion with Essentials'
  maindesc='Layering is an essential skill when it comes to mastering seasonal fashion. By combining different pieces thoughtfully, you'
   author='Samantha Lee'
 days="06 Apr 2025" buttontext='See all' buttoncolor='bg-orange-500' buttonhovercolor='hover:bg-blue-600'/>
 </Link> */}

 {/* {politics.slice(0,1).map((post,index) => (
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
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      ETFS
    </span>
  </Link>
  <Link href="/etfs">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white mt-8 '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-2  w-full  gap-4">
  {politics.slice(5,7).map((post, index) => (
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

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {politics.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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
</div>

<div className='mt-10 '>
{/* {money.slice(0,1).map((post,index) => (
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

<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/finance"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      FINANCE
    </span>
  </Link>
  <Link href="/finance">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3  w-full  gap-4">
  {money.slice(5,8).map((post, index) => (
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

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {money.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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
</div>

<div className='mt-10'>
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

<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/stock"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      STOCK
    </span>
  </Link>
  <Link href="/stock">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {usNews.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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
</div>

<div className='mt-10'>
{/* {entertainment.slice(0,1).map((post,index) => (
  <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
    <Blogs
    maincontent=""
    maindesc= ""
    mainimg=""
    author=""
    days=""
    title={post.section}
    maintitle={post.section}
    buttontext='see all'
    buttoncolor='bg-orange-500'
    buttonhovercolor='hover:bg-blue-600'
    />

    </Link>
 ))} */}

<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/trading"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      TRADING
    </span>
  </Link>
  <Link href="/trading">
    <button
      className= "px-6 py-2 hover:cursor-pointer  rounded-lg transition duration-300 text-black hover:text-blue-700 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {entertainment.slice(1, 13).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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
</div>
</div>
</div>
<div className='h-20 bg-white'></div>

<Footer/>

    </div>


  )
}


export default page


