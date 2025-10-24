import React from 'react'
import { DisImage, MakePayment, Airport, TripImage, Leaf, map, send, building, Mask } from "../assets/assest.js"

const BookTrip = () => {
    return (
        <div style={{ paddingLeft: "290px" }} className='flex gap-1'>

            <div className=' flex flex-col gap-5'>
                <p>Eassy and Fast</p>
                <div className='w-[50%]'>
                    <h1 className='font-bold text-4xl'>Book your next trip in 3 easy step</h1>
                </div>

                <div className='flex gap-5'>
                    <img src={DisImage} alt="" className='h-7' />
                    <div className='w-[50%]'>
                        <h1 className='font-semibold text-1xl'>Choose your Destination</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aliquid quisquam culpa deleniti consectetur totam, dignissimos .</p>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <img src={MakePayment} alt="" className='h-7' />
                    <div className='w-[50%]'>
                        <h1 className='font-semibold text-1xl'>Make Payment</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aliquid quisquam culpa deleniti consectetur totam, dignissimos .</p>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <img src={Airport} alt="" className='h-7' />
                    <div className='w-[50%]'>
                        <h1 className='font-semibold text-1xl'>Reach Airport on Selected Date</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aliquid quisquam culpa deleniti consectetur totam, dignissimos .</p>
                    </div>
                </div>
            </div>


            <div style={{ paddingRight: "355px", paddingTop: "115px" }} className=''>
                <div className='flex flex-col  w-[245px] rounded-2xl shadow-2xl'>
                    <img className='p-2' src={TripImage} alt="" />
                    <h1 className='font-semibold p-2'>Trip to Greece</h1>
                    <p className='p-2'>14-29 june| by Robin joko</p>
                    <div className='flex p-2 gap-1'>
                        <img src={Leaf} alt="" />
                        <img src={map} alt="" />
                        <img src={send} alt="" />
                    </div>
                    <div className='flex p-2 gap-2'>
                        <img src={building} alt="" className='h-4' />
                        <p>24 people going</p>
                    </div>
                </div>

                <div style={{ position: "relative", left: "155px", bottom: "130px" }} className='flex gap-2 rounded-2xl shadow-2xl'>
                    <img src={Mask} alt="" className='h-8' />
                    <div>
                        <p>Ongoing</p>
                        <h1 className='font-semibold'>Tripe to Rome</h1>
                        <p>40% Completed</p>
                        {/* yaha krna hai */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookTrip
