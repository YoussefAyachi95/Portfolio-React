import { GrLinkedinOption, GrGithub } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer>
        <div className='py-4 overflow-hidden text-white bg-[#101013] mt-24'>
            <div className='flex flex-col w-full p-4 mx-auto space-y-6 text-sm text-white border-gray-700 fluid-container sm:space-y-0 sm:items-center md:flex-row md:justify-between sm:flex-row sm:justify-between max-[640px]:text-center'>
                <span className='text-gray-700'>
                <a href="" className='text-2xl ml-16 p-2 hover:scale-125 hover:rotate-2 motion-safe:transition-transform focus:outline-none focus-visible:ring-2 ring-primary'>Ayachi<strong>.dev</strong></a>
                </span>
                <div className='flex flex-row space-x-2 mr-6 max-[640px]:ml-[50%]'>
                    <a href="https://de.linkedin.com/in/youssef-ayachi-0a097b229" target='_blank' className='p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary'>
                        <GrLinkedinOption className='h-6 w-6'/>
                    </a>
                    <a href="https://github.com/YoussefAyachi95" target='_blank' className='p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary'>
                        <GrGithub className='h-6 w-6'/>
                    </a>
                </div>
            </div>
            <div className='w-full p-4 mx-auto space-y-2 text-xs border-gray-900 fluid-container text-white/50 sm:space-y-0 sm:flex sm:flex-row sm:justify-center sm:border-solid md:border-t max-[640px]:ml-[35%]'>
                <div className='flex items-center space-x-3'>
                    <span>
                © 2023
                    
                Youssef Ayachi
            </span>
                </div>
            </div>
        </div>
    </footer>
  )
}
