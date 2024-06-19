import React from "react";

function GradientBlock({ floatToLeft = false, classes="" }) {
  return (
    !floatToLeft ?
      <div className={`gradient float-right right-0 ${classes}`}>
        <img src={"./gradient-bg-left.png"} className="w-[100%]" />
      </div >
      :
      <div className={`gradient float-left left-0 ${classes}`}>
        <img src={"./gradient-bg-right.png"} className="w-[100%]" />
      </div>
  );
}

export default GradientBlock;
