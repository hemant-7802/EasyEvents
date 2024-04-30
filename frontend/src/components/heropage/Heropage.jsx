// import library
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import component
import { Button, Image } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

// import details
import { slidersdetails, mobiledetails } from "../../_Details";
import { Link } from "react-router-dom";

export default function Heropage({ className }) {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0.5px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
        }
      }
    ]
  };
  return (
    <div id="home" className={`slider-container overflow-hidden ${className}`}>
      <Slider {...settings} className=" iPhone6+and7+and8+:hidden iPhone4and4S:hidden" key={slidersdetails.id}>
        {slidersdetails.map((image) =>
          <div className="relative" key={image.id}>
            <Image src={image.download_url} alt={image.author} isZoomed isBlurred radius="none" className=" self-center brightness-50 h-[650px] w-[1800px] iPadPro10.5:w-[1024px] iPad1and2andMiniandAir:w-[800px] iPad1and2andMiniandAir:h-[400px]" />
            <div id="content-sec" className="absolute z-10 top-[20%] right-[10%] max-w-[50%] text-right">
              <h1 className="heading_text text-8xl text-white capitalize iPadPro12.9:text-6xl iPad1and2andMiniandAir:text-5xl iPhone6+and7+and8+:text-4xl iPhone6and6Sand7and8:text-3xl iPhone4and4S:text-xl">{image.heading}</h1>
              <h2 id="subheading-tag" className="text-4xl iPadPro12.9:text-2xl iPad1and2andMiniandAir:text-xl iPhone6+and7+and8+:text-lg iPhone6and6Sand7and8:text-md iPhone4and4S:text-sm">{image.sub_heading}</h2>
              <p className="text-2xl my-3 text-white/80 iPadPro12.9:text-md iPad1and2andMiniandAir:text-sm iPhone6and6Sand7and8:hidden iPhone4and4S:hidden">{image.disc}</p>
              <Link to={"/signup"}>
                <Button className="bg-emerald-900 text-white">
                  GET STARTED FOR FREE <FaArrowRightLong className="inline-block justify-end self-center" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Slider>
      <div className="hidden relative iPhone6+and7+and8+:block iPhone4and4S:block">
        <Image isZoomed isBlurred radius="none" src="https://i.postimg.cc/PxHRmQky/pexels-mat-brown-1395967.jpg" alt="not found" className="h-[auto] w-full brightness-[30%]" />
        <div className="absolute z-10 top-[25%] left-[5%] max-w-[100%] text-left">
          <h1 className="text-4xl uppercase">{mobiledetails[0].heading}</h1>
          <h2 id="mobile_subtitle" className="text-2xl my-2">{mobiledetails[0].sub_heading}</h2>
          <Link to={"/signup"}>
            <Button className="bg-emerald-900 text-white">
              GET STARTED FOR FREE <FaArrowRightLong className="inline-block justify-end self-center" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}