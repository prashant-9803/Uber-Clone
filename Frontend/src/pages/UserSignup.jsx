import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext";

const UserSignup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    };
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    console.log(response)

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user)
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("")
    setLastName("")
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
          <h3 className="text-base mb-2 ">What's your Name</h3>
          <div className="flex gap-5">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border text-base placeholder:text-base w-1/2"
              placeholder="First Name"
            />

            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border text-base placeholder:text-base w-1/2"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-base mb-2 ">What's your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base "
            placeholder="email@example.com"
          />

          <h3 className="text-base mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base "
            required
            placeholder="Password"
          />

          <button className="bg-[#111] hover:bg-gray-800 duration-300 text-white mb-3 px-4 py-2 rounded w-full  tracking-tight">
            Create Account
          </button>

          <p className="text-center text-sm mb-3 text-gray-400 font-light">
            Already have account?{" "}
            <Link to={"/login"} className="text-blue-500 ">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-xs opacity-50">This site is protected by reCAPTCHA and the <span className="underline"> Google Privacy Policy</span> and Terms of Service apply.</p>
      </div>
    </div>
  );
};

export default UserSignup;
