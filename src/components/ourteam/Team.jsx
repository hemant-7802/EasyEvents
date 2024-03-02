import React from "react";
import { team } from "../../_Details";

//import avatar
import { Avatar } from "@nextui-org/react";

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from "@mui/material/Stack";

// import icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Team() {
  const imagesetting = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div
      id="team"
      className="overflow-hidden py-20 iPhone4and4S:py-10 iPad1and2andMiniandAir:py-10 dark"
    >
      <h3
        id="team_heading"
        className="uppercase font-semibold text-center text-6xl mb-8 iPhone4and4S:text-4xl iPad1and2andMiniandAir:text-5xl iPad1and2andMiniandAir:mb-14 Laptops:mb-20"
      >
        our team
      </h3>
      <Slider {...imagesetting}>
        {team.map((tdetails) => {
          return (
            <Stack direction="row" className="mb-6" key={tdetails.id}>
              <div
                id="team-details-sec"
                className="flex flex-col items-center justify-center"
              >
                <Avatar
                  src={tdetails.image_url}
                  className="w-44 h-44 text-large"
                />
                <h2
                  id="name-tag"
                  className="font-medium text-2xl uppercase mt-6"
                >
                  {tdetails.name}
                </h2>
                <p className="discription_text text-lg">{tdetails.job_role}</p>
                <div id="icons-sec" className="flex w-[100px]">
                  <div
                    id="icon-sec"
                    className="w-full inline-flex justify-evenly mt-3"
                  >
                    <i className="border-2 rounded-full p-2 bg-gray-600">
                      <a href={tdetails.githubId} target="_blank">
                        <FaGithub className="text-md text-white " />
                      </a>
                    </i>
                    <i className="border-2 rounded-full p-2 bg-blue-600">
                      <a href={tdetails.linkedinId} target="_blank">
                        <FaLinkedinIn className="text-lg text-white" />
                      </a>
                    </i>
                  </div>
                </div>
              </div>
            </Stack>
          );
        })}
      </Slider>
    </div>
  );
}
