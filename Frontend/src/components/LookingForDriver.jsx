import React from 'react'
import uberCar from "../assets/images/uber-car.png";

const images = {
  car: uberCar,
  auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
  moto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
};

const LookingForDriver = (props) => {
    return (
        <div>
          {/* heading */}
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-lg p-2">Looking for a driver...</h3>
            <div
              onClick={() => {
                props.setVehicleFound(false);
              }}
            >
              <i className="ri-arrow-down-wide-line text-xl"></i>
            </div>
          </div>
    
          {/* vehicle card */}
          <div className="flex flex-col justify-between items-center  px-5 py-2">
          <img className=" h-32 p-2 " src={images[props.vehicleType]}/>            
          <div className="w-full flex flex-col gap-2">
              {/* current location */}
              <div className="flex items-center gap-5 pb-2 border-b">
                <i class="ri-map-pin-user-fill text-lg"></i>{" "}
                <div>
                  <h3 className="text-base">{props.pickup}</h3>
                  {/* <p className="text-sm text-gray-500">
                  Sheriyans Coding School, Bhopal
                  </p> */}
                </div>
              </div>
    
              {/* destination */}
              <div className="flex items-center gap-5 pb-2 border-b">
                <i class="ri-map-pin-2-fill text-lg"></i>{" "}
                <div>
                  <h3 className="text-base">{props.destination}</h3>
                  {/* <p className="text-sm text-gray-500">
                  Opposite City Park, Mumbai
                  </p> */}
                </div>
              </div>{" "}
    
              {/* payment */}
              <div className="flex items-center gap-5 pb-2 border-b">
              <i class="ri-cash-fill text-lg"></i>
                <div>
                  <h3 className="text-base">{props.fare[props.vehicleType]}</h3>
                  <p className="text-sm text-gray-500">
                    Cash
                  </p>
                </div>
              </div>
    
            </div>

          </div>
        </div>
      );
}

export default LookingForDriver