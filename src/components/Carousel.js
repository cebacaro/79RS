import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    require("../images/52563207886_0aa99a0bd7_o.jpg"),
    require("../images/52563492234_67ec86d3b3_o.jpg"),
    require("../images/52563743948_202b63db37_o.jpg"),
    require("../images/IMG_2742.jpeg"),
    require("../images/IMG_2743.jpeg"),
    require("../images/IMG_2744.jpeg"),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentSlide === 0;
    const nextSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(nextSlide);
  }, [currentSlide, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentSlide === slides.length - 1;
    const nextSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goTo = (idx) => {
    setCurrentSlide(idx);
  };

  return (
    <div className="w-[100vw] h-[95vh] items-center justify-center flex flex-col relative bg-gradient-to-b from-[#832388] to-[#E3436B] group ">
      <h1 className="font-aboreto font-light lg:text-[20px] mb-4 tracking-[6px] w-[50vw]  uppercase p-2 font-light text-gray-200">
        Gallery
      </h1>
      <div
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        className="lg:w-[50vw] lg:h-[60vh] w-[90vw] h-[80vh] rounded-2xl bg-center bg-no-repeat bg-contain duration-500  "
      ></div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] lg:left-[250px] text-2xl rounded-full p-2 bg-black/20 text-[#f5ca66] cursor-pointer ]  ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] lg:right-[250px] text-2xl rounded-full p-2 bg-black/20 text-[#f5ca66] cursor-pointer ]  ">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex absolute bottom-40 lg:bottom-[50px] text-white z-20">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => goTo(idx)}
            className="text-2xl cursor-pointer  "
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
