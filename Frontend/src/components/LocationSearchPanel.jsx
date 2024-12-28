import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanelOpen,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
  findTrip
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div className="px-4 ">
      {/* Display fetched suggestions */}

      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            if (activeField === "destination") {
              findTrip();
              setVehiclePanelOpen(true);
              setPanelOpen(false);
            }
            handleSuggestionClick(elem);
          }}
        >
          <div className="flex items-center border border-white justify-start gap-2 active:border-black py-3 px-2 rounded-lg">
            <div className="flex-shrink-0 w-10 h-10 bg-[#eeeeee] rounded-full flex items-center justify-center">
              <i className="ri-map-pin-2-fill text-lg"></i>
            </div>
            <p className="text-sm">{elem}</p>
          </div>

          <div className="h-[1px] w-full rounded-full bg-[#eeeeee]"></div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
