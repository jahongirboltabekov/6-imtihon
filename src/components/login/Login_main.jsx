import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import axios from '../../api/Index'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Login_main() {
    let navigate = useNavigate()
    const [username, setUsername] = useState("mor_2314")
    const [password, setPassword] = useState("83r5^_")
    const [loading, setLoading] = useState(false)

    const handleLogin = (e)=>{
        e.preventDefault()
        setLoading(true)
        let user = {
            username,
            password
        }

        axios
            .post("/auth/login", user )
            .then(res => {
                console.log("res>>", res.data.token )
                toast.success("Saxifanggizga xushkelibsiz!")
                localStorage.setItem("x-auth-token", res.data.token)
                navigate("/admin")
            })
            .catch(err => {
                console.log("err>>", err)
                toast.error("Username yoiki Password xato kiritilgan.")
                navigate("/login")
            })
            .finally(() => setLoading(false))
    }

  return (
    <div className='py-[140px] flex justify-center'>
        <form onSubmit={handleLogin} className="border rounded-[5px] px-[31px] py-[20px] flex flex-col gap-[25px] items-center">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-[10px]">
                <p className='text-[#444444]'>Email Address*</p>
                <input value={username} onChange={e => setUsername(e.target.value)} className='border rounded-[5px] px-[13px] py-[10px] outline-none w-[338px]' placeholder='Enter Your Username' type="text" />
            </div>
            <div className="flex flex-col gap-[10px]">
                <p className='text-[#444444]'>Password*</p>
                <input value={password} onChange={e => setPassword(e.target.value)} className='border rounded-[5px] px-[13px] py-[10px] outline-none w-[338px]' placeholder='Enter Your Password' type="password" />
            </div>
            <div className=" flex justify-between w-full">
                <div className="flex items-center gap-[10px]">
                    <input className='w-[18px] h-[18px] rounded-[5px]' type="checkbox" />
                    <p>Remember Me</p>
                </div>
                <p>Forgot Password?</p>
            </div>
            <div className="flex justify-between w-full">
                <button disabled={loading} type='submit' className=' flex items-center gap-[5px] font-quick font-[700] text-[16px] leading-[50px] text-white bg-[#3bb77e] border border-[#3bb77e] hover:bg-[white] hover:text-[#3bb77e] px-[20px] rounded-[5px] flex gap-[8px]'>{loading ? 'Please Loading...' : 'Login'}</button>
                <button>Signup?</button>
            </div>
        </form>
        
    </div>
  )
}

export default Login_main