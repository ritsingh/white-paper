import React from "react";
import ContentHeader from "./ContentHeader";
import { aboutUs } from "../constants";
import ContentBlock from "./ContentBlock";
import { CarouselTransition } from "./Carousel";
import ContentBlockWithImage from "./ContentBlockWithImage";
import { StepwiseImages } from "./ImageStepper";
import { TwinStepwiseImages } from "./TwinImageStepper";

function AboutUs() {
  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat h-screen w-screen relative bg-[url(../public/about-us-bg.png)] h-2/3 flex md:items-center about-us-header-container">
      <div className="w-653px about-us-header">
        <span className="text-white text-64px font-normal leading-80px font-Codec-Cold-Trial label-codec">Brand New <br/>Digital Map For<br/></span>
        <span className="text-64px font-bold leading-80px font-Codec-Cold-Trial hazmat-label">HazMat Logistics</span>
      </div>
    </div> 
    <div className="flex flex-col p-10 w-full bg-black">
      <ContentHeader header={aboutUs.executiveSumary.title}/>
      <br />
      <ContentBlock text={aboutUs.executiveSumary.content1}/>
      <br />
      <ContentBlock text={aboutUs.executiveSumary.content2}/>
    </div>
    <div className="flex flex-col h-full w-full bg-black">
      <div className="flex stretch bg-cover justify-center items-center">
        <ContentHeader additionClass="text-center" header={aboutUs.stakeholders.title}/>
      </div>
        <h2 className="text-center font-Codec-Cold-Trial text-white-60">EusoTrip offers targeted solutions for each key stakeholder </h2>
      <br />
      <div className="hidden lg:flex xl:flex bg-cover bg-center bg-no-repeat h-full relative bg-[url(../public/stakeholders-bg.png)] w-full md:items-center about-us-header-container stake-hoder-image-container justify-center p-10">
      <img
          src="./stakeholders-1.png"
          alt="image 1"
          className="h-full mr-10 object-cover stake-hoder-image"
        />
        <img
          src="./stakeholders-2.png"
          alt="image 2"
          className="h-full mr-10 object-cover stake-hoder-image"
        />
        <img
          src="./stakeholders-3.png"
          alt="image 3"
          className="h-full mr-10 object-cover stake-hoder-image"
        />
      </div> 
      <CarouselTransition />
      <br />
      <ContentBlock text={aboutUs.stakeholders.content1}/>
      <br />
      <ContentBlock text={aboutUs.stakeholders.content1}/>
    </div>
    <div className="flex flex-wrap p-10 w-full bg-black">
      <ContentBlockWithImage 
        title={aboutUs.introduction.title} 
        text={`${aboutUs.introduction.content1}\n\n${aboutUs.introduction.content2}`}
        image={aboutUs.introduction.imageBlock}
      />
    </div>
    <div className="flex flex-wrap p-10 w-full bg-black">
      <ContentHeader additionClass="text-center" header={aboutUs.marketProblems.title}/>
      <br/>
      <StepwiseImages images={aboutUs.marketProblems.imageBlock1}/>
      <StepwiseImages images={aboutUs.marketProblems.imageBlock2}/>
    </div>
    <div className="flex flex-wrap p-10 w-full bg-black">
      <ContentHeader additionClass="text-center" header={aboutUs.whatWeHave.title}/>
      <br/>
      <TwinStepwiseImages items={aboutUs.whatWeHave.imageBlock} />
      <br />

      <div className="flex flex-row justify-start flex-wrap h-full relative w-full">
        <div class="crop-container">
          <img
            src={aboutUs.whatWeHave.imageBlock2.src}
            alt={aboutUs.whatWeHave.imageBlock2.alt}
            className="object-cover"
          />
        </div>
        <div className="md:w-[20%] h-full mt-10">
          <div className="text-white">
              <h2 className="text-white font-bold">{aboutUs.whatWeHave.imageBlock2.title}</h2>
              <img src={aboutUs.whatWeHave.imageBlock2.iconSrc} alt={aboutUs.whatWeHave.imageBlock2.iconAlt} className="w-8 h-8 ml-2" />
            <p>{aboutUs.whatWeHave.imageBlock2.description}</p>
          </div>
      </div>
      </div>
      <br/>
      <TwinStepwiseImages items={aboutUs.whatWeHave.imageBlock3} />
      <br />
      <TwinStepwiseImages items={aboutUs.whatWeHave.imageBlock4} />
      <br />
      <TwinStepwiseImages items={aboutUs.whatWeHave.imageBlock5} />
      <br />
      <div className="flex flex-col p-10 w-full bg-black">
        <ContentBlock text={aboutUs.whatWeHave.content1}/>
      </div>
    </div>
    <div className="flex flex-wrap p-10 w-full bg-black">
      <ContentHeader additionClass="text-center" header={aboutUs.exploreSection.title}/>
      <br/>
      <div className="flex h-full relative w-full md:items-center justify-center p-10">
      <img
          src={aboutUs.forShipper.image.src}
          alt={aboutUs.forShipper.image.alt}
          className="h-full w-[40%] mr-10 object-cover"
        />
        <img
          src={aboutUs.forShipper.image.labelSrc}
          alt={aboutUs.forShipper.image.labelAlt}
          className="h-full w-[40%] mr-10 object-cover"
        />
      </div> 
      <div className="hidden lg:flex xl:flex h-full relative w-full md:items-center flex-row-reverse p-10">
      <img
          src={aboutUs.forCarrier.image.src}
          alt={aboutUs.forCarrier.image.alt}
          className="h-full w-[40%] mr-10 object-cover"
        />
        <img
          src={aboutUs.forCarrier.image.labelSrc}
          alt={aboutUs.forCarrier.image.labelAlt}
          className="h-full w-[40%] mr-10 object-cover"
        />
      </div> 
      <div className="hidden lg:flex xl:flex h-full relative w-full md:items-center justify-center p-10">
      <img
          src={aboutUs.forPilot.image.src}
          alt={aboutUs.forPilot.image.alt}
          className="h-full w-[40%] mr-10 object-cover"
        />
        <img
          src={aboutUs.forPilot.image.labelSrc}
          alt={aboutUs.forPilot.image.labelAlt}
          className="h-full w-[40%] mr-10 object-cover"
        />
      </div> 
    </div>
    </>


  );
}

export default AboutUs;
