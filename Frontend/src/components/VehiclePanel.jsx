import React from "react";
import uberCar from "../assets/images/uber-car.png";

const VehiclePanel = (props) => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg p-2">Choose a Vehicle</h3>
        <div
          onClick={() => {
            props.setVehiclePanelOpen(false);
          }}
        >
          <i className="ri-arrow-down-wide-line text-xl"></i>
        </div>
      </div>


      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehicleType("car");
        }}
        className="flex border rounded-lg w-full px-3 py-2 items-center justify-between my-3 active:border-black">
        <img className="h-12" src={uberCar}></img>
        <div className=" w-1/2">
          <h4 className="text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-sm text-gray-500">Affordable, compact rides</p>
        </div>
        <h2 className="text-base font-medium ">₹{props.fare.car}</h2>
      </div>


      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehicleType("auto");
        }}
        className="flex border rounded-lg w-full px-3 py-2 items-center justify-between my-3 active:border-black">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        ></img>
        <div className=" w-1/2">
          <h4 className="text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-sm text-gray-500">Doorstep affordable rides</p>
        </div>
        <h2 className="text-base font-medium ">₹{props.fare.auto}</h2>
      </div>


      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehicleType("moto");
        }}
        className="flex border rounded-lg w-full px-3 py-2 items-center justify-between my-3 active:border-black">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        ></img>
        <div className=" w-1/2">
          <h4 className="text-base">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>2
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-sm text-gray-500">Affordable motorcycle ride</p>
        </div>
        <h2 className="text-base font-medium ">₹{props.fare.moto}</h2>
      </div>


    </div>
  );
};

export default VehiclePanel;
