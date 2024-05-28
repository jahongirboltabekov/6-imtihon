import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../../api/Index'
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

function Products() {
    const [data, setData] = useState([])
    const [count, setCount] =useState(1)

    useEffect(()=>{
      axios
        .get(`/products?limit=${count*10}`)
        .then(res => setData(res.data))
        .catch(res => console.log(res))
    },[count])


    let products = data.map((el)=> 
    
        <div className='card bg-white rounded-[20px] hover:shadow-2xl overflow-hidden border 'key={el.id}>
            <img className='h-[230px] w-full rounded-t-[20px]' src={el.image} width={300} alt="" />
            <div className='p-[21px] flex flex-col rounded-b-[20px]'>
                <p className='font-lato font-[400] text-[16px] leading-[12px] text-[#7e7e7e] mb-[9px]'>{el.category}</p>
                <h2 className='font-quick font-[700] text-[20px] text-[#253d4e] leading-[19.2px] mb-[10.19px]'>{el.title.slice(0,20)}</h2>
                <div className="flex items-center gap-[5px]">
                    <IoIosStar className='text-[gold] w-[30px] h-[30px]'/>
                    <IoIosStar className='text-[gold] w-[30px] h-[30px]'/>
                    <IoIosStar className='text-[gold] w-[30px] h-[30px]'/>
                    <IoIosStar className='text-[gold] w-[30px] h-[30px]'/>
                    <IoIosStarOutline className='text-[gold] w-[30px] h-[30px]'/>
                    <p className='text-[#e7e7e7]'>({el.rating.rate})</p>
                </div>
                <p className='mb-[24px]'>available: <span className='text-[#3bb77e]'>{el.rating.count}</span></p>
                <div className="flex justify-between items-center">
                    <p className='font-quick font-[700] text-[18px] leading-[24px] text-[#3bb77e]'>${el.price}</p>
                    <NavLink  to={`/products/${el.id}`}><button className='font-sans font-[500] text-[16px] leading-[17.04px] text-white bg-[#3bb77e] border border-[#3bb77e] hover:bg-[white] hover:text-[#3bb77e] px-[20px] py-[10px] rounded-[5px] flex gap-[8px]'>Learn More</button></NavLink>
                </div>
            </div>    
        </div>
    )

  return (
    <div className='flex flex-col items-center'>
        <div className="mb-[43.4px] w-full">
            <h3 className='font-quick font-[700] text-[32px] leading-[38.4px] text-[#253d4e]'>Popular Products</h3>
        </div>
        <div className='w-full grid grid-cols-5 gap-[40px] mb-[85px]'>
            {products}
        </div>
        <button onClick={() => setCount(p => p+1)} className='mb-[85px] text-center font-sans font-[500] text-[16px] leading-[17.04px] text-white bg-[#3bb77e] border border-[#3bb77e] hover:bg-[white] hover:text-[#3bb77e] px-[20px] py-[10px] rounded-[5px] flex gap-[8px]'>See More</button>
    </div>
  )
}

export default Products