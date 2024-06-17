import React from "react";

function ContentBlock({ text, w= "w-[1590px] content" }) {
  return (
    <div className="flex items-center w-full">
          <div className={`${w} `}>
            <p>{text}</p>
          </div>
    </div>
  );
}

export default ContentBlock;
