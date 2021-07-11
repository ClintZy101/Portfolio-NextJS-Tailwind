import React from 'react'


const NavOptions = ({title}) => {
    return (
        <div className="transition duration-500 ease-in-out px-2 rounded-md cursor-pointer hover:bg-yellow-700 hover:text-white border border-yellow-700 text-yellow-600 hidden md:flex">
            <h1>{title}</h1>
           
        </div>
    )
}

export default NavOptions
