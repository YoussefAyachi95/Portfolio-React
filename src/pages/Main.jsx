import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import Tools from '../components/Tools'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import AOS from 'aos';

import 'aos/dist/aos.css';
import './Main.css'

export default function Main() {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
<>
    <div className='space-y-12 md:-space-y-24' id='background_colored'>
        <div className='pt-4 pb-16 md:py-20' >
            <div className='py-0 ml-16 lg:px-6 fluid-container '>
                <div className='flex flex-col mx-auto space-y-reverse group md:justify-between item lg:flex-row'>
                    <div className='flex flex-col justify-center py-8 lg:py-0 lg:w-1/2'>
                        <div className='space-y-6 text-black lg:max-w-md' data-aos="fade-up">
                            <div className='text-2xl font-bold tracking-wide text-amber-500/70 ' >👋🏼 Hi there, </div>
                            <h1 className='text-2xl md:text-5xl font-bold leading-wide  text-gray-100 '>I'm 
                            Youssef, Fullstack web developer</h1>
                            <div className='mt-0 mb-8 text-base font-light leading-relaxed text-gray-400 prose-a:text-amber-500 last:mb-0'>
                            <p>And I want to help make the internet a more creative, accessible, and better place.</p>
                            </div>
                            <div className='flex flex-row space-x-4'>
                                <div className='flex flex-wrap gap-3 '>
                                <Link  to="/about" className='decoration-2 focus:outline-none focus-visible:ring focus-visible:ring-offset-2
                                    inline-flex items-center pfireby-3 px-4 rounded leading-none no-underline select-none whitespace-nowrap motion-safe:transition
                                 bg-amber-400 text-amber-900 hover:bg-amber-500 focus-visible:ring-white' >MORE ABOUT ME</Link>

                                  <Link to="/resume" className='decoration-2 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 
                                 inline-flex items-center py-3 px-4 rounded leading-none no-underline select-none whitespace-nowrap motion-safe:transition
                                 bg-transparent border hover:bg-white/10 border-amber-500 text-amber-500 focus-visible:ring-amber-500'>DOWNLOAD CV</Link>  
                        
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative justify-center order-first overflow-hidden lg:p-10 lg:order-last lg:w-1/2 md:flex mr-16'>
                        <div className='relative inset-0 translate-y-8 lg:translate-y-12  '>
                            <img src="../images/portfolio.JPG" className='rounded-xl opacity-90' id='portfolio_image' alt="A picture of the author of this page" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Tools/>
    <Projects/>
    <Footer/>
    </>
  )
}
