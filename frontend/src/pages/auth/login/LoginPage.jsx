import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdMailOutline, MdOutlinePassword } from 'react-icons/md';
import axios from 'axios'; 
import { USER_API_END_POINT } from '../../../utils/constant';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/userSlice';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
 const dispatch= useDispatch()


  const valueSaveEmail = (e) => {
    setEmail(e.target.value);
  };

  const valueSavePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password },{
        headers:{
          'Content-Type':"application/json"
        },
        withCredentials:true
      });
  dispatch(getUser(res?.data?.user))
      if(res.data.success){
        navigate("/")
         toast.success(res.data.message)
      }
       
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto flex h-screen'>
      <div className='flex-1 hidden lg:flex items-center justify-center'>
        <FaTwitter size={200} className='lg:w-2/3 fill-white' />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex gap-4 flex-col'>
          <FaTwitter className='w-24 lg:hidden fill-white' />
          <h1 className='text-4xl font-extrabold text-white'>Happening now.</h1>
          <h1 className=' mt-4  mb-2 text-2 xl font-extrabold text-white'>Login</h1>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdMailOutline />
            <input
              type='text'
              className='grow'
              placeholder='Email'
              name='email'
              value={email}
              onChange={valueSaveEmail}
            />
          </label>

          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdOutlinePassword />
            <input
              type='password'
              className='grow'
              placeholder='Password'
              name='password'
              value={password}
              onChange={valueSavePassword}
            />
          </label>
          <button type="submit" className='btn rounded-full btn-primary text-white'>Login</button>
        </form>
        <div className='flex flex-col gap-2 mt-4'>
          <Link to='/signup'>
            <button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
