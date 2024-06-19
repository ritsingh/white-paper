import React from "react";
import ContentHeader from "./ContentHeader";
import { aboutUs } from "../constants";
import ContentBlock from "./ContentBlock";
import { CarouselTransition } from "./Carousel";
import ContentBlockWithImage from "./ContentBlockWithImage";
import { StepwiseImages } from "./ImageStepper";
import { TwinStepwiseImages } from "./TwinImageStepper";
import GradientBlock from "./GradientBlock";

function AboutUs() {
  return (
    <>
      <div className="bg-center bg-no-repeat w-full h-[110vh] relative bg-[url(../public/about-us-bg.png)] h-2/3 flex md:items-center about-us-header-container">
        {/* <div className="w-653px   about-us-header"> */}
        <div className="p-10 m-0 about-us-header">
          <div className="text-white text-64px font-light leading-80px font-Codec-Cold-Trial tracking-tight label-codec">Brand New <br />Digital Map For<br /></div>
          <div className="text-6xl gradient-font font-bold leading-80px font-Codec-Cold-Trial tracking-tight label-codec">HazMat Logistics</div>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full bg-black executiveSumary">
        <ContentHeader header={aboutUs.executiveSumary.title} />
        <br />
        <ContentBlock text={aboutUs.executiveSumary.content1} />
        <br />
        <ContentBlock text={aboutUs.executiveSumary.content2} />
      </div>
      <div className="flex flex-col h-full w-full bg-black pt-0 md:pt-[5rem]">
        <div className="flex stretch bg-cover justify-center items-center">
          <ContentHeader additionClass="text-center" header={aboutUs.stakeholders.title} />
        </div>
        <h2 className="text-center font-Codec-Cold-Trial subtitle text-white-60 z-10 px-4 md:px-10">EusoTrip offers targeted solutions for each key stakeholder </h2>
        <br />
        <div className=" bg-center bg-no-repeat h-full relative flex stake-hoder-image-bg bg-[url(../public/stakeholders-bg.png)] w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
          <div className=" hidden lg:flex xl:flex flex justify-between w-[90%] lg:w-full">
            <img
              src="./stakeholders-1.png"
              alt="image 1"
              className="stake-hoder-image lg:h-[90vh]"
            />
            <img
              src="./stakeholders-2.png"
              alt="image 2"
              className="stake-hoder-image  lg:h-[90vh]"
            />
            <img
              src="./stakeholders-3.png"
              alt="image 3"
              className="stake-hoder-image  lg:h-[90vh]"
            />
          </div>

          {/* Responsive Carousel */}
          <CarouselTransition
            classes={'md:p-10 p-0'}
            items={[<img
              src="./stakeholders-1.png"
              alt="image 1"
              className="h-[70vh] m-auto"
            />,
            <img
              src="./stakeholders-2.png"
              alt="image 2"
              className="h-[70vh] m-auto"
            />,
            <img
              src="./stakeholders-3.png"
              alt="image 3"
              className="h-[70vh] m-auto"
            />]} />
        </div>


        <div className="px-10 md:py-10 z-10 md:mt-[-15%] mt-0">
          <br />
          <ContentBlock text={aboutUs.stakeholders.content1} />
          <br />
          <ContentBlock text={aboutUs.stakeholders.content2} />

        </div>
      </div>
      <GradientBlock floatToLeft classes="gradient-x " />

      <div className="flex flex-wrap p-10 w-full items-start relative z-10">
        <ContentBlockWithImage
          title={aboutUs.introduction.title}
          text={`${aboutUs.introduction.content1}\n\n${aboutUs.introduction.content2}`}
          image={aboutUs.introduction.imageBlock}
          classes={"w-full intro-bg"}
          commonPadding={"p-0"}
        />
      </div>
      <div className="flex flex-wrap p-10 w-full relative z-10">
        <ContentHeader additionClass="text-center" header={aboutUs.marketProblems.title} />
        <br />
        <StepwiseImages images={aboutUs.marketProblems.imageBlock1} />
        <StepwiseImages images={aboutUs.marketProblems.imageBlock2} />
      </div>
      <GradientBlock floatToLeft classes="gradient-x  md:mt-[-30%]" />
      <div className="flex flex-wrap p-10 w-full relative">
        <ContentHeader additionClass="text-center" header={aboutUs.whatWeHave.title} />
        <ContentBlock w={"w-[100%] text-center subtitle"} text={aboutUs.whatWeHave.content2} />
        <br />
        <TwinStepwiseImages items={aboutUs.whatWeHave.imageBlock} />
        <br />
        <GradientBlock floatToLeft classes={"gradient-x top-[30%]"} />
        <div className="flex flex-row justify-start flex-wrap md:my-0 my-6 h-full relative z-10 w-full">
          <div class="crop-container w-[100%] md:w-[70%] ">
            <img
              src={aboutUs.whatWeHave.imageBlock2.src}
              alt={aboutUs.whatWeHave.imageBlock2.alt}
              className="object-cover"
            />
          </div>
          <div className="md:w-[30%] h-full mt-10">
            <div className="text-white">
              <div className="flex items-center">
                <div className='flex flex-col'>
                  <h2 className="md:text-3xl text-xl font-bold pb-1 w-full md:w-[90%]">{aboutUs.whatWeHave.imageBlock2.title}</h2>
                  <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                </div>
                {/* <h2 className="text-white text-3xl font-bold">{aboutUs.whatWeHave.imageBlock2.title}</h2> */}
                <img src={aboutUs.whatWeHave.imageBlock2.iconSrc} alt={aboutUs.whatWeHave.imageBlock2.iconAlt} className="w-20 h-20 ml-3 p-1" />
              </div>
              <p className='content-color'>{aboutUs.whatWeHave.imageBlock2.description}</p>
            </div>
          </div>
        </div>
        <br />
        <GradientBlock floatToLeft classes={"gradient-x top-[53%]"} />
        <TwinStepwiseImages classes="pt-0 md:pt-[5rem] relative z-10" items={aboutUs.whatWeHave.imageBlock3} />
        <br />
        <TwinStepwiseImages classes="relative z-10" items={aboutUs.whatWeHave.imageBlock4} />
        <GradientBlock classes={"bottom-0"} />
        <br />
        <TwinStepwiseImages classes="relative z-10" items={aboutUs.whatWeHave.imageBlock5} />
        <br />
        <div className="flex flex-col w-full relative z-10 ">
          <ContentBlock text={aboutUs.whatWeHave.content1} />
        </div>
      </div>
      <div className="flex flex-wrap p-10 w-full relative z-10">
        <ContentHeader additionClass="text-center" header={aboutUs.exploreSection.title} />
        <br />
        <div className="flex h-full relative z-10 w-full md:items-center justify-around flex-col md:flex-row py-8 md:p-10">
          <img
            src={aboutUs.forShipper.image.src}
            alt={aboutUs.forShipper.image.alt}
            className="h-full md:w-[50%] w-full  mr-10 object-cover"
          />
          <div className="text-left">
            <div className={`w-full item-center title !text-left`}>{aboutUs.forShipper.subscript}</div>
            <div className={`w-full item-center shipper-txt`}>{aboutUs.forShipper.title}</div>
            <div className={` item-center subtitle w-[70%]`}>{aboutUs.forShipper.description}</div>
          </div>
          {/* <img
            src={aboutUs.forShipper.image.labelSrc}
            alt={aboutUs.forShipper.image.labelAlt}
            className="h-full md:w-[80%] w-full 0r-10 object-cover"
          /> */}
        </div>
        <GradientBlock classes={"top-[12%]"} />
        <div className="flex h-full relative w-full  z-10  md:items-center justify-around  flex-col md:flex-row-reverse py-8 md:p-10">
          <img
            src={aboutUs.forCarrier.image.src}
            alt={aboutUs.forCarrier.image.alt}
            className="h-full md:w-[50%] w-full  pr-10 object-cover"
          />
          <div className="text-left">
            <div className={`w-full item-center title !text-left`}>{aboutUs.forCarrier.subscript}</div>
            <div className={`w-full item-center shipper-txt`}>{aboutUs.forCarrier.title}</div>
            <div className={`item-center subtitle w-[70%]`}>{aboutUs.forCarrier.description}</div>
          </div>
          {/* <img
            src={aboutUs.forCarrier.image.labelSrc}
            alt={aboutUs.forCarrier.image.labelAlt}
            className="h-full md:w-[80%] w-full mr-10 object-cover"
          /> */}
        </div>
        <GradientBlock floatToLeft classes={"bottom-[10%]"} />
        <div className="flex h-full relative w-full  z-10  md:items-center justify-around  flex-col md:flex-row py-8 md:p-10">
          <img
            src={aboutUs.forPilot.image.src}
            alt={aboutUs.forPilot.image.alt}
            className="h-full md:w-[50%] w-full  mr-10 object-cover"
          />
          <div className="text-left">
            <div className={`w-full item-center title !text-left`}>{aboutUs.forPilot.subscript}</div>
            <div className={`w-full item-center shipper-txt`}>{aboutUs.forPilot.title}</div>
            <div className={`item-center subtitle w-[70%]`}>{aboutUs.forPilot.description}</div>
          </div>
          {/* <img
            src={aboutUs.forPilot.image.labelSrc}
            alt={aboutUs.forPilot.image.labelAlt}
            className="h-full md:w-[80%] w-full pr-10 object-cover"
          /> */}
        </div>
      </div>
    </>


  );
}

export default AboutUs;
