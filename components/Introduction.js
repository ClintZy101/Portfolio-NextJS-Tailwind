import React from 'react'

const Introduction = () => {
    return (
        <div className="grid grid-cols-1  place-content-center  bg-transparent ">

            <div className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"> 
                Hi, I'm {""}
                {/* <br className="sm:hidden" /> */}
                <br className="sm:hidden" />
                <strong className="transition duration-300 ease-in-out font-mono text-yellow-600 hover:text-yellow-500">
                      Clinton Taypoc
                </strong>
             </div>
            {/* <br className="hidden lg:flex" /> */}
            <br className="hidden sm:flex"/>
            <div className="transition duration-300 ease-in-out text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl content-center text-gray-300 hover:text-white  ">
                Front-End {""}
            <br className="sm:hidden" />
                 Developer
             </div>

            
        </div>
    )
}

export default Introduction
