import {useEffect } from 'react'
import {skills} from '../data/tools'
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Tools() {

    useEffect(() => {
        AOS.init();
    }, [])
    

  return (
    <section className='grid grid-cols-1 pt-24 fluid-container gap-y-10 gap-x-6 lg:grid-cols-3 ml-12 mb-36' data-aos="fade-up">
        <h2 className='text-2xl font-semibold leading-9 tracking-tight text-gray-100 ml-12'>Tools I use:</h2>
        <div className='prose-invert max-w-none lg:col-span-2 prose-gray prose-a:font-semibold prose-a:text-amber-500 hover:prose-a:text-amber-600'>
            <p className='w-9/12'>I get asked a lot about the things I use to create my designs and be productive. Here is a small list of some my favorite tools.</p>
            <div className='mt-6 not-prose'>
                   
                <div className='grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-[repeat(3,_300px)] mr-8'>

                    {
                        skills.map(skill => (
                            <div key={skill.name} className='card'>
                                <div className='rounded-xl p-3 flex space-x-2 items-center overflow-hidden h-full cursor-pointer border-solid border border-gray-600 hover:bg-fuchsia-600 w-full' data-aos="fade-up">
                                <img src={skill.img} className='flex-shrink-0 h-6 w-6' alt="Logos of Frameworks, Programming Languages and different tools" />
                                <p className='normalText ml-3 opacity-80'>{skill.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
