import React from 'react';
import Head from 'next/head'
import { 
  PostCard,
  Categories,
  PostWidget,
       } from "../components";
import {getPosts} from "../services"
import FeaturedPosts from '../sections/FeaturedPosts';


export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, key) => <PostCard key={key} post={post.node}/>)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}


/// NEW NEXTJS WAY TO FETCH DATA FOR A COMPONENT
export async function getStaticProps(){
  const posts = await getPosts() || [];
  return {
    props:{posts}
  }
}