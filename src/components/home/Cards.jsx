import React from 'react'
import card1 from '../../assets/card1.svg'


function Cards() {
  return (
    <div>
        <div className="flex mb-[65px] justify-between">
            <div className="flex bg-[#f4f6fa] px-[20px] py-[28.21px] rounded-[10px] gap-[20px] items-center">
                <img className='border-[2px] border-[#3bb77e]' src={card1} alt="" />
                <div className="flex flex-col gap-[5px]">
                    <h6 className='font-quick font-[600] text-[18px] leading-[21.6px]'>Best prices & offers</h6>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#adadad]'>Orders $50 or more</p>
                </div>
            </div>
            <div className="flex bg-[#f4f6fa] px-[20px] py-[28.21px] rounded-[10px] gap-[20px] items-center">
                <img className='border-[2px] border-[#3bb77e]' src={card1} alt="" />
                <div className="flex flex-col gap-[5px]">
                    <h6 className='font-quick font-[600] text-[18px] leading-[21.6px]'>Best prices & offers</h6>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#adadad]'>Orders $50 or more</p>
                </div>
            </div>
            <div className="flex bg-[#f4f6fa] px-[20px] py-[28.21px] rounded-[10px] gap-[20px] items-center">
                <img className='border-[2px] border-[#3bb77e]' src={card1} alt="" />
                <div className="flex flex-col gap-[5px]">
                    <h6 className='font-quick font-[600] text-[18px] leading-[21.6px]'>Best prices & offers</h6>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#adadad]'>Orders $50 or more</p>
                </div>
            </div>
            <div className="flex bg-[#f4f6fa] px-[20px] py-[28.21px] rounded-[10px] gap-[20px] items-center">
                <img className='border-[2px] border-[#3bb77e]' src={card1} alt="" />
                <div className="flex flex-col gap-[5px]">
                    <h6 className='font-quick font-[600] text-[18px] leading-[21.6px]'>Best prices & offers</h6>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#adadad]'>Orders $50 or more</p>
                </div>
            </div>
            <div className="flex bg-[#f4f6fa] px-[20px] py-[28.21px] rounded-[10px] gap-[20px] items-center">
                <img className='border-[2px] border-[#3bb77e]' src={card1} alt="" />
                <div className="flex flex-col gap-[5px]">
                    <h6 className='font-quick font-[600] text-[18px] leading-[21.6px]'>Best prices & offers</h6>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#adadad]'>Orders $50 or more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards