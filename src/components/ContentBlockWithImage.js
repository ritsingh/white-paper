import React from "react";
import ContentHeader from "./ContentHeader";

function ContentBlockWithImage({ title, text, image, classes, commonPadding = "p-4" }) {
  const formattedText = text.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));
  return (
    <>
      <ContentHeader additionClass="text-left mb-2" header={title}/>
      <div className={`w-full md:w-1/2 ${commonPadding} justify-center items-center order-2 md:order-1`}>
        <br />
        <div className="flex items-center">
              <div className="w-[1590px] content">
                <p>{formattedText}</p>
              </div>
        </div>
      </div>
      <div className={`w-full md:w-1/2 ${commonPadding} justify-center items-center order-1 md:order-2`}>
        <img
            src={image.src}
            alt={image.alt}
            className={classes ? classes : "h-full w-full object-cover" }
          />
      </div>
    </>
  );
}

export default ContentBlockWithImage;
