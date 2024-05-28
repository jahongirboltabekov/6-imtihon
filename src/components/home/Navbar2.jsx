import React from 'react'
import logo from '../../assets/logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import location from '../../assets/location.svg'
import compare from '../../assets/compare.svg'
import heart from '../../assets/heart.svg'
import arava from '../../assets/arava.svg'
import account from '../../assets/account.svg'
import { NavLink } from 'react-router-dom';
function Navbar2() {
  return (
    <div>
      <div className=" nav3 flex gap-[34px] border-b">
        <ul className='flex gap-[58.94px] items-center py-[33.5px]'>
          <li><img src={logo} alt="" /></li>
          <li className='py-[16.5px] px-[15px] border border-[#bce3c9] rounded-[5px] flex items-center'>
            <input className='pl-[5px] min-w-[600px] outline-none'  placeholder='Search for items...' type="text" />
            <IoSearchOutline className='h-[20px] w-[20px] text-[#7e7e7e]' />
          </li>
          <li className='py-[11px] px-[15px] border rounded-[5px] flex shadow-xl'>
            <img src={location} alt="" />
            <select className='px-[7.5px] text-[#3bb77e] outline-none'  name="" id="">
              <option value="">Your Location</option>
              <option value="">Tashkent</option>
              <option value="">Buxara</option>
              <option value="">Samarkand</option>
              <option value="">Namangon</option>
            </select>
          </li>
        </ul>
        <ul className='ul flex gap-[35px] items-center'>
          <li className='flex gap-[5px] hover:text-[#3bb77e] font-lato font-[400] text-[16px] leading-[16px] items-center text-[#7e7e7e]'><img className='border-[2px] border-[#3bb77e]' src={compare} alt="" />Compare</li>
          <li className='flex gap-[5px] hover:text-[#3bb77e] font-lato font-[400] text-[16px] leading-[16px] items-center text-[#7e7e7e]'><img className='border-[2px] border-[#3bb77e]' src={heart} alt="" />Wishlist</li>
          <li className='flex gap-[5px] hover:text-[#3bb77e] font-lato font-[400] text-[16px] leading-[16px] items-center text-[#7e7e7e]'><img className='border-[2px] border-[#3bb77e]' src={arava} alt="" />Cart</li>
          <li><NavLink  activeclassname="active" to={'/login'} className='flex gap-[5px] hover:text-[#3bb77e] font-lato font-[400] text-[16px] leading-[16px] items-center text-[#7e7e7e]'><img className='border-[2px] border-[#3bb77e]' src={account} alt="" />Account</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar2