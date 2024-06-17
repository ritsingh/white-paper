import React from "react";
import { esang } from "../constants";
import ContentBlock from "../components/ContentBlock";
import ContentHeader from "../components/ContentHeader";
import { CarouselTransition } from "../components/Carousel";

function Esang() {
  return (
    <>
      <div className="bg-contain bg-center bg-no-repeat h-screen w-screen relative esang bg-[url(../public/esang-bg.png)] h-2/3 flex md:items-center">
        <div className="w-250px flex flex-col ml-0 about-us-header carrie-header p-10">
          <span className="text-white text-64px font-bold leading-80px gradient-font font-Codec-Cold-Trial label-codec">{esang.title}<br /></span>
          <span className="md:text-3xl text-sm leading-80px font-Codec-Cold-Trial">{esang.subTitle}</span>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={esang.header.content} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col h-full w-full bg-black order-1 md:order-1 ">
          <div className="flex h-full relative w-full flex-col md:flex-row md:items-start about-us-header-container stake-hoder-image-container justify-around p-10">
            {esang.contentBlock1.map((content, index) => (
              <div className="flex flex-col md:w-[32%] w-[100%] justify-center items-center text-left">
                <div className='mb-10 text-white'>
                  <div className="flex justify-left items-center mb-2">
                    <h2 className="subtitle-font font-bold md:w-[50%] w-full">{content.title}</h2>
                  </div>
                  <img src={"./line-break.png"} className="pb-1  w-[55%]" />
                  <p className="content-color">{content.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-black order-3 md:order-2">
          <div className="flex h-full relative w-full md:items-start mt-0 flex-col md:flex-row about-us-header-container stake-hoder-image-container justify-around p-10">
            {esang.contentBlock2.map((content, index) => (
              <div className="flex flex-col md:w-[32%] w-[100%] justify-center items-center text-left">
                <div className='mb-10 text-white'>
                  <div className="flex justify-left items-center mb-2">
                    <h2 className="subtitle-font font-bold md:w-[70%] w-full">{content.title}</h2>
                  </div>
                  <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                  <p className="content-color" >{content.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-black order-2 md:order-3">
          <div className="h-full relative w-full hidden lg:flex xl:flex  md:items-center md:flex-row items-center flex-col about-us-header-container stake-hoder-image-container justify-evenly p-10">
            {esang.imageBlock.map((image, index) => (
              <img
                src={image.imageSrc}
                alt={image.imageAlt}
                className="h-full mr-10 object-cover w-[50%] md:w-auto stake-hoder-image"
              />
            ))}
          </div>
          <CarouselTransition
            classes={"pt-12 px-10 pb-0 md:pb-5"}
            items={
              esang.imageBlock.map((image) =>
                <img
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className="h-[70vh] m-auto"
                />
              )
            }
          />
        </div>

      </div>
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={esang.content2} />
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <div className="flex h-full relative w-full md:items-start about-us-header-container stake-hoder-image-container justify-around p-10">
          <div className="flex flex-col justify-center items-center text-left">
            <div className='mb-10 text-white'>
              <div className="flex justify-left items-center mb-2">
                <ContentHeader additionClass="text-center" header={esang.esangDesignBlock.header} />
              </div>
              <img src={"./esang-techstack.png"} className="hidden lg:flex xl:flex p-10 h-[100vh]" />
              <img src={"./Esang-mobile.png"} className="lg:relative lg:hidden w-full  p-10 h-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Esang;
