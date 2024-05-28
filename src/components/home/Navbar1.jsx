import React from 'react'

function Navbar1() {
  return (
    <div>
        <div className="flex justify-between py-[12px] border-b">
            <ul className='flex gap-[10px]'>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] border-r pr-[10px]'><a href="">About</a></li>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] border-r pr-[10px]'><a href="">My Account</a></li>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] border-r pr-[10px]'><a href="">Wishlist</a></li>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] '><a href="">Order Tracking</a></li>
            </ul>
            <ul className='flex gap-[20px] items-center'>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] border-r pr-[10px]'><a href="">Need help? Call Us:<span className='text-[#3bb77e]'>+ 1800 900</span></a></li>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] border-r pr-[10px]'>
                    <select name="" id="">
                    <option value="">English</option>
                    <option value="">Uzbek</option>
                    </select>
                </li>
                <li className='font-lato font-[500] text-[13px] leading-[13px] text-[#7e7e7e] '>
                    <select name="" id="">
                    <option value="">USD</option>
                    <option value="">EURO</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar1