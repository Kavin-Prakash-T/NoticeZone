import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !passwordRef.current.value) {
      toast.error("Please fill in all fields");
      return;
    }

    const requestData = {
      email: email,
      password: passwordRef.current.value,
      role: role,
      name: name
    };
    
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, requestData);

      console.log("Registration successful:", data);
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      console.error("Error response:", error.response?.data);
      const errorMessage = error.response?.data?.error || "Registration failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-slate-800">
    <div className="flex justify-start text-white p-8">
       <Link to="/"><button className="bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700">
          Home
        </button></Link>
    </div>
    <div className="bg-slate-800 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-100 flex flex-col items-center p-10 bg-slate-700 shadow-lg rounded-xl"
      >
        <h1 className="font-bold text-2xl mb-5 text-white">Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 placeholder-gray-400 p-2 text-white rounded-sm w-[70%]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 text-white p-2 mt-4 rounded-sm w-[70%] placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 text-white rounded-sm my-4 w-[70%] placeholder-gray-400"
          ref={passwordRef}
          required
        />

        <div className="flex gap-6 text-white mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
            />
            User
          </label>
        </div>

        <button
          className="bg-blue-600 text-white text-lg px-4 py-2 rounded-lg"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
