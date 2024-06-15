import React from "react";
import CarrierSection from "../components/ShipperCarrierSection";
import { shipper } from "../constants";

function Shipper() {
  return (
    <div  className="h-90 w-full">
      <CarrierSection data={shipper} bgText={"carrie-header-text"} customBgClass = {"shipper-bg"} bg={"bg-[url(../public/shipper-bg.png)]"} />
    </div>
  );
}

export default Shipper;
