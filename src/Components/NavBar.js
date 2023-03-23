import React from 'react';
import CarIcon from "../Assets/icons8-car-rental-blue-ui-96.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <div className='flex flex-wrap justify-between w-full h-auto'>
          <Link to='/' >
            <div className='flex justify-items-start'>
                 
              <img className='w-10 h-10 ml-3 mt-3' src={CarIcon} alt="car"/> 
              <h1 className="text-5xl text-blue-400 m-2"> Rent It </h1>         
            </div>
          </Link>
              
                
          <div className='flex justify-items-end m-2 pr-4'>
            <Link to='/cars' >
              <h2 className='text-4xl text-blue-500 m-2'>Cars</h2>
            </Link>

            <Link to='/about' >
              <h2 className='text-4xl text-blue-400 m-2'>About</h2>
              </Link>
            </div> 
        </div>
    
    </>
  )
}

export default NavBar