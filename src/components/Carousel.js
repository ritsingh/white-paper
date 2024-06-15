// import { Carousel } from "@material-tailwind/react";
import React from "react";
import Slider from "react-slick";


export function CarouselTransition({ items = [], classes="pb-5" }) {

  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    }]
  };

  return (
    <div className={`lg:relative w-full block lg:hidden slider-container ${classes}`}>

      <Slider {...settings}>
        {
          items.map(item =>
            <div className="items-center justify-center flex">
              {item }
            </div>
          )
        }
      </Slider>
    </div>
  );
}
