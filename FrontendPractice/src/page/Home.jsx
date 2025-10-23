import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Category from '../component/Category'

const Home = () => {
  return (
    <div  className='flex flex-col w-100% pt-[25px] '>
      <Navbar/>
      <Hero/>
      <Category/>
    </div>
  )
}

export default Home
