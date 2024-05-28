import React from 'react'
import { NavLink } from 'react-router-dom'
import icon1 from '../../assets/nav3_1.svg'
import olovcha from '../../assets/olovcha.svg'
import naushnik from '../../assets/naushnik.svg'

function Navbar3() {
  return (
    <div>
        <div className="py-[14.5px] flex items-center border-b justify-between">
            <div className=" flex py-[14px] px-[20px] rounded-[5px] bg-[#3bb77e]">
                <img src={icon1} alt="" />
                <select className=' bg-[#3bb77e] text-[white] pl-[7px] pr-[11px] outline-none' name="" id="">
                    <option value="">Browse All Categories</option>
                    <option value="">Browse Some Categories</option>
                    <option value="">Browse Any Categories</option>
                </select>
            </div>
            <ul className='flex gap-[46px]'>
                <li className=' flex gap-[8px] font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'><img className='border-[2px] border-[#3bb77e] ' src={olovcha} alt="" />Deals</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'><NavLink to={'/'}>Home</NavLink></li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>About</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>Shop</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>Vendors</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>Mega menu</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>Blog</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>Pages</li>
                <li className=' hover:text-[#3bb77e] flex font-quick text-[#253d4e] font-[700] text-[16px] leading-[70px] items-center'>Contact</li>
            </ul>
            <div className="flex gap-[12px]">
                <img src={naushnik} alt="" />
                <div>
                    <p className='font-quick font-[700] text-[26px] leading-[26px] text-[#3bb77e]'>1900 - 888</p>
                    <p className='font-lato font-[500] text-[12px] leading-[12px] text-[#7e7e7e]'>24/7  Support  Center</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar3