import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Project'

const projectsPage = () => {

    return (
        <div className="bg-dark-bg">
            <Header />
            <h1 className="text-white text-2xl text-center font-bold font-mono">PROJECTS</h1>
            <div className="px-5">
                <Projects />
            </div>
        </div>
    )
}

export default projectsPage

