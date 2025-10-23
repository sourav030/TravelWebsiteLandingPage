import React from 'react'
import { Cat1, Cat2, Cat3, Group48, Group50, Group51, Group, Rectangle, Dest1, Dest2, Dest3, Sent } from '../assets/assest.js'

const Category = () => {
  return (
    <div>

      <div style={{ position: "relative", bottom: "140px" }}>
        <center>
          <p style={{ paddingLeft: "0px" }} className=' text-2xl'>Category</p>
          <h1 className='font-bold text-4xl '>We offer best service</h1>
        </center>
      </div>

      {/* Category section contain image p and h */}

      <div style={{ position: "relative", bottom: "65px", paddingLeft: "300px" }} className='flex gap-20'>

        <div>
          <div className=' rounded-2xl w-[185px] flex flex-col justify-center items-center shadow-md'>
            <img className='h-25 w-35' src={Group48} alt="" />
            <h2 className='font-semibold text-lg'>Calculated Weather</h2>
            <p className='p-4'>Built Wicket longer admire do barton vanity itself do in it</p>
          </div>
        </div>

        <div>
          <div className='rounded-2xl w-[185px] flex flex-col justify-center items-center shadow-md'>
            <img className='h-25 w-35' src={Group} alt="" />
            <h2 className='font-semibold text-lg'>Best Flight</h2>
            <p className='p-4'>Engrossed listening. Park gate sell they west hard for the</p>
          </div>
        </div>

        <div>
          <div className=' rounded-2xl shadow-md w-[185px] flex flex-col justify-center items-center'>
            <img className='h-25 w-35' src={Group50} alt="" />
            <h2 className='font-semibold text-lg'>Local Event</h2>
            <p className='p-4'>Barton vanity itself do in it. Preferd to men it engrossed listening</p>
          </div>
        </div>

        <div>
          <div className=' rounded-2xl shadow-md  w-[185px] flex flex-col justify-center items-center'>
            <img className='h-25 w-35' src={Group51} alt="" />
            <h2 className='font-semibold text-lg'>Customization</h2>
            <p className='p-4'>We deliver outsourced aviation services for millitary customers</p>
          </div>
        </div>

      </div>

      {/* This is Destination part */}

      <div style={{ position: "relative", bottom: "10px" }}>
        <center>
          <p style={{ paddingLeft: "0px" }} className=' text-2xl'>Top Selling</p>
          <h1 className='font-bold text-4xl '>Top Destination</h1>
        </center>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-5 px-10">
        
        {/* Destination Card */}
        <div className="rounded-2xl w-[255px] h-[260px] flex flex-col items-center shadow-md bg-white transition hover:shadow-lg">
          {/* Image */}
          <img className="h-40 w-70 mt-4 object-cover rounded-xl" src={Dest1} alt="Destination" />

          {/* Destination Name & Price */}
          <div className="flex justify-between w-[80%] mt-3 text-gray-700">
            <p className="text-sm font-medium">Rome, Italy</p>
            <p className="font-semibold">$1.54k</p>
          </div>

          {/* Trip Info (Left side) */}
          <div className="flex items-center gap-2 self-start ml-5 mt-2 text-gray-500">
            <img src={Sent} alt="Trip Icon" className="w-4 h-4" />
            <p className="text-sm">10 Day trip</p>
          </div>
        </div>


        {/* Best Flight Card */}
        <div className="rounded-2xl w-[255px] h-[260px] flex flex-col items-center shadow-md bg-white transition hover:shadow-lg">
          {/* Image */}
          <img className="h-40 w-70 mt-4 object-cover rounded-xl" src={Dest2} alt="Destination" />

          {/* Destination Name & Price */}
          <div className="flex justify-between w-[80%] mt-3 text-gray-700">
            <p className="text-sm font-medium">Rome, Italy</p>
            <p className="font-semibold">$1.54k</p>
          </div>

          {/* Trip Info (Left side) */}
          <div className="flex items-center gap-2 self-start ml-5 mt-2 text-gray-500">
            <img src={Sent} alt="Trip Icon" className="w-4 h-4" />
            <p className="text-sm">10 Day trip</p>
          </div>
        </div>


        {/* Local Event Card */}
        <div className="rounded-2xl w-[255px] h-[260px] flex flex-col items-center shadow-md bg-white transition hover:shadow-lg">
          {/* Image */}
          <img className="h-40 w-70 mt-4 object-cover rounded-xl" src={Dest3} alt="Destination" />

          {/* Destination Name & Price */}
          <div className="flex justify-between w-[80%] mt-3 text-gray-700">
            <p className="text-sm font-medium">Rome, Italy</p>
            <p className="font-semibold">$1.54k</p>
          </div>

          {/* Trip Info (Left side) */}
          <div className="flex items-center gap-2 self-start ml-5 mt-2 text-gray-500">
            <img src={Sent} alt="Trip Icon" className="w-4 h-4" />
            <p className="text-sm">10 Day trip</p>
          </div>
        </div>

      </div>


    </div >
  )
}

export default Category
