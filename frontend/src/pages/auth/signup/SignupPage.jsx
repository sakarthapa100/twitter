import React, { useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { USER_API_END_POINT } from '../../../utils/constant';

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

  const saveUsername = (e) => {
    setUsername(e.target.value);
  };

  const saveFullname = (e) => {
    setFullname(e.target.value);
  };

  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/signup`, { email, username, fullname, password });
      console.log(res);
      toast.success('Signup successful!');
    } catch (error) {
      console.log(error);
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto flex h-screen px-10'>
      <div className='flex-1 hidden lg:flex items-center  justify-center'>
        <FaXTwitter size={300} className=' lg:w-2/3 fill-white' />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='lg:w-2/3  mx-auto md:mx-20 flex gap-4 flex-col' >
          <FaXTwitter className='w-24 lg:hidden fill-white' />
          <h1 className='text-4xl font-extrabold text-white'>Join today.</h1>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdOutlineMail />
            <input
              type='email'
              className='grow'
              placeholder='Email'
              name='email'
              value={email}
              onChange={saveEmail}
            />
          </label>
          <div className='flex gap-4 flex-wrap'>
            <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
              <FaUser />
              <input
                type='text'
                className='grow '
                placeholder='Username'
                name='username'
                value={username}
                onChange={saveUsername}
              />
            </label>
            <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
              <MdDriveFileRenameOutline />
              <input
                type='text'
                className='grow'
                placeholder='Full Name'
                name='fullName'
                value={fullname}
                onChange={saveFullname}
              />
            </label>
          </div>
          <label className='input input-bordered rounded flex items-center gap-2'>
            <MdPassword />
            <input
              type='password'
              className='grow'
              placeholder='Password'
              name='password'
              value={password}
              onChange={savePassword}
            />
          </label>
          <button className='btn rounded-full btn-primary text-white'>Sign up</button>
        </form>
        <div className='flex flex-col lg:w-2/3 gap-2 mt-4'>
          <p className='text-white text-lg'>Already have an account?</p>
          <Link to='/login'>
            <button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
