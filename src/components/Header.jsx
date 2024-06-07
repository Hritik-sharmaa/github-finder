import React from 'react'
import { FaGithub } from "react-icons/fa";
import InputField from './InputField';

const Header = ({userRef}) => {
  return (
    <>
    <div className='bg-gray-900 text-white h-[4.5rem] flex items-center justify-center'>
        <FaGithub size="40"/> 
        <h2 className='text-xl font-bold ml-4 font-mono'>GitHub User Finder</h2>
    </div>
    <InputField userRef={userRef}/>
    </>
  )
}

export default Header