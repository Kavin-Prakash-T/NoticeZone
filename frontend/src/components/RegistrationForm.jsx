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
      email,
      password: passwordRef.current.value,
      role,
      name,
    };

    try {
      const { data } = await axios.post(
        `http://localhost:3000/auth/register`,
        requestData
      );
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Registration failed";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="bg-[#ECFDF7] h-screen">
      <div className="flex justify-end p-8">
        <Link to="/">
          <button className="bg-white  text-[#00674F] px-3 py-1 rounded-lg hover:bg-[#ECFDF7] transition">
            Home
          </button>
        </Link>
      </div>

      <div className="bg-[#ECFDF7] mt-15 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-100 flex flex-col items-center p-10 bg-[#FFFFFF] border border-[#73E6CB] shadow-lg rounded-xl"
        >
          <h1 className="font-bold text-2xl mb-5 text-[#0A3C30]">
            Sign Up
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="border border-[#73E6CB] bg-[#ECFDF7] placeholder-[#6FAFA0] p-2 text-[#0A3C30] rounded-sm w-[70%] focus:outline-none focus:ring-2 focus:ring-[#00674F]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-[#73E6CB] bg-[#ECFDF7] placeholder-[#6FAFA0] p-2 mt-4 text-[#0A3C30] rounded-sm w-[70%] focus:outline-none focus:ring-2 focus:ring-[#00674F]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-[#73E6CB] bg-[#ECFDF7] placeholder-[#6FAFA0] p-2 text-[#0A3C30] rounded-sm my-4 w-[70%] focus:outline-none focus:ring-2 focus:ring-[#00674F]"
            ref={passwordRef}
            required
          />

          <div className="flex gap-6 text-[#0A3C30] mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
                className="accent-[#0A3C30]"
              />
              Admin
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={(e) => setRole(e.target.value)}
                className="accent-[#0A3C30]"
              />
              User
            </label>
          </div>

          <p className="text-[#4B8376] pb-4">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-[#00674F] hover:text-[#0A3C30]"
            >
              Login
            </Link>
          </p>

          <button
            className="bg-[#00674F] text-white text-lg px-4 py-2 rounded-lg hover:bg-[#0A3C30] transition"
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
