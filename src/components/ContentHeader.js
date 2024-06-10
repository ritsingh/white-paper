import React from "react";

function ContentHeader({ header, additionClass }) {
  return (
    <div className={`w-full item-center title ${additionClass}`}>{header}</div>
  );
}

export default ContentHeader;
