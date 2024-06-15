import React from "react";
import ContentBlock from "../components/ContentBlock";
import ContentHeader from "../components/ContentHeader";
import { bo, esang } from "../constants";

function BusinessOverview() {
  return (
    <>
      <div className="p-10 bg-contain bg-center bg-no-repeat h-screen w-screen relative bg-[url(../public/bo-bg.png)] h-2/3 flex md:items-center about-us-header-container">
        <div className="w-250px flex flex-col ml-0 about-us-header carrie-header">
          <span className="text-white text-64px font-normal leading-80px font-Codec-Cold-Trial label-codec">{bo.title}<br /></span>
          <span className="text-24px leading-80px font-Codec-Cold-Trial hazmat-label">{bo.subTitle}</span>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={bo.header.content} />
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.marketoppotunities.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
          <img
            src={bo.marketoppotunities.imageSrc}
            alt={bo.marketoppotunities.imageAlt}
            className="h-full mr-10 object-cover stake-hoder-image"
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black p-10">
        <ContentHeader additionClass="text-center" header={bo.marketoppotunities.contentTitle} />
        <br />
        <ContentBlock text={bo.marketoppotunities.contentText} />
        <br />
      </div>
      <div className="flex flex-col h-full w-full bg-black p-10">
        <ContentHeader additionClass="text-center" header={bo.painPoints.title} />
        <br />
        <ContentBlock text={bo.painPoints.content} />
        <br />
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.contentBlock1.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-around p-10">
          {bo.contentBlock1.blocks.map((content, index) => (
            <div className="flex flex-col w-[27%] justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-8 h-8 ml-5" />
                </div>
                <img src={"./line-break.png"} className="pb-1" />
                <p>{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.contentBlock2.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-around p-10">
          {bo.contentBlock2.blocks.map((content, index) => (
            <div className="flex flex-col w-[27%] justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-8 h-8 ml-5" />
                </div>
                <img src={"./line-break.png"} className="pb-1" />
                <p>{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.longTermVision.title} />
        <br />
        <div className="flex flex-wrap p-10 items-center w-full bg-black">
          <div className="w-1/2">
            {bo.longTermVision.content.map((content, index) => (
              <div className=" w-1/2 md:w-full p-4 justify-center items-center">
                <div className="flex">
                  <h2 className="text-xl md:w-[190px] w-full">{content.title}</h2>
                  {/* <ContentHeader additionClass="text-left" header={content.title}/> */}
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-12 h-12 ml-10" />
                </div>
                <img src={"./line-break.png"} className="pb-1" />
                <br />
                <div className="flex items-center">
                  <div className="w-[1590px] content">
                    <p>{content.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full md:w-1/2 p-4 justify-center items-center">
            <img
              src={bo.longTermVision.imageBlock.src}
              alt={bo.longTermVision.imageBlock.alt}
              className="h-full w-auto h-[90vh]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.contentBlock3.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-around p-10">
          {bo.contentBlock3.blocks.map((content, index) => (
            <div className="flex flex-col w-[27%] justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-8 h-8 ml-5" />
                </div>
                <img src={"./line-break.png"} className="pb-1" />
                <p>{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black p-10">
        <ContentHeader additionClass="text-center" header={bo.competitiveAnalysis.title} />
        <br />
        <ContentBlock text={bo.competitiveAnalysis.text} />
        <br />
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.businessModel.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-around p-10">
          <img
            src={bo.businessModel.imageSrc}
            alt={bo.businessModel.imageAlt}
            className="h-full bg-cover w-[70%]"
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.eusotripAdvantage.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
          <img
            src={bo.eusotripAdvantage.imageSrc}
            alt={bo.eusotripAdvantage.imageAlt}
            className="h-full"
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.financialProjection.title} />
        <br />
        <div className="flex h-full relative w-full md:items-center about-us-header-container stake-hoder-image-container justify-around p-10">
          {bo.financialProjection.imageBlock.map((image, index) => (
            <img
              src={image.imageSrc}
              alt={image.imageAlt}
              className="h-[70vh]"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BusinessOverview;
