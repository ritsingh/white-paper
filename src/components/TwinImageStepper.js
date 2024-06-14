import React from 'react';

export function TwinStepwiseImages({ items }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start p-10 h-full w-full mt-0">
      {/* Left Image */}
      <div className="w-full h-full flex justify-center md:justify-end mb-10 md:mb-0 pr-10">
        <img
          src={items[0].imageSrc}
          alt={items[0].imageAlt}
          className="w-full h-full  object-cover shadow-lg"
        />
      </div>
      {/* Central Text and Icons */}
      <div className="flex flex-col justify-between items-center text-center w-full h-[100vh] text-lg	">
        {items.map((item, index) => (
          <div key={index} className={`mb-10 text-white ${index === 0 ? 'mb-[80%] text-left' : 'text-right'}`}>
            {/* <div className={`flex items-center mb-4 ${index === 0 ? 'justify-start ' : 'justify-end'}`}> */}
            <div className={`flex items-end ${index === 0 ? 'justify-start ' : 'justify-end'}`}>
              <div className='flex flex-col'>
                <h2 className="text-xl font-bold pb-1">{item.title}</h2>
                <img src={"./line-break.png"} className="pb-1" />
              </div>
              {index === 0 && (
                <img src={item.iconSrc} alt={item.iconAlt} className="w-12 h-12 ml-3 p-1" />
              )}
              {index === 1 && (
                <img src={item.iconSrc} alt={item.iconAlt} className="w-12 h-12 ml-3 p-1" />
              )}
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {/* Right Image */}
      <div className="w-full h-full flex justify-center md:justify-start mt-[20%] sm:mt-30 lg:mt-50 pl-10">
        <img
          src={items[1]?.imageSrc}
          alt={items[1]?.imageAlt}
          className="w-full h-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default TwinStepwiseImages;
