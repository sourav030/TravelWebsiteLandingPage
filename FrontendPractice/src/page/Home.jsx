import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Category from '../component/Category'
import BookTrip from '../component/BookTrip'
import Testinomial from '../component/Testinomial'

const Home = () => {
  return (
    <div className='flex flex-col w-100% pt-[25px] gap-5 '>
      <Navbar />
      <Hero />
      <Category />
      <BookTrip />
      <Testinomial />
    </div>
  )
}

export default Home
