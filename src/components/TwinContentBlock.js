import React from "react";
import ContentHeader from "./ContentHeader";

function TwinContentBlock({ columns }) {
  function getFormatedText(text) {
    const formattedText = text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
    return formattedText;
  }
  return (
    <>
      <div className=" w-full md:w-1/2 p-4 justify-center items-center">
        <ContentHeader additionClass="text-left" header={columns[0].title}/>
        <img src={"./line-break.png"} className="pb-1" />
        <h2 className="text-white subtitle">{columns[0].subTitle}</h2>
        <br />
        <div className="flex items-center">
              <div className="w-[1590px] content">
                <p>{getFormatedText(columns[0].content)}</p>
              </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 p-4 justify-center items-center">
        <ContentHeader additionClass="text-left " header={columns[1].title}/>
        <img src={"./line-break.png"} className="pb-1" />
        <h2 className="text-white subtitle">{columns[1].subTitle}</h2>
        <br />
        <div className="flex items-center">
              <div className="w-[1590px] content">
                <p>{getFormatedText(columns[1].content)}</p>
              </div>
        </div>
      </div>
    </>
  );
}

export default TwinContentBlock;
