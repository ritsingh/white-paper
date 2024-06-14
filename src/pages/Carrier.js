import React from "react";
import CarrierSection from "../components/ShipperCarrierSection";
import { carrier } from "../constants";

function Carrier() {
  return (
    <div  className="h-90 w-full">
      <CarrierSection data={carrier}/>
    </div>
  );
}

export default Carrier;
