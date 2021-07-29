import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Project'

const projectsPage = () => {

    return (
        <div className="bg-dark-bg">
            <Header className="z-100"/>
            <h1 className="text-white text-2xl text-center font-mono hover:text-yellow-600">PROJECTS</h1>
            <div className="px-5">
                <Projects/>
            </div>
        </div>
    )
}

export default projectsPage

