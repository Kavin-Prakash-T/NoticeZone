import { useRef, useState } from "react";
import  axios from "axios"
import {toast} from "react-toastify"
import { Link } from "react-router";

const LoginForm = () => {
  
  const [username, setUsername] = useState("");

  const passwordRef = useRef("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const { data } = await axios.post("http://localhost:3000/auth/login", {
      email: username,
      password: passwordRef.current.value
    });
    toast.success(data.messsage)
    sessionStorage.setItem("token", data.token)
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('role', data.role);
  }catch(err){
    if(err.response.status === 400){
      toast.error("User not found");
    }else{
      toast.error("An error occurred");
    }
  }
}

  return (
    <div className="bg-slate-800">
    <div className="flex justify-start text-white p-8">
       <Link to="/"><button className="bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700">
          Home
        </button></Link>
    </div>
    <div className="bg-slate-800 h-screen flex items-center justify-center">

      <div className="w-100 flex flex-col justify-center items-center p-10  bg-slate-700 shadow-lg rounded-xl">
        <h1 className="font-bold text-2xl mb-5 text-white">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 text-white p-2 mt-5 rounded-sm w-[70%] placeholder-gray-400"
          value={username}
          onChange={handleUsernameChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 text-white rounded-sm my-5 w-[70%] placeholder-gray-400"
          ref={passwordRef}
        />

        <button
          className="bg-blue-600 text-white text-lg px-3 py-1 rounded-lg"
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
