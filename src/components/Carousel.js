import { Carousel } from "@material-tailwind/react";
import React from "react";

export function CarouselTransition() {
  return (
    <div className="lg:relative w-full block lg:hidden">
      <Carousel
        autoplay={true}
        loop={true}
        transition={{ duration: 2 }}
        className="rounded-xl overflow-hidden"
        controls={false}
        slidesPerPage={1}
        breakpoints={{
          1024: {
            slidesPerPage: 3,
            centeredSlides: true,
            peek: {
              before: 10,
              after: 10,
            },
          },
          768: {
            slidesPerPage: 2,
            centeredSlides: true,
            peek: {
              before: 10,
              after: 10,
            },
          },
          640: {
            slidesPerPage: 1.5,
            centeredSlides: true,
            peek: {
              before: 10,
              after: 10,
            },
          },
        }}
      >
        <img
          src="./stakeholders-1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="./stakeholders-2.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="./stakeholders-3.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
