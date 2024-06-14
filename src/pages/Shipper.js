import React from "react";
import CarrierSection from "../components/ShipperCarrierSection";
import { shipper } from "../constants";

function Shipper() {
  return (
    <div  className="h-90 w-full">
      <CarrierSection data={shipper}/>
    </div>
  );
}

export default Shipper;
