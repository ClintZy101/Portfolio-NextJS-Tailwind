import React from 'react'

const Introduction = () => {
    return (
        <div className="grid grid-cols-1  place-content-center  bg-transparent">

            <div className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl place-content-center grid">
                <h1>
                    Hi, I'm {""}
                    <strong className="transition duration-300 ease-in-out font-mono text-yellow-600 hover:text-yellow-500">
                        Clinton Taypoc
                </strong>

                </h1>
            </div>
            <br className="hidden sm:flex" />
            <div className="transition duration-300 ease-in-out text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl content-center text-gray-300 hover:text-white  ">
                Front-End {""} Developer
             </div>


        </div>
    )
}

export default Introduction
