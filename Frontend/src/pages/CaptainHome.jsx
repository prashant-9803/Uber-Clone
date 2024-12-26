import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import uberCar from "../assets/images/uber-car.png";
import uberLogo from "../assets/images/uber logo.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";


const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  
  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopUpRef = useRef(null)
  
  useGSAP(
    function () {
      if (ridePopUpPanel) {    
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {    
        gsap.to(confirmRidePopUpRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
  );


  return (
    <div className="h-screen ">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src={uberLogo} />
        <Link to={"/captain-login"}>
          <div className=" h-12 bg-white w-12 flex items-center justify-center rounded-full ">
            <i className="ri-logout-box-line text-lg"></i>{" "}
          </div>
        </Link>
      </div>

      {/* map */}
      <div className="h-4/6 w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
        ></img>
      </div>

      {/* captain details */}
      <div className="h-2/6 p-4">
          <CaptainDetails />
      </div>

      <div
      ref={ridePopUpPanelRef}
        className="fixed z-10 w-full bottom-0 p-3 bg-white rounded-t-2xl translate-y-full">
          <RidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>


      <div
      ref={confirmRidePopUpRef}
        className="fixed h-screen z-10 w-full bottom-0 p-3 bg-white rounded-t-2xl translate-y-full">
          <ConfirmRidePopUp setRidePopUpPanel={setRidePopUpPanel}  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div> 
    </div>
  );
};

export default CaptainHome;
