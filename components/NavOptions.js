import React from 'react'


const NavOptions = ({title}) => {
    return (
        <div className="transition duration-300 ease-in-out px-2 rounded-sm cursor-pointer hover:bg-yellow-500 hover:text-white border border-yellow-600 hover:border-transparent  text-yellow-600 hidden md:flex">
            <h1>{title}</h1>
           
        </div>
    )
}

export default NavOptions
