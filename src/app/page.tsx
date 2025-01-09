import React from 'react'
import Navbar from '@/components/Navbar'
import Authorcard from '@/components/Authorcard'
import CommentSection from '@/components/Commentsection'
import Feauture from '@/components/Feauture'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import AddToCart from '@/components/addtocart'




const page = () => {
  return (
    <div>

      <Navbar/>
      <AddToCart/>
      <Authorcard/>
      <BlogCard/>
      <Feauture/>
      <CommentSection/>
      <Footer/>
     
    </div>
  )
}

export default page