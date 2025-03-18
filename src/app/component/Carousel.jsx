import React, { useEffect, useRef } from "react";
import "./Carousel.css";

const Carousel = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const nextHandler = () => showSlider("next");
    const prevHandler = () => showSlider("prev");

    const showSlider = (type) => {
      const sliderItems = sliderRef.current.querySelectorAll(".carousel .list .item");
      const thumbnailItems = thumbnailBorderRef.current.querySelectorAll(".item");

      if (type === "next") {
        sliderRef.current.appendChild(sliderItems[0]);
        thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
        carouselRef.current.classList.add("next");
      } else {
        sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorderRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselRef.current.classList.add("prev");
      }

      setTimeout(() => {
        carouselRef.current.classList.remove("next");
        carouselRef.current.classList.remove("prev");
      }, timeRunning);
    };

    const runNextAuto = setInterval(() => {
      nextHandler();
    }, timeAutoNext);

    nextRef.current.addEventListener("click", nextHandler);
    prevRef.current.addEventListener("click", prevHandler);

    return () => {
      clearInterval(runNextAuto);
      nextRef.current.removeEventListener("click", nextHandler);
      prevRef.current.removeEventListener("click", prevHandler);
    };
  }, []);

  return (
    <section className="md:mr-[25px]" id="slideshow">
      <div className="carousel md:mr-[20px] md:w-[96.3vw] w-[91vw]" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img
              src="./image/img1.png"
              alt="1"
            />
          </div>
          <div className="item">
            <img
              src="./image/img2.png"
              alt="2"
            />
          </div>
          <div className="item">
            <img
              src="./image/img3.png"
              alt="3"
            />
          </div>
          <div className="item">
            <img
              src="./image/img4.png"
              alt="4"
            />
          </div>
        </div>

        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="border border-blue-500 rounded-[20px] item">
            <img
              src="./image/img1.png"
              alt="5"
            />
          </div>
          <div className="border border-blue-500 rounded-[20px] item">
            <img
              src="./image/img2.png"
              alt="6"
            />
          </div>
          <div className=" border border-blue-500 rounded-[20px] item">
            <img
              src="./image/img3.png"
              alt="7"
            />
          </div>
          <div className="border border-blue-500 rounded-[20px] item">
            <img
              src="./image/img4.png"
              alt="8"
            />
          </div>
        </div>

        <div className="arrows">
          <button ref={prevRef}>Prev</button>
          <button ref={nextRef}>Next</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </section>
  );
};

export default Carousel;
