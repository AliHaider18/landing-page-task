interface BreakingBarriersProps {
  title: string;
  missionText: string;
  supportText: string;
  stats: {
    value: string;
    label: string;
  }[];
  videoSrc?: string; // now using gif source
}

const BreakingBarriers = ({
  title,
  missionText,
  supportText,
  stats,
  videoSrc,
}: BreakingBarriersProps) => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Gif */}
      {videoSrc && (
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={videoSrc}
            alt="Background gif"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.8)",
            }}
          />
        </div>
      )}

      {/* Content (with z-index to appear above the background) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 pr-0 2xl:pr-60 flex flex-col justify-between">
            <h2 className="text-5xl text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{missionText}</p>
          </div>

          <div className="md:w-1/2 flex flex-col justify-between">
            <p className="text-gray-600 mb-6">{supportText}</p>

            <div className="flex flex-wrap justify-between mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-start mb-6">
                  <h3 className="text-4xl text-teal-500">{stat.value}</h3>
                  <p className="text-gray-700 text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingBarriers;
