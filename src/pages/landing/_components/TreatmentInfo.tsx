import React from "react";

interface TreatmentInfoProps {
  welcomeText: string;
  title: string;
  description: string;
  subDescription: string;
  videoSrc?: string;
}

const TreatmentInfo: React.FC<TreatmentInfoProps> = ({
  welcomeText,
  title,
  description,
  subDescription,
  videoSrc,
}) => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-8">
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-emerald-400 text-xl ">{welcomeText}</p>
          <h2 className="text-4xl md:text-5xl text-slate-800 leading-tight">
            {title}
          </h2>
          <p className="text-slate-600">{description}</p>
          <p className="text-slate-600">{subDescription}</p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          {videoSrc ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0  rounded-lg flex items-center justify-center">
                <div className="w-28 h-28 rounded-full flex items-center justify-center">
                  <img
                    src="images/treatment-video-play-button.webp"
                    alt="Play button"
                    className="w-full h-full "
                  />
                </div>
              </div>
              <img
                src={videoSrc}
                alt="Treatment video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full aspect-video bg-slate-200 rounded-lg"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TreatmentInfo;
