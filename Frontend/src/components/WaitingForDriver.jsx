import React from "react";
import uberCar from "../assets/images/uber-car.png";

const WaitingForDriver = (props) => {
  return (
    <div>
      {/* heading */}
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            props.setWaitingForDriver(false);
          }}
        >
          <i className="ri-arrow-down-wide-line text-xl"></i>
        </div>
      </div>

      {/* vehicle card */}
      <div className="flex flex-col justify-between items-center  px-5 py-2">

        <div className="flex items-center justify-between  w-full text-right mb-4">
          <img className=" h-20" src={uberCar}></img>
          <div>
            <h2 className="text-base tracking-tighter">Sarthak Sharma</h2>
            <h4 className="text-lg font-medium tracking-tighter">MP 04 AB 1234</h4>
            <p className="text-sm text-gray-500 -mt-1">Swift Desire</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          {/* current location */}
          <div className="flex items-center gap-5 pb-2 border-b">
            <i class="ri-map-pin-user-fill text-lg"></i>{" "}
            <div>
              <h3 className="text-base">24B, Near Kapoor's Cafe</h3>
              <p className="text-sm text-gray-500">
                Sheriyans Coding School, Bhopal
              </p>
            </div>
          </div>
          {/* destination */}
          <div className="flex items-center gap-5 pb-2 border-b">
            <i class="ri-map-pin-2-fill text-lg"></i>{" "}
            <div>
              <h3 className="text-base">101A, Infinity Tower</h3>
              <p className="text-sm text-gray-500">
                Opposite City Park, Mumbai
              </p>
            </div>
          </div>{" "}
          {/* payment */}
          <div className="flex items-center gap-5 pb-2 border-b">
            <i class="ri-cash-fill text-lg"></i>
            <div>
              <h3 className="text-base">₹169.69</h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
