import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="tracking-tight">
      <div className=" bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-screen  flex flex-col justify-between pt-4 w-full">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-2xl tracking-tighter">Get Started with Uber</h2>
          <Link to={"/login"} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
