import React, { useEffect, useRef } from "react";
import certificate1 from "../../CERTIFICATES/Big_Data.png";
import certificate2 from "../../CERTIFICATES/Screenshot (292).png";
import certificate3 from "../../CERTIFICATES/Screenshot (293).png";
import certificate4 from "../../CERTIFICATES/Screenshot (294).png";

export default function Carousel() {
  useEffect(() => {
    initFlickity();
  }, []);

  const carousel = useRef(null);

  async function initFlickity() {
    if (typeof window !== "undefined" && carousel.current) {
      const Flickity = (await import("flickity")).default;
      new Flickity(carousel.current, {
        lazyLoad: true,
        wrapAround: true,
        autoPlay: true,
      });
    }
  }

  return (
    <div
      ref={carousel}
      className="w-full h-[600px] sm:w-[560px] sm:h-auto mx-auto relative carousel" data-aos="zoom-in"
    >
      <div className="carousel-cell">
        <img src={certificate1} alt="" className="img-carousel" />
      </div>
      <div class="carousel-cell">
        <img src={certificate2} alt="" className="img-carousel" />
      </div>
      <div class="carousel-cell">
        <img src={certificate3} alt="" className="img-carousel" />
      </div>
      <div class="carousel-cell">
        <img src={certificate4} alt="" className="img-carousel" />
      </div>
    </div>
  );
}
