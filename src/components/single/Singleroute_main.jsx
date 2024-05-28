import axios from '../../api/Index'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import main from '../../assets/Main.png'
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import vector from '../../assets/vector.svg'
import number from '../../assets/number.svg'
import product from '../../assets/product.svg'
import point from '../../assets/point.svg'
import { BsCart3 } from "react-icons/bs";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
function Singleroute_main() {
    const {id} = useParams()
    const {pathname} = useLocation()
    const[data, setData] = useState(null)
    const[count,setcount] = useState(1)


    const Plus = () =>{
        return setcount(count+1)
    }

    const Minus = () => {
        if(count>1){
        return setcount(count-1)
        }
        else if(count==1){
        return count
        }
    }


    useEffect(()=>{
        if(pathname.includes){
            window.scrollTo(0,0)
        }
        axios
            .get(`/products/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    },[id])

    

    return (
        <div className='flex gap-[57px]'>
            <div className="mt-[30px] mb-[30px]">
                <div className="flex gap-[44px] mb-[50px]">
                    <div className="img flex gap-[30px] flex-col items-center">
                        <img className='h-[528px] border rounded-[15px] w-[528px]' src={data?.image} alt="" />
                        <img src={main} alt="" />
                    </div>
                    <div className="flex flex-col items-start gap-[19px]">
                        <p  className='py-[6px] px-[12px] bg-[#fde0e9] text-[#f74b81] rounded-[3px]'>sale off</p>
                        <h4 className='font-quick font-[700] text-[40px] leading-[48px] text-[#253d4e]'>{data?.title}</h4>
                        <div className="flex items-center gap-[5px] mb-[19px]">
                            <IoIosStar className='text-[gold] w-[25px] h-[25px]'/>
                            <IoIosStar className='text-[gold] w-[25px] h-[25px]'/>
                            <IoIosStar className='text-[gold] w-[25px] h-[25px]'/>
                            <IoIosStar className='text-[gold] w-[25px] h-[25px]'/>
                            <IoIosStarOutline className='text-[gold] w-[25px] h-[25px]'/>
                            <p className='text-[#e7e7e7]'>({data?.rating.rate})</p>
                        </div>
                        <div className="flex gap-[50px] items-center mb-[12px]">
                            <p className='font-quick font-[700] text-[58px] leading-[58px] text-[#3bb77e]'>${data?.price * count}</p>
                            <p className='font-quick font-[700] text-[20px] leading-[20px]'>Available: <span className='text-[#3bb77e]'>{data?.rating.count}</span></p>
                        </div>
                        <p className='font-lato font-[400] text-[17px] text-[#7e7e7e] leading-[24px] mb-[17px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                        <div className=" flex gap-[10px] items-center mb-[13.5px]">
                            <p className='font-lato font-[400] text-[17px] text-[#7e7e7e] leading-[24px]'>Available Size:</p>
                            <div className="flex gap-[5px]">
                                <button className=' focus:text-[white] focus:outline-none focus:bg-[#3bb77e] font-lato font-[400] hover:bg-[#3bb77e] hover:text-[white] text-[14px] text-[#7e7e7e] leading-[32px] border px-[15px] rounded-[10px]'>S</button>
                                <button className=' focus:text-[white] focus:outline-none focus:bg-[#3bb77e] font-lato font-[400] hover:bg-[#3bb77e] hover:text-[white] text-[14px] text-[#7e7e7e] leading-[32px] border px-[15px] rounded-[10px]'>M</button>
                                <button className=' focus:text-[white] focus:outline-none focus:bg-[#3bb77e] font-lato font-[400] hover:bg-[#3bb77e] hover:text-[white] text-[14px] text-[#7e7e7e] leading-[32px] border px-[15px] rounded-[10px]'>L</button>
                                <button className=' focus:text-[white] focus:outline-none focus:bg-[#3bb77e] font-lato font-[400] hover:bg-[#3bb77e] hover:text-[white] text-[14px] text-[#7e7e7e] leading-[32px] border px-[15px] rounded-[10px]'>X</button>
                                <button className=' focus:text-[white] focus:outline-none focus:bg-[#3bb77e] font-lato font-[400] hover:bg-[#3bb77e] hover:text-[white] text-[14px] text-[#7e7e7e] leading-[32px] border px-[15px] rounded-[10px]'>XL</button>
                                <button className=' focus:text-[white] focus:outline-none focus:bg-[#3bb77e] font-lato font-[400] hover:bg-[#3bb77e] hover:text-[white] text-[14px] text-[#7e7e7e] leading-[32px] border px-[15px] rounded-[10px]'>2XL</button>
                            </div>
                        </div>
                        <div className="flex items-center gap-[12px] mb-[50px]">
                            <div className="flex items-center gap-[20px] px-[17px] border-[2px] border-[#3bb77e] rounded-[5px]">
                                <p className='font-lato font-[400] text-[16px] leading-[24px]'>{count}</p>
                                <div className="flex flex-col gap-[10px] text-[#3bb77e]">
                                    <button onClick={Plus} className='hover:scale-[1.5]'><VscChevronUp /></button>
                                    <button onClick={Minus} className='hover:scale-[1.5]'><VscChevronDown /></button>
                                </div>
                            </div>
                            <button className=' flex items-center gap-[5px] font-quick font-[700] text-[16px] leading-[50px] text-white bg-[#3bb77e] border border-[#3bb77e] hover:bg-[white] hover:text-[#3bb77e] px-[20px] rounded-[5px] flex gap-[8px]'><BsCart3 /> Add to cart</button>
                            <button className='p-[12px] border rounded-[5px] text-[#adadad]'><FiHeart className='w-[25px] h-[25px]'/></button>
                            <button><img src={vector} alt="" /></button>
                        </div>
                        <div className="flex gap-[50px]">
                            <div className="">
                                <p className='font-lato font-[400] text-[13px] leading-[24px] text-[#7e7e7e]'>Type: <span className='text-[#3bb77e]'> Organic</span></p>
                                <p className='font-lato font-[400] text-[13px] leading-[24px] text-[#7e7e7e]'>Type: <span className='text-[#3bb77e]'> Organic</span></p>
                                <p className='font-lato font-[400] text-[13px] leading-[24px] text-[#7e7e7e]'>Type: <span className='text-[#3bb77e]'> Organic</span></p>
                            </div>
                            <div className="">
                                <p className='font-lato font-[400] text-[13px] leading-[24px] text-[#7e7e7e]'>Type: <span className='text-[#3bb77e]'> Organic</span></p>
                                <p className='font-lato font-[400] text-[13px] leading-[24px] text-[#7e7e7e]'>Type: <span className='text-[#3bb77e]'> Organic</span></p>
                                <p className='font-lato font-[400] text-[13px] leading-[24px] text-[#7e7e7e]'>Type: <span className='text-[#3bb77e]'> Organic</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[41px] px-[51px] border rounded-[15px]">
                    <ul className='flex gap-[10px] mb-[42px]'>
                        <li className='font-quick font-[700] text-[17px] leading-[17px] border rounded-[30px] text-[#3bb77e] px-[25px] py-[12px]'>Description</li>
                        <li className='font-quick font-[700] text-[17px] leading-[17px] border rounded-[30px] text-[#7e7e7e] px-[25px] py-[12px]'>Additional info</li>
                        <li className='font-quick font-[700] text-[17px] leading-[17px] border rounded-[30px] text-[#7e7e7e] px-[25px] py-[12px]'>Vendor</li>
                        <li className='font-quick font-[700] text-[17px] leading-[17px] border rounded-[30px] text-[#7e7e7e] px-[25px] py-[12px]'>Reviews (3)</li>
                    </ul>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] mb-[33px]'>
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
                        goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
                        wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                        mastodon goodness gnashed a jellyfish and one however because.
                    </p>
                    <div className="flex gap-[53px] pb-[16px] border-b mb-[18px] ">
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'><img src={point} alt="" /> Type Of Packing</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'><img src={point} alt="" /> Color</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'><img src={point} alt="" /> Quantity Per Case</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'><img src={point} alt="" /> Ethyl Alcohol</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'><img src={point} alt="" /> Piece In One</li>
                        </ul>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'> Bottle</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'> Green, Pink, Powder Blue, Purple</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'> 100ml</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'> 70%</li>
                            <li className='flex items-center gap-[9px] font-lato font-[400] text-[14px] leading-[24px] text-[#7e7e7e]'> Carton</li>
                        </ul>                        
                    </div>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] mb-[33px]'>
                        Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
                        minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
                        raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
                        limpet.
                    </p>
                    <h4 className='font-quick font-[700] text-[24px] leading-[28.8px] mb-[16px] text-[#253d4e]'>Packaging & Delivery</h4>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e] pt-[18px] border-t mb-[33px]'>
                        Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one
                        assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much
                        held one exuberantly sheep goodness so where rat wry well concomitantly.Scallop or far crud plain remarkably far by thus far iguana lewd precociously 
                        and and less rattlesnake contrary caustic wow this near alas an next and pled the yikes articulate about as less cackled dalmatian in much less well 
                        jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                    </p>
                    <h4 className='font-quick font-[700] text-[24px] leading-[28.8px] mb-[30px] text-[#253d4e]'>Suggested Use</h4>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]  mb-[10px]'>Refrigeration not necessary.</p>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]  mb-[30px]'>Stir before serving</p>
                    <h4 className='font-quick font-[700] text-[24px] leading-[28.8px] mb-[30px] text-[#253d4e]'>Other Ingredients</h4>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]  mb-[10px]'>Organic raw pecans, organic raw cashews.</p>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]  mb-[10px]'>This butter was produced using a LTG (Low Temperature Grinding) process</p>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]  mb-[30px]'>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
                    <h4 className='font-quick font-[700] text-[24px] leading-[28.8px] mb-[30px] text-[#253d4e]'>Warnings</h4>
                    <p className='font-lato font-[400] text-[16px] leading-[24px] text-[#7e7e7e]  mb-[10px]'>Oil separation occurs naturally. May contain pieces of shell.</p>
                </div>
            </div>
            <div className=" min-w-[345px] mr-[80px] flex flex-col gap-[30px]">
                <div className="p-[31px] border rounded-[15px] shadow-xl">
                    <h5 className='font-quick font-[700] text-[24px] leading-[28.8px]'>Category</h5>
                    <div className="border-t-[2px] mt-[20px] pt-[30px] border-[#bce3c9] flex flex-col gap-[15px]">
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                    </div>
                </div>
                <div className="p-[31px] border rounded-[15px] shadow-xl">
                    <h5 className='font-quick font-[700] text-[24px] leading-[28.8px]'>Category</h5>
                    <div className="border-t-[2px] mt-[20px] pt-[30px] border-[#bce3c9] flex flex-col gap-[15px]">
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                    </div>
                </div>
                <div className="p-[31px] border rounded-[15px] shadow-xl">
                    <h5 className='font-quick font-[700] text-[24px] leading-[28.8px]'>Category</h5>
                    <div className="border-t-[2px] mt-[20px] pt-[30px] border-[#bce3c9] flex flex-col gap-[15px]">
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                        <div className="py-[10px] px-[19px] border rounded-[5px] flex gap-[49px] items-center">
                            <img src={product} alt="" />
                            <p className='font-lato font-[400] text-[14px] leading-[21px] text-[#253d4e]'>Milks&Dairies</p>
                            <img src={number} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Singleroute_main