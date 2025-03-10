import React from 'react';

export function StepwiseImages({ images }) {
    return (
        <div className="flex flex-wrap justify-center md:p-10 bg-cover bg-center bg-no-repeat relative about-us-header-container  h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-64 sm:h-72 md:h-80 lg:h-96 xl:h-full w-full sm:w-1/2 lg:w-1/4 ${
                index % 3 === 1 ? 'mt-10 sm:mt-20 lg:mt-40' : index % 3 === 2 ? 'mt-20 sm:mt-40 lg:mt-80' : ''
              } mr-2`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-contain rounded-t-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      );
}

export default StepwiseImages;
