import {useEffect} from 'react'
import {projectList} from '../data/projectList'
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Projects() {

    useEffect(() => {
        AOS.init();
      }, []);


  return (
    <div className='fluid-container' id='projects'>
        <div className='py-16 space-y-24 lg:py-32 ml-20'>
           {
            projectList.map ((project) => (
                <div className='relative mt-12 grid items-center w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-4 max-w-none mb-52' data-aos="fade-up" key={project.title}>
                <div className='md:space-y-2 col-span-1 md:col-span-2  md:order-last'>
                    <div className='relative z-0 w-full lg:scale-150 lg:translate-x-40  '>
                        <div className='absolute top-0 w-48 h-48 rounded-full bg-red-500/30 md:w-96 md:h-96 -left-2 md:-left-4 filter blur-2xl opacity-60 '></div>
                        <div className='absolute top-0 w-48 h-48 rounded-full bg-blue-500/30 md:w-96 md:h-96 -right-2 md:-right-4 filter blur-2xl opacity-60 '></div>
                        <div className='absolute w-48 h-48 rounded-full bg-pink-700/30 md:w-96 md:h-96 -bottom-8 left-10 md:left-20 filter blur-2xl opacity-60 '></div>
                        <img src={project.img} alt="This is the project screenshot example" className='relative rounded-lg max-w-xs ml-4 hover:scale-110 border border-zinc-700'/>
                    </div>
                </div>
                <div className='col-span-1 space-y-16 md:space-y-12 md:col-span-2'>
                    <div className='flex flex-col space-y-4 '>
                        <div className='flex flex-row items-end w-auto space-x-2'>
                            <div className='text-3xl font-bold tracking-[-0.04em] text-gray-200 sm:text-5xl sm:leading-[3.5rem]'>{project.title}</div>
                            <a href={project.link} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1 text-amber-500 hover:text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                         </svg>
                        </a>
                        </div>
                        <div className="text-base leading-7 text-gray-300 w-10/12">
                            <p>{project.description}</p>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='grid gap-6 text-sm md:grid-cols-4 text-gray-300 lg:gap-6'>

                            <div className='flex-1 space-y-2 '>
                                <div className='leading-tight tracking-wide text-gray-400'>What did I use?</div>
                                <div className='text-xs text-gray-300 lg:w-3/4 last:mb-0'>
                                    <p>{project.tools}</p>
                                </div>
                            </div>

                            <div className='flex-1 space-y-2 '>
                                <div className='leading-tight tracking-wide text-gray-400 mb-[2px]'>Code Source:</div>
                                <a href={project.codeLink} target="_blank" className='lg:w-3/4 last:mb-0'>Github</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            ))
           }
        </div>
    </div>
  )
}
