import React from 'react'
import { useAuth } from '../context/authprovider';
import toast from 'react-hot-toast';
function Logout() {
    const [authuser,setauthuser]=useAuth(); 
    const handlelogout =()=>{
        try {
            setauthuser({
                ...authuser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            setTimeout(() => {
              window.location.reload();
            },1000);
        } catch (error) {
            toast.error("error:" +error)
            setTimeout(() => {},2000);

        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout;