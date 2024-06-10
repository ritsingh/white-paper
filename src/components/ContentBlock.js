import React from "react";

function ContentBlock({ text }) {
  return (
    <div className="flex items-center">
          <div className="w-[1590px] content">
            <p>{text}</p>
          </div>
    </div>
  );
}

export default ContentBlock;
