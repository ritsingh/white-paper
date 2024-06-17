import React from 'react';
import { CarouselTransition } from './Carousel';

export function TwinStepwiseImages({ items, classes="" }) {
  return (
    <div className={`flex flex-wrap w-full h-full ${classes}`}>
      <div className={`hidden lg:flex xl:flex flex-col md:flex-row justify-center items-start p-10 h-full w-full mt-0`}>
        {/* Left Image */}
        <div className="w-full h-full flex justify-center md:justify-end mb-10 md:mb-0 pr-10">
          <img
            src={items[0].imageSrc}
            alt={items[0].imageAlt}
            className="h-full w-[90%]  object-cover shadow-lg"
          />
        </div>
        {/* Central Text and Icons */}
        <div className="flex flex-col justify-between items-center text-center w-full h-[100vh] text-lg	md:px-15">
          {items.map((item, index) => (
            <div key={index} className={`mb-10 text-white text-left ${index === 0 ? 'mb-[80%]' : ''}`}>
              {/* <div className={`flex items-start text-left ${index === 0 ? 'justify-start ' : 'justify-end'}`}> */}
              <div className={`flex items-start text-left justify-start`}>
                <div className='flex flex-col'>
                  <h2 className="md:text-3xl text-xl font-bold pb-1 w-full md:w-[90%]">{item.title}</h2>
                  <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                </div>
                {index === 0 && (
                  <img src={item.iconSrc} alt={item.iconAlt} className="w-20 h-20 ml-3 p-1" />
                )}
                {index === 1 && (
                  <img src={item.iconSrc} alt={item.iconAlt} className="w-20 h-20 ml-3 p-1" />
                )}
              </div>
              <p className='content-color'>{item.description}</p>
            </div>
          ))}
        </div>
        {/* Right Image */}
        <div className="w-full h-full flex justify-center md:justify-start mt-[20%] sm:mt-30 lg:mt-50 pl-10">
          <img
            src={items[1]?.imageSrc}
            alt={items[1]?.imageAlt}
            className="w-[90%] h-full object-cover shadow-lg"
          />
        </div>
      </div>
      {
        items.length > 1 ? (
          <CarouselTransition
            items={
              items.map((item) =>
                <div className="w-full h-full flex flex-col justify-center mb-10">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-[70vh] m-auto shadow-lg"
                  />
                  <div className={`mt-10 text-white w-[90%] text-left`}>
                    <div className={`flex items-end justify-start`}>
                      <div className='flex flex-col'>
                        <h2 className="text-xl font-bold pb-1">{item.title}</h2>
                        <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                      </div>
                      <img src={item.iconSrc} alt={item.iconAlt} className="w-12 h-12 ml-3 p-1" />
                    </div>
                    <p className='content-color'>{item.description}</p>
                  </div>

                </div>
              )
            } />
        ) :

          <div className="lg:hidden w-full h-full flex flex-col justify-center mb-10">
            <img
              src={items[0].imageSrc}
              alt={items[0].imageAlt}
              className="h-[70vh] m-auto shadow-lg"
            />
            <div className={`mt-10 text-white w-[80%] text-left`}>
              <div className={`flex items-end justify-start`}>
                <div className='flex flex-col'>
                  <h2 className="text-xl font-bold pb-1">{items[0].title}</h2>
                  <img src={"./line-break.png"} className="pb-1 w-[55%]" />
                </div>
                <img src={items[0].iconSrc} alt={items[0].iconAlt} className="w-12 h-12 ml-3 p-1" />
              </div>
              <p className='content-color' >{items[0].description}</p>
            </div>
          </div>
      }
    </div>

  );
}

export default TwinStepwiseImages;
