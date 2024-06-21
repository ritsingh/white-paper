import React from "react";
import ContentHeader from "./ContentHeader";

function TwinContentBlock({ columns }) {

  function getFormatedText(text) {
    const formattedText = text.split('\n').map((item, index) => (

      item.split(":").length > 1 ? 
       <React.Fragment key={index}>
          <b className="text-white">{item.split(":")[0]}</b>: {item.split(":")[1]}
          <br />
        </React.Fragment>
       : <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>

      // item.split(":").map((block, key) =>
      //   <React.Fragment key={index}>
      //     <b>{block[0]}</b> {block[1]}
      //     <br />
      //   </React.Fragment>
      // )
    ));
    return formattedText;
  }
  return (
    <>
      <div className=" w-full md:w-[48%] p-4 justify-center items-center">
        <ContentHeader additionClass="text-left" customFont="carrie-title-font" header={columns[0].title} />
        <img src={"./line-break.png"} className="pb-1" />
        <h2 className="text-white subtitle-font">{columns[0].subTitle}</h2>
        <br />
        <div className="flex items-center">
          <div className="w-[1590px] content light-color">
            <p>{getFormatedText(columns[0].content)}</p>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[48%] p-4 justify-center items-center">
        <ContentHeader additionClass="text-left " customFont="carrie-title-font" header={columns[1].title} />
        <img src={"./line-break.png"} className="pb-1" />
        <h2 className="text-white subtitle-font">{columns[1].subTitle}</h2>
        <br />
        <div className="flex items-center">
          <div className="w-[1590px] content light-color">
            <p>{getFormatedText(columns[1].content)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwinContentBlock;
