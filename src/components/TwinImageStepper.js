import React from 'react';

export function TwinStepwiseImages({ items }) {
  return (
<div className="flex flex-col md:flex-row justify-center items-start p-10 h-full w-full mt-0">
      {/* Left Image */}
      <div className="w-full h-full flex justify-center md:justify-end mb-10 md:mb-0">
        <img
          src={items[0].imageSrc}
          alt={items[0].imageAlt}
          className="w-full h-full  object-cover shadow-lg"
        />
      </div>
      {/* Central Text and Icons */}
      <div className="flex flex-col justify-center items-center text-center w-full h-full">
        {items.map((item, index) => (
          <div key={index} className={`mb-10 text-white ${index === 0 ? 'mb-[80%]': ''}`}>
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              {index === 0 && (
                <img src={item.iconSrc} alt={item.iconAlt} className="w-8 h-8 ml-2" />
              )}
              {index === 1 && (
                <img src={item.iconSrc} alt={item.iconAlt} className="w-8 h-8 ml-2" />
              )}
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {/* Right Image */}
      <div className="w-full h-full flex justify-center md:justify-start mt-[20%] sm:mt-30 lg:mt-50">
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
