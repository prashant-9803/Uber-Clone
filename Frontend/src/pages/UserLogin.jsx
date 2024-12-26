import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200) {
      const data = response.data;
      setUser(data.user)
      localStorage.setItem("token", data.token)
      navigate("/home")
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen ">
      <div className=" tracking-tight">
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base mb-2 ">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base "
            placeholder="email@example.com"
          />

          <h3 className="text-base mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base "
            required
            placeholder="Password"
          />

          <button className="bg-[#111] hover:bg-gray-800 duration-300 text-white font-semibold mb-3 px-4 py-2 rounded w-full  tracking-tight">
            Login
          </button>

          <p className="text-center text-sm mb-3 text-gray-400 font-light">
            Join a fleet?{" "}
            <Link to={"/captain-signup"} className="text-blue-500 ">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-xs opacity-40 leading-tight ">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provider.
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
