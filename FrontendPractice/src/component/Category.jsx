import React from 'react'
import { Cat1, Cat2, Cat3, Group48, Group50, Group51, Group, Rectangle, Dest1, Dest2, Dest3, Sent } from '../assets/assest.js'

const Category = () => {
    return (
      
        <div className='py-10 md:py-20'>

          
            <div className='text-center mb-16'>
                <p className='text-xl text-gray-500'>Category</p>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mt-2'>We offer best service</h1>
            </div>

            
            <div 
                className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-10'
            >
              
                {[
                    { img: Group48, title: "Calculated Weather", desc: "Built Wicket longer admire do barton vanity itself do in it" },
                    { img: Group, title: "Best Flight", desc: "Engrossed listening. Park gate sell they west hard for the" },
                    { img: Group50, title: "Local Event", desc: "Barton vanity itself do in it. Preferd to men it engrossed listening" },
                    { img: Group51, title: "Customization", desc: "We deliver outsourced aviation services for millitary customers" },
                ].map((service, index) => (
                    <div 
                        key={index} 
                        className='w-full sm:w-[45%] md:w-[200px] lg:w-[220px] 
                                   p-6 flex flex-col items-center text-center 
                                   rounded-3xl shadow-lg transition-all duration-300 
                                   hover:shadow-xl bg-white hover:scale-[1.02] cursor-pointer'
                    >
                      
                        <img className='h-16 w-16 mb-4 object-contain' src={service.img} alt={service.title} />
                        
                        
                        <h2 className='font-semibold text-xl mb-2'>{service.title}</h2>
                        
                       
                        <p className='text-gray-500 text-sm'>{service.desc}</p>
                    </div>
                ))}
            </div>

            

            
            <div className='text-center mt-20 mb-10'>
                <p className='text-xl text-gray-500'>Top Selling</p>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mt-2'>Top Destination</h1>
            </div>

            
            <div className="flex flex-wrap justify-center gap-8 md:gap-10 px-4">
               
                {[
                    { img: Dest1, location: "Rome, Italy", price: "$1.54k", duration: "10 Day trip" },
                    { img: Dest2, location: "London, UK", price: "$2.4k", duration: "12 Day trip" },
                    { img: Dest3, location: "Paris, France", price: "$1.8k", duration: "7 Day trip" },
                ].map((dest, index) => (
                    <div 
                        key={index} 
                      
                        className="w-full sm:w-[300px] lg:w-[280px] h-auto pb-5 
                                   rounded-2xl shadow-lg bg-white 
                                   transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                    >
                        
                        <img 
                            className="h-52 w-full object-cover rounded-t-2xl mb-4" 
                            src={dest.img} 
                            alt={dest.location} 
                        />

                        <div className="px-5">
                          
                            <div className="flex justify-between text-gray-800">
                                <p className="text-base font-medium">{dest.location}</p>
                                <p className="font-semibold">{dest.price}</p>
                            </div>

                          
                            <div className="flex items-center gap-2 mt-2 text-gray-500">
                                <img src={Sent} alt="Trip Icon" className="w-4 h-4" />
                                <p className="text-sm">{dest.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Category