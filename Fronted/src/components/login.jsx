import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {  
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post("http://localhost:4001/user/login", userinfo);
      
      console.log("Login response data:", res.data);
      
      if (res.data) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success('Login successful');
        document.getElementById("my_modal_3").close()
        setTimeout(() => {
          window.location.reload();
          localStorage.setitems("Users", JSON.stringify(res.data.user));
        },1000);
        
      } else {
        toast.error('Login failed: User data not received');
      }
    } catch (err) {
      if (err.response) {
        console.log("Error data:", err.response.data);
        console.log("Error status:", err.response.status);
        toast.error("Login failed: " + err.response.data.message);
      } else if (err.request) {
        console.log("No response received:", err.request);
        toast.error("Login failed: No response from server");
      } else {
        console.log("Error", err.message);
        toast.error("Login failed: " + err.message);
        setTimeout(() => {},2000);
      }
    }
  
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
