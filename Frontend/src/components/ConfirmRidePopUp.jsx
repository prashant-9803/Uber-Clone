import React, { useState } from "react";
import uberCar from "../assets/images/uber-car.png";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [OTP, setOTP] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        {/* heading */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg p-2">Confirm to Start Ride</h3>
          <div
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
          >
            <i className="ri-arrow-down-wide-line text-xl"></i>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 p-3 bg-gray-100 rounded-lg">
          <div className="flex items-center gap-3 ">
            <img
              className="h-11 w-11 rounded-full object-cover"
              src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947"
            />
            <h2>Prashant Mahamuni</h2>
          </div>

          <h5 className="font-medium">2.2 KM</h5>
        </div>

        {/* vehicle card */}
        <div className="flex flex-col justify-between items-center  px-5 py-2">
          <img className="ml-10  mt-[-20px]" src={uberCar}></img>
          <div className="w-full flex flex-col gap-2">
            {/* current location */}
            <div className="flex items-center gap-5 pb-2 border-b">
              <i className="ri-map-pin-user-fill text-lg"></i>{" "}
              <div>
                <h3 className="text-base">24B, Near Kapoor's Cafe</h3>
                <p className="text-sm text-gray-500">
                  Sheriyans Coding School, Bhopal
                </p>
              </div>
            </div>
            {/* destination */}
            <div className="flex items-center gap-5 pb-2 border-b">
              <i className="ri-map-pin-2-fill text-lg"></i>{" "}
              <div>
                <h3 className="text-base">101A, Infinity Tower</h3>
                <p className="text-sm text-gray-500">
                  Opposite City Park, Mumbai
                </p>
              </div>
            </div>{" "}
            {/* payment */}
            <div className="flex items-center gap-5 pb-2 border-b">
              <i className="ri-cash-fill text-lg"></i>
              <div>
                <h3 className="text-base">₹169.69</h3>
                <p className="text-sm text-gray-500">Cash</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <input
                type="number"
                value={OTP}
                onChange={(e) => {
                  setOTP(e.target.value);
                }}
                placeholder="Enter OTP"
                className="border rounded-lg bg-[#eeeeee] px-12 py-2 text-base w-[60%] text-center font-medium mt-3"
              />

              <Link to={"/captain-riding"} className="w-full">
                <button className="w-full mt-4 bg-black rounded-lg text-white text-base tracking-tighter px-5 py-2">
                  Confirm Ride
                </button>
              </Link>

              <button
                onClick={() => {
                  props.setConfirmRidePopUpPanel(false);
                  props.setRidePopUpPanel(false);
                }}
                className="w-full rounded-lg text-gray-500 text-base tracking-tighter px-5 py-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
