import React from "react";

function ContentBlock({ text, w= "w-[1590px]" }) {
  return (
    <div className="flex items-center w-full">
          <div className={`${w} content`}>
            <p>{text}</p>
          </div>
    </div>
  );
}

export default ContentBlock;
