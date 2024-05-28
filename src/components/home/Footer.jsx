import React from 'react'
import logo from '../../assets/logo.svg'
import location from '../../assets/location2.svg'
import footer1 from '../../assets/footer1.svg'
import send from '../../assets/send.svg'
import time from '../../assets/time.svg'
import app from '../../assets/app.svg'
import google from '../../assets/google.svg'
import karta from '../../assets/kartalar.svg'
import face from '../../assets/face.svg'
import twi from '../../assets/twi.svg'
import ins from '../../assets/ins.svg'
import p from '../../assets/P.svg'
import you from '../../assets/you.svg'
import phone from '../../assets/phone.svg'
function Footer() {
  return (
    <div>
        <div className=" flex justify-between pb-[48px] mb-[36px] border-b border-[#3bb77e] ">
            <ul>
                <li className='flex mb-[22px]'><img className='w-[215px] h-[66px]' src={logo} alt="" /></li>
                <li className='flex gap-[8px] mb-[35px] font-lato font-[400] text-[17px] leading-[24px] text-[#253c4d]'>Awesome grocery store website <br /> template</li>
                <li className='flex gap-[8px] mb-[16px] font-lato font-[400] text-[17px] leading-[24px] text-[#253c4d]'><img src={location} alt="" />Address: 5171 W Campbell Ave <br /> undefined Kent, Utah 53127 United States</li>
                <li className='flex gap-[8px] mb-[16px] font-lato font-[400] text-[17px] leading-[24px] text-[#253c4d]'><img src={footer1} alt="" />Call Us:(+91) - 540-025-124553</li>
                <li className='flex gap-[8px] mb-[16px] font-lato font-[400] text-[17px] leading-[24px] text-[#253c4d]'><img src={send} alt="" />Email:sale@Nest.com</li>
                <li className='flex gap-[8px] mb-[16px] font-lato font-[400] text-[17px] leading-[24px] text-[#253c4d]'><img src={time} alt="" />Hours:10:00 - 18:00, Mon - Sat</li>
            </ul>
            <ul className='flex flex-col gap-[13px]'>
                <li className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#253c4d]'>Company</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Delivery Information</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Privacy Policy</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Terms & Conditions</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Contact Us</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Support Center</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Careers</li>
            </ul>
            <ul className='flex flex-col gap-[13px]'>
                <li className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#253c4d]'>Company</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Delivery Information</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Privacy Policy</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Terms & Conditions</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Contact Us</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Support Center</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Careers</li>
            </ul>
            <ul className='flex flex-col gap-[13px]'>
                <li className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#253c4d]'>Company</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Delivery Information</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Privacy Policy</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Terms & Conditions</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Contact Us</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Support Center</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Careers</li>
            </ul>
            <ul className='flex flex-col gap-[13px]'>
                <li className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#253c4d]'>Company</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Delivery Information</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Privacy Policy</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Terms & Conditions</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Contact Us</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Support Center</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d]'>Careers</li>
            </ul>
            <ul>
                <li className='font-quick font-[700] text-[24px] leading-[28.8px] text-[#253c4d] mb-[20px]'>Install App</li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d] mb-[25px]'>From App Store or Google Play</li>
                <li className='flex gap-[12px] mb-[48px]'>
                    <img src={app} alt="" />
                    <img src={google} alt="" />
                </li>
                <li className='font-lato font-[400] text-[15px] leading-[24px] text-[#253c4d] mb-[25px]'>Secured Payment Gateways</li>
                <li><img src={karta} alt="" /></li>
            </ul>
        </div>
        <div className="mb-[180px] flex justify-between items-center">
            <div className="">
                <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>© 2022, <span className='text-[#3bb77e]'> Nest </span> - HTML Ecommerce Template <br /> All rights reserved</p>
            </div>
            <div className=" flex gap-[32.7px]">
                <div className="flex gap-[12px]">
                    <img src={phone} alt="" />
                    <div className="">
                        <h1 className='font-quick font-[700] text-[26px] leading-[26px] text-[#3bb77e] text-center'>1900 - 6666</h1>
                        <p className='font-lato font-[500] text-[12px] leading-[12px] text-[#adadad] text-center'>Working 8:00 - 22:00</p>
                    </div>
                </div>
                <div className="flex gap-[12px]">
                    <img src={phone} alt="" />
                    <div className="">
                        <h1 className='font-quick font-[700] text-[26px] leading-[26px] text-[#3bb77e] text-center'>1900 - 8888</h1>
                        <p className='font-lato font-[500] text-[12px] leading-[12px] text-[#adadad] text-center'>24/7 Support Center</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex gap-[5px] items-center">
                    <h1 className='mr-[10px] font-quick font-[700] text-[16px] leading-[19px] text-[#253d4e]'>Follow Us</h1>
                    <img src={face} alt="" />
                    <img src={twi} alt="" />
                    <img src={ins} alt="" />
                    <img src={p} alt="" />
                    <img src={you} alt="" />
                </div>
                <p className='font-lato font-[400] text-[14px] leading-[24px] text-[#adadad]'>Up to 15% discount on your first subscribe</p>
            </div>
        </div>
    </div>
  )
}

export default Footer