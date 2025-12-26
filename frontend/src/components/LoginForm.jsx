import { useRef, useState } from "react";
import  axios from "axios"
import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router";

const LoginForm = () => {

  const navigate=useNavigate()
  
  const [email, setUsername] = useState("");

  const passwordRef = useRef("");

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const { data } = await axios.post("http://localhost:3000/auth/login", {
      email: email,
      password: passwordRef.current.value
    });
    toast.success(data.messsage)
    sessionStorage.setItem("token", data.token)
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('role', data.role);
    navigate("/")
  }catch(err){
    if(err.response.status === 400){
      toast.error("User not found");
    }else{
      toast.error("An error occurred");
    }
  }
}

  return (
    <div className="bg-[#ECFDF7] h-screen">
    <div className="flex justify-end text-white p-8">
       <Link to="/"><button className="bg-white border-[#3EBB9E] text-[#00674F] px-3 py-1 pb-2 rounded-lg hover:bg-[#ECFDF7]">
          Home
        </button></Link>
    </div>
    <div className="bg-[#ECFDF7] mt-20 flex items-center justify-center">

      <div className="w-100 border-[#73E6CB] flex flex-col justify-center items-center p-10  bg-[#FFFFFF] shadow-lg rounded-xl">
        <h1 className="font-bold text-2xl mb-5 text-[#0A3C30]">Login</h1>
        <input
          type="text"
          placeholder="Email"
          className="border border-[#73E6CB] text-white p-2 mt-5 rounded-sm w-[70%] placeholder-gray-400"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-[#73E6CB] p-2 text-white rounded-sm my-5 w-[70%] placeholder-gray-400"
          ref={passwordRef}
        />

        <p className="text-[#4B8376] pb-4">Don't have an account? <Link to='/register' className="text-[#00674F] hover:text-[#0A3C30]">Sign Up</Link></p>

        <button
          className="bg-[#00674F] text-white text-lg px-3 py-1 rounded-lg hover:bg-[#0A3C30]"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

    </div>
    </div>
  );
};

export default LoginForm;
