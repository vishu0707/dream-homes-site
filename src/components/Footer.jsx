import React from 'react'
import {assets} from '../assets/assets'
import logox from "/src/assets/logox.png";


const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <div className="flex items-center space-x-2">
           <img src={logox} alt="Logo" className="h-10 w-auto" />
           <span className="text-xl font-semibold text-white">Dream Homes</span>
         </div>
            <p className='text-gray-400 mt-4'>Where every home is a star and every family is a constellation</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
                <a href="#" className='hover:text-white'>Privacy policy</a>
            </ul>
        </div>
        
        
      </div>
      <div className='border-t border-gray-700 py-4 mt-10  text-center text-gray-500'>
      © 2025 Dream Homes. All rights reserved.
     
      
      
      </div>
      

      
    </div>
  )
}

export default Footer
