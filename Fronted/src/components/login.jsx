import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    document.getElementById("my_modal_3").close(); // Close the modal after form submission
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <Link 
            to="/" 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >✕</Link>
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="password" 
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
                Login
              </button>
              <p>Not Registered?{" "} 
                <Link to="/SignUp" className='text-blue-500 cursor-pointer'>Sign Up</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
