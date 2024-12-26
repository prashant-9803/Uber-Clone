import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const addresses = [
    "24B, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
    "101A, Opposite City Park, Infinity Tower, Mumbai",
    "8C, Next to Greenview Apartments, Sunrise Complex, Jaipur",
    "12F, Beside Ram's Grocery, Blue Pearl Plaza, Pune",
    "47D, Near Shanti Gardens, Valley View Estate, Kolkata",
    "33E, Next to Ramesh's Bakery, Silicon Tech Hub, Bengaluru",
  ];

  return (
    <div className="px-4 ">
      {/* this is sample data */}

      {addresses.map((address, index) => (
        <div key={index} onClick={() => {
          props.setVehiclePanelOpen(true);
          props.setPanelOpen(false);
        }}>
          <div className="flex items-center border border-white justify-start gap-2 active:border-black py-3 px-2 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-[#eeeeee] rounded-full flex items-center justify-center">
              <i className="ri-map-pin-2-fill text-lg"></i>
            </div>
            <p className="text-sm">{address}</p>
          </div>

          <div className="h-[1px] w-full rounded-full bg-[#eeeeee]"></div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
