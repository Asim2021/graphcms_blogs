import {useEffect, useState} from 'react'
import Link from 'next/dist/client/link'
import { getCategories } from '../services'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
      getCategories()
      .then((newCategories)=>setCategories(newCategories))
    },[])
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Categories
        </h3>
        {categories.map((category)=>(
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='cursor-pointer block pb-3 mb-3.5'>
                     {category.name}
                </span>
            </Link>
        ))}
      </div>
    );
}
