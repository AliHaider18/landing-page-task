import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface TreatmentStepsProps {
  heading: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  steps: Step[];
}

const TreatmentSteps: React.FC<TreatmentStepsProps> = ({
  heading,
  title,
  buttonText,
  buttonLink,
  steps,
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-[#c5ede4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 flex xl:flex-row flex-col items-center justify-between">
          <div className="flex flex-col xl:items-start items-center">
            <h3 className="text-emerald-400  mb-2 text-xl">{heading}</h3>
            <h2 className="text-5xl text-gray-800 mb-8">{title}</h2>
          </div>
          <div className="flex mb-8 ">
            <a
              href={buttonLink}
              className="inline-flex bg-[#49c7ab] items-center px-6 py-3 bg-mint-500 text-white rounded-lg font-medium hover:bg-mint-600 transition-colors"
            >
              {buttonText} <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Center globe image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="images/globe.gif"
              alt="Globe"
              className="w-80 h-80 object-cover rounded-full opacity-80 mix-blend-darken"
            />
          </div>

          {/* Steps layout */}
          <div className="grid grid-cols-12 gap-6 relative z-10">
            {steps.map((step, index) => {
              // Determine position classes based on index
              let positionClasses = "col-span-12 md:col-span-5";

              if (index === 4) {
                // Last step (bottom center)
                positionClasses =
                  "col-span-12 md:col-span-6 md:col-start-4 mt-6";
              } else if (index % 2 === 0) {
                // Steps 0, 2 (left side)
                positionClasses += " md:col-start-1";
              } else {
                // Steps 1, 3 (right side)
                positionClasses += " md:col-start-8";
              }

              return (
                <div
                  key={step.number}
                  className={`${positionClasses} bg-white p-6 rounded-lg shadow-sm border border-emerald-400`}
                >
                  <h4 className="mb-2">
                    Step {step.number} - {step.title}
                  </h4>
                  <p className="text-gray-600 font-light">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSteps;
