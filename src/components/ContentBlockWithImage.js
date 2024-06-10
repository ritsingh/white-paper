import React from "react";
import ContentHeader from "./ContentHeader";

function ContentBlockWithImage({ title, text, image }) {
  const formattedText = text.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));
  return (
    <>
      <div className=" w-full md:w-1/2 p-4 justify-center items-center">
        <ContentHeader additionClass="text-left" header={title}/>
        <br />
        <div className="flex items-center">
              <div className="w-[1590px] content">
                <p>{formattedText}</p>
              </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 p-4 justify-center items-center">
        <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
      </div>
    </>
  );
}

export default ContentBlockWithImage;
