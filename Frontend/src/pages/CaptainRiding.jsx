import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import uberLogo from "../assets/images/uber logo.png";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LiveTracking from "../components/LiveTracking";


const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

    const location = useLocation()
    const rideData = location.state?.ride

    console.log("rideData: ", rideData)

  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
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
      <div className="h-5/6 w-screen">
        {/* <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
        ></img> */}
        <LiveTracking />
      </div>

      {/* captain details */}
      <div className="flex flex-col justify-center items-center ">
        <div>
          <i className="ri-arrow-up-wide-line text-xl "></i>
        </div>

        <div
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className=" w-full h-1/6 p-4 flex items-center justify-center gap-8 "
        >
          <h4 className="font-medium">4 KM away</h4>
          <button className=" bg-black rounded-lg text-white text-base tracking-tighter px-5 py-2">
            Complete Ride
          </button>
        </div>

        <div
          ref={finishRidePanelRef}
          className="fixed z-10 w-full bottom-0 p-3 bg-white rounded-t-2xl translate-y-full"
        >
          <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
