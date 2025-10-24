import React from 'react'
import { Traveller, Plane, Decore, PlayDemo } from '../assets/assest.js'

const Hero = () => {
    return (
        
        <div className='relative  flex flex-col items-center px-4 py-8 lg:flex-row lg:justify-between lg:px-20 lg:py-16'>

          
            <div style={{paddingLeft:"150px"}} className='w-full sm:w-[90%] lg:w-[40%] flex flex-col gap-5 text-center lg:text-left'> 

               
                <h1 className='text-red-700 font-semibold '>Best Destination around the world</h1>

               
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                    Travel enjoy and live a new and full life
                </h1>

              
                <p className='text-gray-500'>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen in engrossed listening. Park gate sell they west hard for the.
                </p>

             
                <div className='flex gap-4 items-center justify-center lg:justify-start mt-4'>
                  
                    <button className='border rounded-lg bg-amber-300 w-auto px-6 py-2 shadow-md hover:bg-amber-400 transition duration-300'>
                        Play more
                    </button>
            
                    <img className='w-12 h-12 cursor-pointer' src={PlayDemo} alt="Play Demo" />
                </div>
            </div>


            <div className='hidden lg:block lg:w-[55%] relative'>

                <img 
                    src={Traveller} 
                    alt="Traveller" 
                    className='w-full h-auto max-h-[600px] object-contain'
                />
                
                
                <img 
                    src={Plane} 
                    alt="Plane" 
                    className='absolute top-[-50px] left-[-50px] w-32 animate-pulse hidden xl:block'
                />
            </div>
            
         

        </div>
    )
}

export default Hero