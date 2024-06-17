import React from "react";
import ContentHeader from "./ContentHeader";
import ContentBlock from "./ContentBlock";
import { TwinStepwiseImages } from "./TwinImageStepper";
import TwinContentBlock from "./TwinContentBlock";
import { CarouselTransition } from "./Carousel";

function CarrierSection({ data, customBgClass = "about-us-header-container", bg = "bg-[url(../public/carrier-bg.png)]", bgText = "carrie-header w-[530px]", isCarrier=false }) {
  return (
    <>
      <div className={`bg-contain bg-center bg-no-repeat h-screen w-screen relative ${bg} h-2/3 flex md:items-center ${customBgClass}`}>
        <div className={`p-10  flex flex-col ml-0 about-us-header ${bgText}`}>
          <span className="text-white text-64px font-bold leading-80px gradient-font font-Codec-Cold-Trial label-codec">{data.title}<br /></span>
          <span className="md:text-3xl text-sm leading-80px font-Codec-Cold-Trial">{data.subTitle}</span>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={data.header.content} />
      </div>
      <div className="flex flex-col h-full w-full bg-black md:mt-[5rem] mt-2">
        <ContentHeader additionClass="text-center " header={data.challenges.title} />
        <br />
        <div className="flex md:flex-row flex-col h-full w-full bg-black md:p-10 px-8">
          < TwinContentBlock columns={data.challenges.columns} />
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <div className="flex stretch bg-cover justify-center items-center">
          <ContentHeader additionClass="text-center" header={"Key Features"} />
        </div>
        <br />
      </div>
      <div className="flex flex-wrap p-10 w-full bg-black">
        <TwinStepwiseImages items={data.keyFeatures.imageBlock0} classes={isCarrier ? "order-2 md:order-2 md:mt-[5rem] mt-[2rem]" : "md:mt-[5rem] mt-[2rem]" } />
        <br />
        <TwinStepwiseImages items={data.keyFeatures.imageBlock} classes={isCarrier ? "order-3 md:order-3 md:mt-[5rem] mt-[2rem]" : " md:mt-[5rem] mt-[2rem]" } />
        <br />
        {/* <TwinStepwiseImages items={data.keyFeatures.imageBlock1} /> */}
        {/* <div className="flex flex-col md:flex-row h-full relative w-full md:items-center about-us-header-container h-auto md:h-[85vh] stake-hoder-image-container justify-center p-10"> */}
        <div className={`flex flex-col md:flex-row h-full relative w-full md:items-center stake-hoder-image-container justify-evenly ${isCarrier ? "order-1 md:order-1" : "" }}`}>
          <div class="hidden lg:flex xl:flex">
            <img
              src={data.keyFeatures.info.image1.src}
              alt={data.keyFeatures.info.image1.alt}
              className="h-full mr-10 object-cover stake-hoder-image"
            />
            <img
              src={data.keyFeatures.info.image2.src}
              alt={data.keyFeatures.info.image2.src}
              className="h-full mr-10 object-cover stake-hoder-image"
            />
          </div>
          <CarouselTransition
            classes="p-0 h-[90vh]"
            items={
              [
                <img
                  src={data.keyFeatures.info.image1.src}
                  alt={data.keyFeatures.info.image1.alt}
                  className="h-[70vh] m-auto"
                />,
                <img
                  src={data.keyFeatures.info.image2.src}
                  alt={data.keyFeatures.info.image2.src}
                  className="h-[70vh] m-auto"
                />
              ]
            }
          />
          <div className="flex flex-col md:w-[30%] w-full justify-center items-center text-center">
            <div className='mb-10 text-white text-left'>
              <div className="flex justify-center items-center text-left mb-4">
                <h2 className="text-3xl text-xl font-bold">{data.keyFeatures.info.title}</h2>
                <img src={data.keyFeatures.info.iconSrc} alt={data.keyFeatures.info.iconAlt} className="w-20 h-20 ml-3 p-1" />
              </div>
              <img src={"./line-break.png"} className="pb-1 w-[55%]" />
              <p className="content-color">{data.keyFeatures.info.description}</p>
            </div>
          </div>
        </div>

        <br />
      </div>
      <div className="flex flex-col h-full w-full bg-black md:mt-[5rem] mt-[2rem] ">
        <div className="flex stretch bg-cover justify-center items-center">
          <ContentHeader additionClass="text-center" header={"Technlogy Stack"} />
        </div>
        <br />
        <div className="hidden lg:flex xl:flex  flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
          <img
            src={data.keyFeatures.technologySection.image1.src}
            alt={data.keyFeatures.technologySection.image1.alt}
            className="h-full mr-10 object-cover stake-hoder-image-tech"
          />
          <img
            src={data.keyFeatures.technologySection.image2.src}
            alt={data.keyFeatures.technologySection.image2.alt}
            className="h-full mr-10 object-cover stake-hoder-image-tech"
          />
          <img
            src={data.keyFeatures.technologySection.image3.src}
            alt={data.keyFeatures.technologySection.image3.alt}
            className="h-full mr-10 object-cover stake-hoder-image-tech"
          />
        </div>
        <div className="flex lg:hidden xl:hidden p-10">
          <img
            src={data.keyFeatures.technologySection.mobileImg.src}
            alt={data.keyFeatures.technologySection.mobileImg.alt}
            className="h-full object-cover stake-hoder-image-tech"
          />
        </div>
      </div>
    </>


  );
}

export default CarrierSection;
