import React from 'react'
import "../App.css"
import { projectsReact,projectsJs,projectsCss } from '../datas'

function Projects() {
    return (
        <div className='bg-gradient-to-b from-lime-800 to-lime-950 w-full text-white min-h-[85vh] '>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center '>
                    <p className='text-5xl font-bold inline border-b-4 border-lime-700'>Projects</p>
                </div>

                <div className='pb-8'>
                    <p className='text-3xl font-bold inline border-b-4 border-lime-700'>React.js</p>
                    <p className='py-6'>You can Check out some of my work with react.js right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {projectsReact.map(project => (
                        <div key={project.id} className='projects shadow-md shadow-lime-600 rounded-lg hover:scale-105 duration-200'>
                            <div className='text-center py-2 text-xl opacity-90'>{project.title}</div>
                            <img className='rounded-md' src={project.src} alt="" />
                            <div className='flex items-center justify-center'>
                                <a href={project.display} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:opacity-100'>Display</a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:opacity-100'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className='mt-24 mb-8'/>


                <div className='pb-8 pt-12'>
                    <p className='text-3xl font-bold inline border-b-4 border-lime-700'>Vanilla JavaScript</p>
                    <p className='py-6'>You can Check out some of my work with pure javascript right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {projectsJs.map(project => (
                        <div key={project.id} className='projects shadow-md shadow-lime-600 rounded-lg hover:scale-105 duration-200'>
                            <div className='text-center py-2 text-xl opacity-90'>{project.title}</div>
                            <img className='rounded-md' src={project.src} alt="" />
                            <div className='flex items-center justify-center'>
                                <a href={project.display} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:opacity-100'>Display</a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:opacity-100'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className='mt-24 mb-8'/>


                <div className='pb-8 pt-12'>
                    <p className='text-3xl font-bold inline border-b-4 border-lime-700'>HTML, CSS, SCSS, Bootstrap</p>
                    <p className='py-6'>You can check out static websites created by own to understand to my design skills right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {projectsCss.map(project => (
                        <div key={project.id} className='projects shadow-md shadow-lime-600 rounded-lg hover:scale-105 duration-200'>
                            <div className='text-center py-2 text-xl opacity-90'>{project.title}</div>
                            <img className='rounded-md' src={project.src} alt="" />
                            <div className='flex items-center justify-center'>
                                <a href={project.display} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:opacity-100'>Display</a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:opacity-100'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects