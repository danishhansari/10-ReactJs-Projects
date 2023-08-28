import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 h-24 text-white">
        <h1 className="text-[#00df9a] text-3xl font-bold">REACT. </h1>   
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources </li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={!nav ? "fixed top-0 left-0 w-[60%] border-gray-900 h-full border-r-2 flex flex-col bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-500"}>
        <h1 className="text-[#00df9a] text-3xl font-bold m-4">REACT. </h1>   
          <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resources </li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar