import React from 'react'
import map from '../../assets/map.png'
import { CiLocationOn } from "react-icons/ci";

function Admin_main() {
  return (
    <div>
        <div className="py-[50px] flex flex-col items-center">
            <h3 className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#3bb77e] mb-[73px]'>How can help you ?</h3>
            <div className="flex mb-[53px] gap-[15px]">
                <div className="">
                    <h1 className='font-quick font-[700] text-[48px] leading-[57.6px] mb-[32px]'>Admin panel</h1>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <br />
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="">
                    <h1 className='font-quick font-[700] text-[20px] leading-[24px] mb-[22px]'>01. Visit Feedback</h1>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h1 className='font-quick font-[700] text-[20px] leading-[24px] mb-[22px] text-[#3bb778]'>03. Billing Inquiries</h1>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="">
                    <h1 className='font-quick font-[700] text-[20px] leading-[24px] mb-[22px]'>02. Employer Services</h1>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h1 className='font-quick font-[700] text-[20px] leading-[24px] mb-[22px]'>04.General Inquiries</h1>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="">
                <img src={map} alt="" />
            </div>
            <div className="flex items-center gap-[196px] mt-[50px]">
                <div className="">
                    <h1 className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#3bb77e] mb-[18px]'>Office</h1>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>205 North Michigan Avenue, Suite 810</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Chicago, 60601, USA</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Phone: (123) 456-7890</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad] mb-[24px]'>Email: contact@Evara.com</p>
                    <button className='flex gap-[5px] items-center text-[white] bg-[#3bb77e] hover:text-[#3bb77e] hover:bg-white border border-[#3bb77e] px-[19px] py-[12.5px] rounded-[5px] '><CiLocationOn className='w-[20px] h-[20px]'   /> View map</button>
                </div>
                <div className="">
                    <h1 className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#3bb77e] mb-[18px]'>Studio</h1>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>205 North Michigan Avenue, Suite 810</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Chicago, 60601, USA</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Phone: (123) 456-7890</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad] mb-[24px]'>Email: contact@Evara.com</p>
                    <button className='flex gap-[5px] items-center text-[white] bg-[#3bb77e] hover:text-[#3bb77e] hover:bg-white border border-[#3bb77e] px-[19px] py-[12.5px] rounded-[5px] '><CiLocationOn className='w-[20px] h-[20px]'   /> View map</button>
                </div>
                <div className="">
                    <h1 className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#3bb77e] mb-[18px]'>Shop</h1>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>205 North Michigan Avenue, Suite 810</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Chicago, 60601, USA</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Phone: (123) 456-7890</p>
                    <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad] mb-[24px]'>Email: contact@Evara.com</p>
                    <button className='flex gap-[5px] items-center text-[white] bg-[#3bb77e] hover:text-[#3bb77e] hover:bg-white border border-[#3bb77e] px-[19px] py-[12.5px] rounded-[5px] '><CiLocationOn className='w-[20px] h-[20px]'   /> View map</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Admin_main