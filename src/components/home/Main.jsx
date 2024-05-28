import React from 'react'
import burger from '../../assets/burger.svg'
import piyoz from '../../assets/piyoz.png'
import yougrt from '../../assets/yougrt.png'
import foods from '../../assets/foods.png'

function Main() {
  return (
    <div className='mb-[55px]'>
        <div className=" flex gap-[27.65px] items-center mb-[43.39px]">
            <h2 className='font-quick font-[700] text-[32px] leading-[38.4px]'>Featured Categories</h2>
            <p className='font-quick font-[600] text-[16px] leading-[16px]'>Cake & Milk</p>
            <p className='font-quick font-[600] text-[16px] leading-[16px]'>Coffes & Teas</p>
            <p className='font-quick font-[600] text-[16px] leading-[16px]'>Pet Foods</p>
            <p className='font-quick font-[600] text-[16px] leading-[16px]'>Vegetables</p>
        </div>
        <div className="flex gap-[24px]">
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
            <div className="card py-[21px] px-[25.5px] hover:shadow-xl hover:overflow-hidden flex flex-col items-center bg-[#f2fce4] rounded-[10px]">
                <img className='mb-[16px]' src={burger} alt="" />
                <p className='font-quick font-[600] text-[16px] leading-[16px] mb-[3.19px]'>Cake & Milk</p>
                <p>26 items</p>
            </div>
        </div>
        <div className="mb-[50px]">
            <div className="flex gap-[24px] h-[300px] mt-[55px]">
                <div className="max-w-[512px] hover:shadow-2xl">
                    <img className='' src={piyoz} alt="" />
                    <div className="relative max-w-[225.92px] flex flex-col gap-[30px] bottom-[220px] left-[50px]">
                        <p className='font-quick font-[700] text-[24px] leading-[28px] text-[#253e45]'>Everyday Fresh & Clean with Our Products</p>
                        <div>
                            <button className=' font-quick font-[700] text-[12px] leading-[15.6px] text-white bg-[#3bb77e]  py-[8.5px] px-[20.5px] rounded border border-[#3bb77e] hover:text-[#3bb77e] hover:bg-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-[512px] hover:shadow-2xl">
                    <img className='' src={yougrt} alt="" />
                    <div className="relative max-w-[225.92px] flex flex-col gap-[30px] bottom-[220px] left-[50px]">
                        <p className='font-quick font-[700] text-[24px] leading-[28px] text-[#253e45]'>Make your Breakfast Healthy and Easy</p>
                        <div>
                            <button className=' font-quick font-[700] text-[12px] leading-[15.6px] text-white bg-[#3bb77e]  py-[8.5px] px-[20.5px] rounded border border-[#3bb77e] hover:text-[#3bb77e] hover:bg-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-[512px] hover:shadow-2xl">
                    <img className='' src={foods} alt="" />
                    <div className="relative max-w-[225.92px] flex flex-col gap-[30px] bottom-[220px] left-[50px]">
                        <p className='font-quick font-[700] text-[24px] leading-[28px] text-[#253e45]'>The best Organic Products Online best</p>
                        <div>
                            <button className=' font-quick font-[700] text-[12px] leading-[15.6px] text-white bg-[#3bb77e]  py-[8.5px] px-[20.5px] rounded border border-[#3bb77e] hover:text-[#3bb77e] hover:bg-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main