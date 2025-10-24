import React from 'react'
import { Logo1, Profile } from '../assets/assest'

const Testinomial = () => {
    return (
        <div className='flex pt-10  '>

            <div className='pl-85 pt-20 pb-19 flex flex-col gap-18'>
                <div className='w-[99%] '>
                    <p>Testinomials</p>
                    <h1 className='font-bold text-5xl'>What People say about us</h1>
                </div>

                <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full border border-gray-400"></div>
                    <div className="w-3 h-3 rounded-full border border-gray-400 bg-gray-500"></div>
                    <div className="w-3 h-3 rounded-full border border-gray-400"></div>
                </div>

            </div>

            <div className=''>
                <img src={Profile} alt="" style={{position:"relative", top:"28px"}} className='pl-15' />
                <div className='rounded-2xl shadow-2xl w-[55%] p-5'>
                    <p>on the window talking painted posture yet it expresss parties uses, Sure the Last upon he same as knew next or beleive and divereted on</p>
                    <h1 className='pt-5'>Mike Taylore</h1>
                    <p>USA</p>
                </div>
            </div>
        </div>

        
    )
}

export default Testinomial
