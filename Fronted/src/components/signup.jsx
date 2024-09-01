import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import Login from './login';
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';

export function SignUp() { 
  const location=useLocation();
  const from= location.state?.from?.pathname || "/";
  const navigate=useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userinfo);
      
      // Log the entire response to check the structure
      console.log("Signup response data:", res.data);
      
      if (res.data) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success("Signup successful!");
        navigate(from,{replace:true});

      } else {
        toast.success("Signup failed: User data not received");
      }
    } catch (err) {
      if (err.response) {
        console.log("Error data:", err.response.data);
        console.log("Error status:", err.response.status);
        console.log("Error headers:", err.response.headers);
        toast.success("Signup failed: " + err.response.data.message);
      } else if (err.request) {
        console.log("No response received:", err.request);
        toast.success("Signup failed: No response from server");
      } else {
        console.log("Error", err.message);
        toast.success("Signup failed: " + err.message);
      }
    }
  };
 
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link 
                to="/" 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >✕</Link>
              
              <h3 className="font-bold text-lg">Sign Up</h3>
              
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className='w-80 px-3 py-1 rounded-md'
                  {...register("name", { required: true })}
                />
                <br/>
                {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
              </div>
              
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className='w-80 px-3 py-1 rounded-md'
                 {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input 
                  type="text" 
                  placeholder="Enter your Password" 
                  className='w-80 px-3 py-1 rounded-md'
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
              </div>

              <div className='flex justify-around mt-4'>
                <button 
                  type="submit" 
                  className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400 duration-300 cursor-pointer'
                >
                  Sign Up
                </button>
                
                <p className='text-xl'>have account?{" "} 
                  <button 
                    className='text-blue-500 cursor-pointer'  
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
