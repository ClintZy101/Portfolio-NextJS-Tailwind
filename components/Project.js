
import Link from 'next/link'
import React from 'react'
import { projects } from '../components/constants/constants'

const Projects = () => {
    return (
        <div>
            {projects.map((p, i) => {
                return (
                    <div className="object-contain place-items-center mt-5 container border border-yellow-600 rounded-md  cursor-pointer hover:opacity-90 ">
                        <h1 key={i} className="text-yellow-600 text-2xl text-center py-2">{p.title}</h1>

                        <img
                            // width={400} height={300}
                            src={p.image} className="" />
                        <p className="text-white text-justify px-5">{p.description}</p>

                        <div className="flex m-5 justify-around">
                            <Link href={p.source}>
                                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md">
                                    Code
                                </button >
                            </Link>
                            <Link href={p.visit}>
                                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md">
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