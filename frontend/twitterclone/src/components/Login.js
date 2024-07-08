import React, { useState, useEffect } from 'react';
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typingText, setTypingText] = useState('');
  const textToType = 'Happening now';
  const typingSpeed = 150;
  const navigate = useNavigate(); // Call the useNavigate hook to get the navigate function

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        console.log(res);
        navigate("/"); // Navigate to the home page upon successful login
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        if (res.data.success) {
          setIsLogin(true);
          toast.success(res.data.message);
        }

      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
    console.log(name, username, email, password);
  }

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypingText(textToType.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > textToType.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%] '>
        <div>
          <img className='ml-5' width={'400px'} src='https://i.etsystatic.com/47286684/r/il/d2aac4/5474882517/il_570xN.5474882517_rsqo.jpg' alt='Twitter logo' />
        </div>
        <div>
          <div className='my-5'>
            <h1 className='font-bold text-8xl mb-10' style={{ transition: 'all 1s ease-in-out' }}>
              {typingText}
            </h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "Signup"}</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-[50%]'>
            {!isLogin && (
              <>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-1 w-[80%] rounded-full my-2 font-semibold' />
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-1 w-[80%] rounded-full my-2 font-semibold' />
              </>
            )}
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-1 w-[80%] rounded-full my-2 font-semibold' />
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-1 w-[80%] rounded-full my-2 font-semibold' />
            <button className='bg-[#1D9BF0] mr-16 my-4 border-none py-2 rounded-full text-lg text-white  hover:bg-blue-500 hover:bg-opacity-85 transition duration-400'>{isLogin ? "Login" : "Create Account"}</button>
            <h1 className=' text-center cursor-pointer mr-16'>
              {isLogin ? 'Do not have an account?' : 'Already have an account?'}{' '}
              <span className='mx-1 text-blue-600 font-bold' onClick={loginSignupHandler}>
                {isLogin ? 'Signup' : 'Login'}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
