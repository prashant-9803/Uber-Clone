import React from "react";
import { Link, useNavigate } from "react-router-dom";
import uberCar from "../assets/images/uber-car.png";
import axios from "axios";

const FinishRide = (props) => {
  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
      {
        rideId: props.ride._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      navigate("/captain-home");
    }
  }

  return (
    <div>
      <div>
        {/* heading */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg p-2">Finish this ride</h3>
          <div
            onClick={() => {
              props.setFinishRidePanel(false);
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
            <h2>
              {props.ride?.user.fullname.firstname +
                " " +
                props.ride?.user.fullname.lastname}
            </h2>
          </div>

          <h5 className="font-medium">2.2 KM</h5>
        </div>

        {/* vehicle card */}
        <div className="flex flex-col justify-between items-center  px-5 py-2">
          <img className="ml-10  mt-[-30px]" src={uberCar}></img>
          <div className="w-full flex flex-col gap-2">
            {/* current location */}
            <div className="flex items-center gap-5 pb-2 border-b">
              <i className="ri-map-pin-user-fill text-lg"></i>{" "}
              <div>
                <h3 className="text-base">{props.ride?.pickup}</h3>
                {/* <p className="text-sm text-gray-500">
                  Sheriyans Coding School, Bhopal
                </p> */}
              </div>
            </div>
            {/* destination */}
            <div className="flex items-center gap-5 pb-2 border-b">
              <i className="ri-map-pin-2-fill text-lg"></i>{" "}
              <div>
                <h3 className="text-base">{props.ride?.destination}</h3>
                {/* <p className="text-sm text-gray-500">
                  Opposite City Park, Mumbai
                </p> */}
              </div>
            </div>{" "}
            {/* payment */}
            <div className="flex items-center gap-5 pb-2 border-b">
              <i className="ri-cash-fill text-lg"></i>
              <div>
                <h3 className="text-base">₹{props.ride?.fare}</h3>
                <p className="text-sm text-gray-500">Cash</p>
              </div>
            </div>
          </div>

          <form>
            <input></input>
          </form>

          <div className="w-full">
            <button
              onClick={endRide}
              className="w-full bg-black rounded-lg text-white text-base tracking-tighter px-5 py-2"
            >
              Finish Ride
            </button>

            <p className="text-gray-400 text-xs tracking-tighter mt-4">
              Click on finish ride button if you have completed the payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
