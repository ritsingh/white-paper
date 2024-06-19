import React from "react";
import ContentBlock from "../components/ContentBlock";
import ContentHeader from "../components/ContentHeader";
import { bo, esang } from "../constants";
import GradientBlock from "../components/GradientBlock";

function BusinessOverview() {
  return (
    <>
      <div className="p-5 md:p-10 bg-contain bg-center bg-no-repeat h-screen w-screen relative bg-[url(../public/bo-bg.png)] h-2/3 flex md:items-center bo-bg justify-center md:justify-start">
        <div className="flex md:flex-row items-center ml-0 justify-center md:justify-start md:pt-0 flex-col ">
          <span className="text-white text-64px font-bold leading-80px gradient-font label-codec md:w-[50%] w-full text-center md:text-left ">{bo.title}<br /></span>
          <div className="flex flex-col md:w-[50%] w-full items-center md:items-start md:mt-0 mt-[10%]">
            <span className="md:text-6xl text-4xl text-md leading-80px font-Codec-Cold-Trial ">{bo.subTitle}</span>
            <img
              src={bo.imageSrcArrow}
              alt={bo.imageAlt}
              className="md:h-full bg-cover w-full"
            />
            <h2 className="text-md text-center md:text-left w-full pb-1 subtitle">{bo.visionCaption}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full">
        <ContentBlock w="w-full content" text={bo.header.content} />
      </div>
      <div className="flex flex-col h-full w-full relative">
        <ContentHeader additionClass="text-center" header={bo.marketoppotunities.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-full pb-1 subtitle">{bo.marketoppotunities.text}</h2>
        <br />
        <div className="flex h-full relative w-full md:items-center stake-hoder-image-container justify-center md:p-10 px-5">
          <img
            src={bo.marketoppotunities.imageSrc}
            alt={bo.marketoppotunities.imageAlt}
            className="md:h-[90vh] h-[40vh]  object-cover stake-hoder-image bo-img"
          />
        </div>
      </div>
      <GradientBlock />
      <div className="flex flex-col h-full w-full relative p-10">
        <ContentHeader additionClass="text-center" header={bo.marketoppotunities.contentTitle} />
        <br />
        <ContentBlock text={bo.marketoppotunities.contentText} />
        <ContentBlock w="content pt-8" text={bo.marketoppotunities.contentText1} />
        <br />
      </div>
      <div className="flex flex-col h-full w-full p-10 relative">
        <ContentHeader additionClass="text-center" header={bo.painPoints.title} />
        <br />
        <ContentBlock text={bo.painPoints.content} />
        <br />
      </div>
      <div className="flex flex-col h-full w-full relative items-center">
        <ContentHeader additionClass="text-center" header={bo.contentBlock1.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-[70%] pb-1 subtitle">{bo.contentBlock1.description}</h2>
        <div className="flex h-full relative w-full flex-col md:flex-row md:items-center stake-hoder-image-container justify-around p-10">
          {bo.contentBlock1.blocks.map((content, index) => (
            <div className="flex flex-col md:w-[32%] w-full justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="subtitle-font font-bold md:w-[60%] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-20 h-20 ml-3 p-1" />
                </div>
                <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                <p className="content-color">{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GradientBlock floatToLeft classes={"mt-[20%]"} />
      <div className="flex flex-col h-full w-full  items-center relative z-10">
        <ContentHeader additionClass="text-center" header={bo.contentBlock2.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-[70%] pb-1 subtitle">{bo.contentBlock2.description}</h2>
        <div className="flex h-full relative w-full flex-col md:flex-row  md:items-center stake-hoder-image-container justify-around p-10">
          {bo.contentBlock2.blocks.map((content, index) => (
            <div className="flex flex-col md:w-[32%] w-full justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="subtitle-font font-bold md:w-[60%] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-20 h-20 ml-3 p-1" />
                </div>
                <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                <p className="content-color">{content.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full items-center items-center relative z-10">
        <ContentHeader additionClass="text-center z-10 relative" header={bo.contentBlock4.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-[70%] pb-1 subtitle relative z-10">{bo.contentBlock4.description}</h2>
        <div className="z-10 flex h-full flex-col relative w-full  md:items-center stake-hoder-image-container justify-around p-10">
          {bo.contentBlock4.blocks.map((content, index) => (
            <div className={`flex w-full ${index == 1 ? "justify-center" : index == 2 ? "justify-end" : ""}`}>
              <div className="flex flex-col md:w-[60%] w-full justify-center items-center text-left">
                <div className='mb-10 text-white'>
                  <div className="flex justify-left items-center">
                    <h2 className="subtitle-font font-bold md:w-[50%] w-full">{content.title}</h2>
                    <img src={content.iconSrc} alt={content.iconAlt} className="w-20 h-20 ml-3 p-1" />
                  </div>
                  <img src={"./line-break-lg.png"} className="pb-1 w-[40%]" />
                  <p className="content-color">{content.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full w-full ">
        <ContentHeader additionClass="text-center" header={bo.longTermVision.title} />
        <div className="flex flex-wrap p-10 items-center w-full">
          <div className="md:w-1/2 w-full order-2 md:order-1 ">
            {bo.longTermVision.content.map((content, index) => (
              <div className="w-full py-4 justify-center items-center">
                <div className="flex">
                  <h2 className="subtitle-font md:w-[50%] w-full font-bold">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-20 h-20 ml-3 p-1" />
                </div>
                <img src={"./line-break-lg.png"} className="pb-1 w-[40%]" />
                <br />
                <div className="flex items-center">
                  <div className="w-[1590px] content">
                    <p className="content-color">{content.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full md:w-1/2 p-0 md:py-4 justify-center items-center order-1 md:order-2">
            <img
              src={bo.longTermVision.imageBlock.src}
              alt={bo.longTermVision.imageBlock.alt}
              className="h-full w-auto h-[90vh]"
            />
          </div>
        </div>
      </div>
      <GradientBlock />
      <div className="flex flex-col h-full w-full relative">
        <ContentHeader additionClass="text-center" header={bo.contentBlock3.title} />
        {/* <br /> */}
        <div className="flex h-full relative w-full md:items-center flex-col md:flex-row stake-hoder-image-container justify-around p-10">
          {bo.contentBlock3.blocks.map((content, index) => (
            <div className="flex flex-col md:w-[32%] w-full justify-center items-center text-left">
              <div className='mb-10 text-white'>
                <div className="flex justify-left items-center">
                  <h2 className="subtitle-font font-bold md:w-[50%] w-full">{content.title}</h2>
                  <img src={content.iconSrc} alt={content.iconAlt} className="w-20 h-20 ml-3 p-1" />
                </div>
                <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                <p className="content-color">{content.content}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="content-color pt-6 md:px-10 px-8">{bo.contentBlock3.description}</p>
      </div>
      <div className="flex flex-col h-full w-full p-10 relative">
        <ContentHeader additionClass="text-center" header={bo.competitiveAnalysis.title} />
        {/* <br /> */}
        <ContentBlock text={bo.competitiveAnalysis.text} />
        <br />
        <div className="flex flex-col w-full justify-center items-center text-left md:mt-10 relative">
          <div className='mb-10 text-white flex items-start w-full justify-around md:flex-row flex-col'>
            <div className="flex justify-left items-center flex-col mt-[2rem] md:mt-[1rem]">
              <h2 className="subtitle-font md:w-[50%] w-full text-center md:text-left">{"General Marketplaces"}</h2>
              <div className="flex md:flex-row flex-col">
                <img src={"./c-analysis-1.png"} alt={"c-analysis-1"} className="hidden md:flex w-40 h-[100%]" />
                <img src={"./c-analysis-1-mob.png"} alt={"c-analysis-1"} className="md:hidden flex w-full" />
                <div className="content-color">
                  <ul className="px-5 list-disc">
                    <li>No Specialization</li>
                    <li>Basic Technology</li>
                    <li>Broad Market Focus</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-left items-center flex-col mt-[2rem] md:mt-[1rem] ">
              <h2 className="subtitle-font md:w-[50%] w-full text-center md:text-left subtitle-font">{"Legacy Brokers"}</h2>
              <div className="flex md:flex-row flex-col">
                <img src={"./c-analysis-2.png"} alt={"c-analysis-2"} className="hidden md:flex w-40 h-[100%]" />
                <img src={"./c-analysis-2-mob.png"} alt={"c-analysis-2"} className="md:hidden flex w-full" />
                <div className="content-color">
                  <ul className="px-5 list-disc">
                    <li>Limited Expertise</li>
                    <li>Outdated Systems</li>
                    <li>Carrier-Centric</li>
                  </ul>
                </div>
              </div>
              <div className="md:absolute relative w-full top-[70%] flex justify-end">
                <p className="content-color md:w-[84%] w-full p-0 md:pl-[1vmax]">
                  Legacy brokers often rely on traditional, manual methods that lack the efficiency and expertise required for HazMat logistics. General freight marketplaces, while offering broader logistics services, typically lack the specialized features and compliance tools crucial for safe and secure HazMat transportation. EusoTrip bridges this gap by providing a comprehensive platform specifically designed for the unique needs of the HazMat logistics industry.
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center flex-col mt-[2rem] md:mt-[1rem]">
              <h2 className="subtitle-font md:w-[60%] w-full text-white text-center pl-5 justify-center md:hidden flex">{"EusoTrip"}</h2>
              <div className="flex md:flex-row flex-col">
                <img src={"./c-analysis-3.png"} alt={"c-analysis-3"} className="hidden md:flex w-10" />
                <img src={"./c-analysis-3-mob.png"} alt={"c-analysis-3"} className="md:hidden flex w-full" />
                <div className="content-color ">
                  <h2 className="hidden md:flex subtitle-font md:w-[60%] w-full text-white pl-5 pt-9">{"EusoTrip"}</h2>
                  <ul className="px-5 pt-6 list-disc">
                    <li>HazMat Specialization</li>
                    <li>Technology Integration</li>
                    <li>User Focus</li>
                    <li>Dedicated Focus</li>
                    <li>Cutting-Edge Solutions</li>
                    <li>Comprehensive Ecosystem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* businessModel */}

      <div className="flex flex-col h-full w-full ">
        <ContentHeader additionClass="text-center" header={bo.businessModel.title} />
        {/* <br /> */}
        <h2 className="text-md text-center w-full pb-1 subtitle">{bo.businessModel.description}</h2>
        <div className="flex flex-col h-full relative w-full md:items-center stake-hoder-image-container justify-around px-8 md:p-10">
          <img
            src={bo.businessModel.imageSrc}
            alt={bo.businessModel.imageAlt}
            className=" hidden md:flex h-full bg-cover md:w-[70%] w-full"
          />
          <div className="hidden md:flex align-center justify-center pt-12">
            <div className="subtitle-font !font-bold gradient-font w-[35%] flex flex-col items-end ">
              <div className="mt-[10%]" >Phase 1: Market penetration (Years 1-2)</div>
              <div className="mt-[65%]" >Phase 2: Monetizing the ecosystem (Years 3-5)</div>
              <div className="mt-[80%]" >Phase 3: Data-Driven Expansion (Years 5-7)</div>
            </div>

            <img
              src={bo.businessModel.imageSrc1}
              alt={bo.businessModel.imageAlt1}
              className=" hidden md:flex h-[100vw]"
            />

            <div className="content-color w-[38%] pt-12">
              <ul className="px-8 list-disc flex flex-col justify-between h-[93vw]">
                <li>Strategy: Rapidly onboard carriers and shippers Build trust through a user-friendly, transparent platform Secure strategic partnerships.</li>
                <li>Revenue Streams: Primary: 10% transaction fee per successful load match.</li>
                <li>Strategy: Increase user engagement and retention Expand value proposition with premium features Explore targeted advertising opportunities.</li>
                <li>Revenue Streams: Maintained: 10% transaction fee (across all tiers) New: Tiered subscriptions (Basic, Professional, Premium) Targeted advertising on the platform.</li>
                <li>Strategy: · Solidify market leadership Leverage data insights for new revenue Expand into adjacent markets.</li>
                <li>Revenue Streams: Maintained: · Transaction fees & subscriptions New: Monetized data insights and analytics Expansion into non-HazMat bulk transport Potential for additional logistics services.</li>
              </ul>
            </div>

          </div>
          <div className="md:hidden flex justify-center">
            <div className="w-[100px] flex flex-col justify-evenly text-center pt-[30px] pr-2">
              <div>Transaction Fees Only</div>
              <div>Future Data Insights + Analytics</div>
              <div>Tiered Subscription + Transaction Fees</div>
            </div>
            <img
              src={"./business-model-mobile.png"}
              alt={bo.businessModel.imageAlt}
              className="h-[50vh]"
            />
            <div className="w-[100px] flex flex-col justify-evenly text-center">
              <div>Year 1-2</div>
              <div>Year 3-4</div>
              <div>Year 5-7</div>
            </div>
          </div>
          <div className="md:hidden flex align-center justify-center pt-12">
            <img
              src={bo.businessModel.imageSrc1}
              alt={bo.businessModel.imageAlt1}
              className="flex h-[100vh]"
            />
            <div className="flex flex-col">
              <div className=" w-full flex flex-col items-start pl-4 ">
                <div className="pl-3 subtitle-font !font-bold gradient-font" >Phase 1: Market penetration (Years 1-2)</div>

                <div className="pl-4 content-color w-full pt-12">
                  <ul className="list-disc flex flex-col justify-between">
                    <li>Strategy: Rapidly onboard carriers and shippers Build trust through a user-friendly, transparent platform Secure strategic partnerships.</li>
                    <li>Revenue Streams: Primary: 10% transaction fee per successful load match.</li>
                  </ul>
                </div>
                <div className="pl-3 subtitle-font !font-bold gradient-font" >Phase 2: Monetizing the ecosystem (Years 3-5)</div>

                <div className="pl-4 content-color w-full pt-12">
                  <ul className="list-disc flex flex-col justify-between">
                    <li>Strategy: Increase user engagement and retention Expand value proposition with premium features Explore targeted advertising opportunities.</li>
                    <li>Revenue Streams: Maintained: 10% transaction fee (across all tiers) New: Tiered subscriptions (Basic, Professional, Premium) Targeted advertising on the platform.</li>
                  </ul>
                </div>

                <div className="pl-3 subtitle-font !font-bold gradient-font" >Phase 3: Data-Driven Expansion (Years 5-7)</div>
                <div className="pl-4 content-color w-full pt-12">
                  <ul className="list-disc flex flex-col justify-between">
                    <li>Strategy: · Solidify market leadership Leverage data insights for new revenue Expand into adjacent markets.</li>
                    <li>Revenue Streams: Maintained: · Transaction fees & subscriptions New: Monetized data insights and analytics Expansion into non-HazMat bulk transport Potential for additional logistics services.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="flex flex-col h-full w-full">
        <ContentHeader additionClass="text-center" header={bo.eusotripAdvantage.title} />
        {/* <br /> */}
        <div className="flex h-full relative w-full md:items-center stake-hoder-image-container justify-center md:p-10 px-4 py-5">
          <img
            src={bo.eusotripAdvantage.imageSrc}
            alt={bo.eusotripAdvantage.imageAlt}
            className="h-full"
          />
        </div>
      </div>
      <div className="flex flex-col h-full w-full relative">
        <ContentHeader additionClass="text-center" header={bo.financialProjection.title} />
        <br />
        <div className="flex flex-col md:flex-row h-full relative w-full md:items-start stake-hoder-image-container justify-evenly p-5 md:p-10">
          {/* {bo.financialProjection.imageBlock.map((image, index) => ( */}
          <div className="md:w-[47%] w-full flex-col flex items-center ">
            <h2 className="subtitle-font font-bold text-center w-full pb-6">Eusotrip 5 - year financial projections</h2>
            <div className="flex flex-col relative">
              <img
                src={bo.financialProjection.imageBlock[0].imageSrc}
                alt={bo.financialProjection.imageBlock[0].imageAlt}
                className="w-full md:w-[85%] pl-[5%] md:pl-0"
              />
              <ul className="md:px-12 px-8 md:pt-6 pt-4 list-disc content ">
                <li>Please note that the assumption is in the chart 10% growth year over year.</li>
              </ul>
              <div className="absolute content -rotate-90 left-[-35%] bottom-[60%]">Gross profit & Revenue (in million dollars)</div>
            </div>

          </div>
          <div className="md:w-[47%] w-full flex-col flex items-center md:pt-0 pt-12">
            <h2 className="subtitle-font font-bold text-center w-full pb-6">Path to sustainable growth</h2>
            <img
              src={bo.financialProjection.imageBlock[1].imageSrc}
              alt={bo.financialProjection.imageBlock[1].imageAlt}
              className="w-20 h-20 ml-3 p-1" />
            <div className="flex align-left flex-col pt-8">
              {bo.financialProjection.imageBlock[1].content.map((content, index) => (
                <div className='mb-10 text-white w-full'>
                  <div className="flex justify-between items-center w-full">
                    <h2 className="content font-bold">{content.key}</h2>
                    <h2 className="subtitle-font !font-bold gradient-font">{content.value}</h2>
                  </div>
                  <img src={"./line-break-lg.png"} className="pb-1 w-[90%]" />
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full relative w-full md:items-start stake-hoder-image-container justify-evenly p-5 md:p-10">
          {/* {bo.financialProjection.imageBlock.map((image, index) => ( */}
          <div className="md:w-[47%] w-full flex-col flex items-center">
            <h2 className="subtitle-font font-bold text-center w-full md:pb-[8rem] pb-8">profitability Estimates</h2>
            <img
              src={bo.financialProjection.imageBlock1[0].imageSrc}
              alt={bo.financialProjection.imageBlock1[0].imageAlt}
              className="w-full md:w-[85%]"
            />
            <ul className="md:px-12 px-8  md:pt-6 pt-4 list-disc content">
              <li>Year 1: $500K profit (earlier break-even due to additional capital)</li>
            </ul>
          </div>
          <div className="md:w-[47%] w-full flex-col flex items-center md:pt-0 pt-12">
            <h2 className="subtitle-font font-bold text-center w-full pb-6">Operating Expenses</h2>
            <img
              src={bo.financialProjection.imageBlock1[1].imageSrc}
              alt={bo.financialProjection.imageBlock1[1].imageAlt}
              className="w-20 h-20 ml-3 p-1" />
            <div className="flex align-left flex-col pt-8">
              {bo.financialProjection.imageBlock1[1].content.map((content, index) => (
                <div className='mb-10 text-white w-full'>
                  <div className="flex justify-between items-center w-full">
                    <h2 className="subtitle-font !font-bold gradient-font">{content.key}</h2>
                  </div>
                  <img src={"./line-break-lg.png"} className="pb-1 w-[90%]" />
                  <div className="content">{content.value}</div>
                </div>
              ))}

            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-full relative w-full md:items-start stake-hoder-image-container justify-evenly p-5 md:p-10">
          {/* {bo.financialProjection.imageBlock.map((image, index) => ( */}
          <div className="md:w-[47%] w-full flex-col flex items-center">
            <h2 className="subtitle-font font-bold text-center w-full pb-[3rem]">Subscription revenue growth over 5 years</h2>
            <img
              src={bo.financialProjection.imageBlock2[0].imageSrc}
              alt={bo.financialProjection.imageBlock2[0].imageAlt}
              className="w-full md:w-[85%]"
            />
            <div className="absolute content -rotate-90 md:left-[14%] bottom-[40%] left-[-27%]">Gross profit & Revenue (in million dollars)</div>
          </div>
        </div>
        <div className="flex h-full flex-col relative w-full md:items-center stake-hoder-image-container justify-around p-5 md:p-10 z-10">
          <h2 className="subtitle-font font-bold text-center w-full pb-1">Subscription revenue growth over 5 years</h2>
          <div className="overflow-x-auto w-full flex justify-center">
            <img
              src={bo.financialProjection.imageBlock3[0].imageSrc}
              alt={bo.financialProjection.imageBlock3[0].imageAlt}
              className="md:w-[90%] max-w-screen-md md:max-w-full w-[800px] pb-4 ml-[26rem] md:ml-0"
            />
          </div>
        </div>
        <div className="flex h-full flex-col relative w-full md:items-center stake-hoder-image-container justify-around p-10 z-10">
          <ContentHeader additionClass="text-center mb-6" header={bo.milestones.title} />
          <img
            src={bo.milestones.imageSrc}
            alt={bo.milestones.imageAlt}
            className="h-[100vh] hidden lg:flex xl:flex"
          />
          <img
            src={bo.milestones.imageSrcMobile}
            alt={bo.milestones.imageAlt}
            className="flex lg:hidden xl:hidden "
          />
        </div>
        <GradientBlock classes="bottom-0" />
      </div>
    </>
  );
}

export default BusinessOverview;
