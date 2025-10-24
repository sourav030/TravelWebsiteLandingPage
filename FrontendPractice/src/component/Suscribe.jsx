import React from 'react'
import { send } from "../assets/assest.js"

const Subscribe = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="rounded-tl-[2rem] shadow-2xl flex flex-col gap-5 w-[60%] p-5">
        <center>
          <h1 className="text-2xl">
            Subscribe to get information, latest news and other interesting things about Jadoo.
          </h1>
        </center>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-[60%]"
          />
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
