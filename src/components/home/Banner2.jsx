import React from 'react'
import { BsSend } from "react-icons/bs";
import banner from '../../assets/banner2.png'

function Banner2() {
  return (
    <div className='mb-[40px]'>
        <div className="pl-[83px] pt-[72px] bg-[#d8f1e5] rounded-[20px] flex pr-[50px] justify-between">
            <div className="right-[95px] top-[500px] flex flex-col">
                <h1 className='font-quick font-[700] text-[40px] leading-[48px] text-[#253d4e] mb-[31px]'>Stay home & get your daily <br /> needs from our shop</h1>
                <p className='font-lato font-[400] text-[18px] leading-[24px] text-[#7e7e7e] mb-[65px]'>Start You'r Daily Shopping with <span className='text-[#3bb77e]'>Nest Mart</span></p>
                <div className="bg-[white] border rounded-[50px] p-[22.5px] flex items-center gap-[24px] max-w-[450px]">
                    <BsSend className='w-[30px] h-[30px] text-[#7e7e7e]' />
                    <input className='outline-none' type="text" placeholder='Your emaill address' />
                </div>
                <div className="">
                    <button className=' font-quick font-[500] text-[16px] leading-[24px] text-[white] bg-[#3bb77e] py-[26px] px-[40px] border border-[#3bb77e] hover:bg-[white] hover:text-[#3bb77e] rounded-[50px] relative bottom-[77px] left-[300px]'>Subscribe</button>
                </div>
            </div>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default Banner2