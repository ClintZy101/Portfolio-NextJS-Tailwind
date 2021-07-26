import React from 'react'
import Header from '../components/Header'
import { projects } from '../components/constants/constants'
import Image from 'next/image'

const projectsPage = () => {

    return (
        <div className="bg-dark-bg ">
            <Header />
            {projects.map((p, i)=> {
                return (
                    <div className="grid grid-cols-1 place-items-center">
                        <h1 key={i} className="text-yellow-600 text-2xl text-center ">{p.title}</h1>
                        
                        <img
                        width={300} height={300}
                        src="/pixexid.png" className=""/>
                    </div>
                    

                )
            })}
        </div>
    )
}

export default projectsPage

