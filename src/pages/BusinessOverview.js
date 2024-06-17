import React from "react";
import ContentBlock from "../components/ContentBlock";
import ContentHeader from "../components/ContentHeader";
import { bo, esang } from "../constants";

function BusinessOverview() {
  return (
    <>
      <div className="p-5 md:p-10 bg-contain bg-center bg-no-repeat h-screen w-screen relative bg-[url(../public/bo-bg.png)] h-2/3 flex md:items-center bo-bg justify-center md:justify-start">
        <div className="flex md:flex-row items-center ml-0 pt-[20%] md:pt-0 flex-col ">
          <span className="text-white text-64px font-bold leading-80px gradient-font label-codec md:w-[50%] w-full text-center md:text-left ">{bo.title}<br /></span>
          <div className="flex flex-col md:w-[50%] w-full items-center md:items-start md:mt-0 mt-[10%]">
            <span className="md:text-6xl text-4xl text-md leading-80px font-Codec-Cold-Trial ">{bo.subTitle}</span>
            <img
              src={bo.imageSrcArrow}
              alt={bo.imageAlt}
              className="md:h-full bg-cover w-full"
            />
            <h2 className="text-md text-center w-full pb-1 subtitle">{bo.visionCaption}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={bo.header.content} />
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.marketoppotunities.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-full pb-1">{bo.marketoppotunities.text}</h2>
        <br />
        <div className="flex h-full relative w-full md:items-center stake-hoder-image-container justify-center md:p-10 px-5">
          <img
            src={bo.marketoppotunities.imageSrc}
            alt={bo.marketoppotunities.imageAlt}
            className="md:h-[90vh] h-[40vh]  object-cover stake-hoder-image bo-img"
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
      <div className="flex flex-col h-full w-full bg-black items-center">
        <ContentHeader additionClass="text-center" header={bo.contentBlock1.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-[70%] pb-1 subtitle">{bo.contentBlock1.description}</h2>
        <div className="flex h-full relative w-full flex-col md:flex-row md:items-center stake-hoder-image-container justify-around p-10">
          {bo.contentBlock1.blocks.map((content, index) => (
            <div className="flex flex-col md:w-[27%] w-full justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-14 h-14 ml-[10%]" />
                </div>
                <img src={"./line-break.png"} className="pb-1" />
                <p>{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black items-center">
        <ContentHeader additionClass="text-center" header={bo.contentBlock2.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-[70%] pb-1 subtitle">{bo.contentBlock2.description}</h2>
        <div className="flex h-full relative w-full flex-col md:flex-row  md:items-center stake-hoder-image-container justify-around p-10">
          {bo.contentBlock2.blocks.map((content, index) => (
            <div className="flex flex-col md:w-[27%] w-full justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-14 h-14 ml-[10%]" />
                </div>
                <img src={"./line-break.png"} className="pb-1" />
                <p>{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black items-center items-center">
        <ContentHeader additionClass="text-center" header={bo.contentBlock4.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-[70%] pb-1 subtitle">{bo.contentBlock4.description}</h2>
        <div className="flex h-full flex-col relative w-full  md:items-center stake-hoder-image-container justify-around p-10">
          {bo.contentBlock4.blocks.map((content, index) => (
            <div className={`flex w-full ${index == 1 ? "justify-center" : index == 2 ? "justify-end" : ""}`}>
              <div className="flex flex-col md:w-[38%] w-full justify-center items-center text-left">
                <div className='mb-10 text-white'>
                  <div className="flex justify-left items-center">
                    <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                    <img src={content.iconSrc} alt={content.iconAlt} className="w-14 h-14 ml-[10%]" />
                  </div>
                  <img src={"./line-break.png"} className="pb-1" />
                  <p>{content.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.longTermVision.title} />
        <div className="flex flex-wrap p-10 items-center w-full bg-black">
          <div className="md:w-1/2 w-full order-2 md:order-1 ">
            {bo.longTermVision.content.map((content, index) => (
              <div className="w-full p-4 justify-center items-center">
                <div className="flex">
                  <h2 className="text-xl md:w-[190px] w-full font-bold">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-14 h-14 ml-[10%]" />
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
          <div className=" w-full md:w-1/2 p-0 md:p-4 justify-center items-center order-1 md:order-2">
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
        {/* <br /> */}
        <div className="flex h-full relative w-full md:items-center flex-col md:flex-row stake-hoder-image-container justify-around p-10">
          {bo.contentBlock3.blocks.map((content, index) => (
            <div className="flex flex-col md:w-[27%] w-full justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="text-xl font-bold md:w-[190px] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-14 h-14 ml-[10%]" />
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
        {/* <br /> */}
        <ContentBlock text={bo.competitiveAnalysis.text} />
        <br />
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.businessModel.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-full pb-1 subtitle">{bo.businessModel.description}</h2>
        <div className="flex h-full relative w-full md:items-center stake-hoder-image-container justify-around p-10">
          <img
            src={bo.businessModel.imageSrc}
            alt={bo.businessModel.imageAlt}
            className="h-full bg-cover md:w-[70%] w-full"
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-black">
        <ContentHeader additionClass="text-center" header={bo.eusotripAdvantage.title} />
        {/* <br /> */}
        <div className="flex h-full relative w-full md:items-center stake-hoder-image-container justify-center p-10">
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
        <div className="flex flex-col md:flex-row h-full relative w-full md:items-center stake-hoder-image-container justify-around p-5 md:p-10">
          {bo.financialProjection.imageBlock.map((image, index) => (
            <img
              src={image.imageSrc}
              alt={image.imageAlt}
              className="md:h-[70vh] md:mt-0 mt-2"
            />
          ))}
        </div>
        <div className="flex h-full flex-col md:flex-row relative w-full md:items-center stake-hoder-image-container justify-around p-5 md:p-10">
          {bo.financialProjection.imageBlock1.map((image, index) => (
            <img
              src={image.imageSrc}
              alt={image.imageAlt}
              className="md:h-[70vh] md:mt-0 mt-2"
            />
          ))}
        </div>
        <div className="flex h-full flex-col relative w-full md:items-center stake-hoder-image-container justify-around p-5 md:p-10">
          <h2 className="text-xl font-bold text-center w-full pb-1">Subscription revenue growth over 5 years</h2>
          <img
            src={bo.financialProjection.imageBlock2[0].imageSrc}
            alt={bo.financialProjection.imageBlock2[0].imageAlt}
            className="md:h-[70vh]"
          />
        </div>
        <div className="flex h-full flex-col relative w-full md:items-center stake-hoder-image-container justify-around p-10">
          <ContentHeader additionClass="text-center mb-3" header={bo.milestones.title} />
          <img
            src={bo.milestones.imageSrc}
            alt={bo.milestones.imageAlt}
            className="h-[70vh] hidden lg:flex xl:flex"
          />
          <img
            src={bo.milestones.imageSrcMobile}
            alt={bo.milestones.imageAlt}
            className="flex lg:hidden xl:hidden "
          />
        </div>
      </div>
    </>
  );
}

export default BusinessOverview;
