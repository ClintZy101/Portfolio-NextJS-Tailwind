
import Link from 'next/link'
import React from 'react'
import { projects } from '../components/constants/constants'


const Projects = () => {
    return (
        <div className="grid  md:grid-cols-2  gap-x-3  ">
            {projects.map((p, i) => {
                return (
                    <div className="place-items-center my-5 container border border-none bg-gray-800 hover:bg-gray-700 rounded-lg ">
                        <h1 key={i} className="text-white text-2xl  text-center py-2 font-semibold hover:text-yellow-600">{p.title}</h1>

                        <p className="text-white text-justify px-5 py-2 h-32 hover:text-yellow-600">{p.description}</p>

                        <img
                        src={p.image} className=" w-full z-0 " />


                        <div className="flex  text-white  hover:text-yellow-600 font-bold justify-center py-2 my-2">
                            {p.tags.map((t, i) => {
                                return <h2 className="bg-gray-600 p-2 mx-2 rounded-full text-center" key={i}>{t}</h2>;
                            })}
                        </div>
                        <div className="flex m-5 justify-around">
                            <Link href={p.source}>
                                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-5 rounded-md cursor-pointer  hover:text-yellow-600">
                                    Code
                                </button >
                            </Link>
                            <Link href={p.visit}>
                                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-md cursor-pointer hover:text-yellow-600">
                                    Visit
                                </button>
                            </Link>

                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Projects