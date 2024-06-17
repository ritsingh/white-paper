import React from "react";

function ContentHeader({ header, additionClass, customFont = "title" }) {
  return (
    <div className={`w-full item-center  ${additionClass} ${customFont}`}>{header}</div>
  );
}

export default ContentHeader;
