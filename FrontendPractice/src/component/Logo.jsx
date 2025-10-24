import React from 'react'
import { Logo1, Logo2, Logo3, Logo4, Logo5 } from "../assets/assest.js"

const Logo = () => {
    return (
        <div>
            <div className="flex gap-19 items-center pl-85 pb-25 w-[90%]">
                {[Logo1, Logo2, Logo3, Logo4, Logo5].map((logo, i) => (
                    <div key={i} className="rounded-2xl shadow-2xl p-3">
                        <img src={logo} alt={`Logo ${i + 1}`} className="h-20 w-20 object-contain" />
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Logo
