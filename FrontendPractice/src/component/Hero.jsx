import React from 'react'
import { Traveller, Plane, Decore, PlayDemo } from '../assets/assest.js'

const Hero = () => {
    return (
        <div style={{ position: "relative",paddingLeft:"225px" }} className='flex justify-center  '>

            <div  className='h-[105px] w-[30%] relative top-20 flex flex-col gap-5'>


                <center>
                    <h1 className='text-red-700 font-semibold pt-[1px]'>Best Destination around the world</h1>
                </center>

                <h1 className='text-7xl'>Travel enjoy and live a new and full life</h1>
                <p>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen in engrossed listening. Park gate sell they west hard for the.
                </p>

                <div className='flex gap-4'>
                    <button className='border rounded-[3px] bg-amber-300 w-[25%] h-10'>Playe more</button>
                    <img className='w-[25%]' src={PlayDemo} alt="" />
                </div>


            </div>

            <div>
                <img src={Plane} alt="" />
            </div>

            <div className=''>
                <img style={{ height: "80%" }} src={Traveller} alt="" />
            </div>

        </div>
    )
}

export default Hero
