import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password,
    });
    console.log(userData);
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
          <h3 className="text-lg mb-2 ">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            placeholder="Password"
          />

          <button className="bg-[#111] hover:bg-gray-800 duration-300 text-white font-semibold mb-3 px-4 py-2 rounded w-full  tracking-tight">
            Login
          </button>

          <p className="text-center text-sm mb-3 text-gray-400 font-light">
            Want to Join as Captain?{" "}
            <Link to={"/captain-signup"} className="text-blue-500 ">
              Create New Account
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

export default CaptainLogin;
