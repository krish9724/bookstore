import React from 'react';
import { Link } from 'react-router-dom'; 
import Login from './login';
import { useForm } from "react-hook-form"

export function SignUp() { 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
