
import Link from 'next/link'
import React from 'react'
import { projects } from '../components/constants/constants'

const Projects = () => {
    return (
        <div>
            {projects.map((p, i) => {
                return (
                    <div className="object-contain place-items-center mt-5 container border border-yellow-600 rounded-md ">
                        <h1 key={i} className="text-yellow-600 text-2xl text-center py-2">{p.title}</h1>

                        <img
                            // width={400} height={300}
                            src={p.image} className="" />
                        <p className="text-white text-justify px-5 py-2">{p.description}</p>

                        <div className="flex flex-wrap text-white font-bold justify-center py-2">
                            {p.tags.map((t, i) => {
                                return <h2 className="bg-pink-500 p-2 mx-2 rounded-full" key={i}>{t}</h2>;
                            })}
                        </div>
                        <div className="flex m-5 justify-around">
                            <Link href={p.source}>
                                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-5 rounded-md cursor-pointer ">
                                    Code
                                </button >
                            </Link>
                            <Link href={p.visit}>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-md cursor-pointer">
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