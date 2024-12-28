import React, { useContext, useEffect } from "react";
import {CaptainDataContext} from "../context/CaptainContext";

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext);


  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center justify-start gap-3 ">
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
          ></img>
          <h4 className="text-base font-medium ">{captain?.fullname?.firstname + " " + captain?.fullname?.lastname}</h4>
        </div>

        <div>
          <h4 className="text-lg font-medium">₹295.34</h4>
          <p className="text-sm text-gray-500 -mt-1">Earned</p>
        </div>
      </div>

      <div className="flex justify-evenly gap-4 mt-6 p-3 bg-gray-50 rounded-lg items-start">
        <div className="text-center ">
          <i className="ri-time-line text-lg "></i>
          <h5 className="text-lg font-semibold">10.2</h5>
          <p className="text-xs text-gray-500">Hours Online</p>
        </div>

        <div className="text-center ">
          <i className="ri-speed-up-fill text-lg "></i>
          <h5 className="text-lg font-semibold">30 KM</h5>
          <p className="text-xs text-gray-500">Total Distance</p>
        </div>

        <div className="text-center ">
          <i className="ri-receipt-line text-lg "></i>
          <h5 className="text-lg font-semibold">20</h5>
          <p className="text-xs text-gray-500">Total Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
