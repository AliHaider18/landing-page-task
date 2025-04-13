import React from "react";

interface Logo {
  src: string;
  alt: string;
}

interface FeaturedOnProps {
  title: string;
  subtitle: string;
  logos: Logo[];
}

const FeaturedOn: React.FC<FeaturedOnProps> = ({
  title,
  subtitle,
  logos = [],
}) => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Title and Subtitle */}
          <div className="mb-8 md:mb-0 md:mr-8">
            <h3 className="text-green-500 text-xl">{title}</h3>
            <h2 className="text-5xl text-gray-800 mt-2">{subtitle}</h2>
          </div>

          {/* Scrolling carousel */}
          <div className="overflow-hidden w-full max-w-xl">
            <div
              className="flex items-center gap-8 md:gap-12 animate-marquee"
              style={{ whiteSpace: "nowrap" }}
            >
              {logos.map((logo, index) => (
                <div key={index} className="w-24 flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless scrolling */}
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="w-24 flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedOn;
