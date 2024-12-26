import React from "react";
import uberCar from "../assets/images/uber-car.png";

const ConfirmRide = (props) => {
  return (
    <div>
      {/* heading */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg p-2">Confirm your Ride</h3>
        <div
          onClick={() => {
            props.setConfirmRidePanel(false);
          }}
        >
          <i className="ri-arrow-down-wide-line text-xl"></i>
        </div>
      </div>

      {/* vehicle card */}
      <div className="flex flex-col justify-between items-center  px-5 py-2">
        <img className="ml-10  mt-[-20px]" src={uberCar}></img>
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
              <p className="text-sm text-gray-500">
                Cash
              </p>
            </div>
          </div>

        </div>
        <button onClick={() => {
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
          props.setVehiclePanelOpen(false)
        }} className="w-full mt-4 bg-black rounded-lg text-white text-base tracking-tighter px-5 py-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
