import React from "react";
import ContentHeader from "./ContentHeader";
import ContentBlock from "./ContentBlock";
import { TwinStepwiseImages } from "./TwinImageStepper";
import TwinContentBlock from "./TwinContentBlock";

function CarrierSection({data}) {
  return (
    <>
    <div className="bg-contain bg-center bg-no-repeat h-screen w-screen relative bg-[url(../public/carrier-bg.png)] h-2/3 flex md:items-center about-us-header-container">
      <div className="w-250px flex flex-col ml-0 about-us-header carrie-header">
        <span className="text-white text-64px font-normal leading-80px font-Codec-Cold-Trial label-codec">{data.title}<br/></span>
        <span className="text-24px leading-80px font-Codec-Cold-Trial hazmat-label">{data.subTitle}</span>
      </div>
    </div> 
    <div className="flex flex-col p-10 w-full bg-black">
      <ContentBlock text={data.header.content}/>
    </div>
    <div className="flex flex-col h-full w-full bg-black">
      <ContentHeader additionClass="text-center" header={data.challenges.title}/>
      <br/>
      <div className="flex flex-row h-full w-full bg-black">
      < TwinContentBlock columns={data.challenges.columns}/>
      </div>
    </div>
    <div className="flex flex-col h-full w-full bg-black">
      <div className="flex stretch bg-cover justify-center items-center">
        <ContentHeader additionClass="text-center" header={"Key Features"}/>
      </div>
      <br />
      <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
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
        <div className="flex flex-col w-[20%] justify-center items-center text-center">
            <div className='mb-10 text-white'>
              <div className="flex justify-center items-center mb-4">
                <h2 className="text-xl font-bold">{data.keyFeatures.info.title}</h2>
                  <img src={data.keyFeatures.info.iconSrc} alt={data.keyFeatures.info.iconAlt} className="w-8 h-8 ml-2" />
              </div>
              <p>{data.keyFeatures.info.description}</p>
            </div>
        </div>
      </div> 
    </div>
    <div className="flex flex-wrap p-10 w-full bg-black">
      <TwinStepwiseImages items={data.keyFeatures.imageBlock} />
      <br />
      <TwinStepwiseImages items={data.keyFeatures.imageBlock1} />
      <br />
    </div>
    <div className="flex flex-col h-full w-full bg-black">
      <div className="flex stretch bg-cover justify-center items-center">
        <ContentHeader additionClass="text-center" header={"Technlogy Stack"}/>
      </div>
      <br />
      <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
      <img
          src={data.keyFeatures.technologySection.image1.src}
          alt={data.keyFeatures.technologySection.image1.alt}
          className="h-full mr-10 object-cover stake-hoder-image"
        />
        <img
          src={data.keyFeatures.technologySection.image2.src}
          alt={data.keyFeatures.technologySection.image2.src}
          className="h-full mr-10 object-cover stake-hoder-image"
        />
        <img
          src={data.keyFeatures.technologySection.image3.src}
          alt={data.keyFeatures.technologySection.image3.src}
          className="h-full mr-10 object-cover stake-hoder-image"
        />
      </div> 
    </div>
    </>


  );
}

export default CarrierSection;
