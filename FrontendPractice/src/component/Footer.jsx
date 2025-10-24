import React from 'react'
import { GooglePlay, instagram, Jadoo, PlayStore, Social, Background } from "../assets/assest.js"

const Footer = () => {
  return (
    <div className='pl-69 pb-5'>

      <div className='flex gap-15'>

        <div className='w-[20%] flex flex-col gap-4'>
          <img src={Jadoo} alt="" className='h-5 w-20' />
          <p>Book your trip in minute and get full controll for much long</p>
        </div>

        <div>
          <h1 className='font-bold text-3xl'>Company</h1>
          <h1>About</h1>
          <h1>Careers</h1>
          <h1>Mobile</h1>
        </div>

        <div>
          <h1 className='font-bold text-3xl'>Contact</h1>
          <h1>Help/FAQ</h1>
          <h1>Press</h1>
          <h1>Affilates</h1>
        </div>

        <div>
          <h1 className='font-bold text-3xl'>More</h1>
          <h1>Airlinefees</h1>
          <h1>Airline</h1>
          <h1>low for tips</h1>
        </div>

        <div>
          <div className='flex '>
            <img src={Social} alt="" />
            <img src={Social} alt="" />
            <img src={Background} alt="" />
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='pl-4'>Discover your app</h1>
            <div className='flex gap-5'>
                <img src={PlayStore} alt="" />
                <img src={GooglePlay} alt="" />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
