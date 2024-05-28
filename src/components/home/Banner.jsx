import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination  } from 'swiper/modules';
import { BsSend } from "react-icons/bs";
import swiper1 from '../../assets/swiper1.jpg'
import swiper2 from '../../assets/swiper2.jpg'
import swiper3 from '../../assets/swiper3.jpg'
import swiper4 from '../../assets/swiper4.jpg'
import swiper5 from '../../assets/swiper5.jpg'

function Banner() {
  return (
    <div className='pt-[30px] pb-[55px]' >
      <Swiper 
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
          clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full rounded-[30px] h-[538px] relative"
      >
        <div className="right-[95px] top-[500px] flex flex-col absolute z-20 top-[91px] left-[95px]">
          <h1 className='font-quick font-[700] text-[72px] leading-[72px] text-[#253d4e] mb-[31px]'>Fresh Vegetables <br /> Big discount</h1>
          <p className='font-lato font-[400] text-[30px] leading-[24px] text-[#7e7e7e] mb-[65px]'>Save up to 50% off on your first order</p>
          <div className="bg-[white] border rounded-[50px] p-[22.5px] flex items-center gap-[24px] max-w-[450px]">
            <BsSend className='w-[30px] h-[30px] text-[#7e7e7e]' />
            <input className='outline-none' type="text" placeholder='Your emaill address' />
          </div>
          <div className="">
            <button className=' font-quick font-[500] text-[16px] leading-[24px] text-[white] bg-[#3bb77e] py-[26px] px-[40px] border border-[#3bb77e] hover:bg-[white] hover:text-[#3bb77e] rounded-[50px] relative bottom-[77px] left-[300px]'>Subscribe</button>
          </div>
        </div>
          <SwiperSlide className=' bg-[#fcd12c] flex justify-end'><img className='h-[538px] ' src={swiper1} alt="" /></SwiperSlide>
          <SwiperSlide className=' bg-[#ffd800] flex justify-end'><img className='h-[538px]	' src={swiper2} alt="" /></SwiperSlide>
          <SwiperSlide className='bg-[#00add8] flex justify-end'><img className='h-[538px]	' src={swiper3} alt="" /></SwiperSlide>
          <SwiperSlide className='bg-[#F2BBCD] flex justify-end'><img className='object-contain	' src={swiper4} alt="" /></SwiperSlide>
          <SwiperSlide className='bg-[#ffd800] flex justify-end'><img className='object-contain	' src={swiper5} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner