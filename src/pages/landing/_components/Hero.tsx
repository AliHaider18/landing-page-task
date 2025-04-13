import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const Hero = ({
  title = "Easy Online Suboxone Treatment for Opioid Addiction",
  subtitle = "No lines. Less hassle. Lower costs.",
  buttonText = "Download The App Today",
  buttonLink = "/download",
  backgroundImage = "images/hero-image.webp",
}: Partial<HeroProps>) => {
  return (
    <div className="relative pb-50">
      {/* Background image with overlay */}
      <div
        className="absolute flex inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Main content */}
      <main className="relative container mx-auto z-10 flex flex-col justify-center px-8 ">
        <Navbar />

        <div className="max-w-3xl mt-60 mx-20">
          <p className="text-white text-xl mb-4">{subtitle}</p>

          <h1 className="text-white text-5xl md:text-6xl leading-tight mb-12">
            {title.split(" ").length > 6
              ? title.split(" ").reduce((acc, word, i, arr) => {
                  if (i % 3 === 0 && i !== 0) acc.push(<br key={i} />);
                  acc.push(word + (i === arr.length - 1 ? "" : " "));
                  return acc;
                }, [] as React.ReactNode[])
              : title}
          </h1>

          <Link
            to={buttonLink}
            className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md"
          >
            {buttonText}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Hero;
