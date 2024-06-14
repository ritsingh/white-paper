import React from "react";
import { esang } from "../constants";
import ContentBlock from "../components/ContentBlock";

function Esang() {
  return (
      <>
      <div className="bg-contain bg-center bg-no-repeat h-screen w-screen relative bg-[url(../public/esang-bg.png)] h-2/3 flex md:items-center about-us-header-container">
        <div className="w-250px flex flex-col ml-0 about-us-header carrie-header">
          <span className="text-white text-64px font-normal leading-80px font-Codec-Cold-Trial label-codec">{esang.title}<br/></span>
          <span className="text-24px leading-80px font-Codec-Cold-Trial hazmat-label">{esang.subTitle}</span>
        </div>
      </div> 
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={esang.header.content}/>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
        {esang.contentBlock1.map((content, index) => (
          <div className="flex flex-col w-[20%] justify-center items-center text-center">
                <div className='mb-10 text-white'>
                  <div className="flex justify-center items-center mb-4">
                    <h2 className="text-xl font-bold">{content.title}</h2>
                  </div>
                  <p>{content.content}</p>
                </div>
            </div>
        ))}
        </div> 
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
        {esang.contentBlock2.map((content, index) => (
          <div className="flex flex-col w-[20%] justify-center items-center text-center">
                <div className='mb-10 text-white'>
                  <div className="flex justify-center items-center mb-4">
                    <h2 className="text-xl font-bold">{content.title}</h2>
                  </div>
                  <p>{content.content}</p>
                </div>
            </div>
        ))}
        </div> 
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
        {esang.imageBlock.map((image, index) => (
          <img
              src={image.imageSrc}
              alt={image.imageAlt}
              className="h-full mr-10 object-cover stake-hoder-image"
            />
        ))}
        </div> 
      </div>
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={esang.content1}/>
      </div>
      </>
    );
}

export default Esang;
