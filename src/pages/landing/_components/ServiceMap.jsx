import { useState, useRef, useEffect } from "react";
import USAStateMap from "./USAStateMap";
import "./ServiceMap.css";

const ServiceMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [statePositions, setStatePositions] = useState({});
  const mapRef = useRef(null);

  // Calculate the center position of each state
  useEffect(() => {
    if (mapRef.current) {
      const calculateStatePositions = () => {
        const positions = {};
        const svgElement = mapRef.current.querySelector("svg");
        if (!svgElement) return;

        const paths = svgElement.querySelectorAll("path");

        paths.forEach((path) => {
          const stateCode = path.getAttribute("data-name");
          if (stateCode) {
            const bbox = path.getBBox();
            positions[stateCode] = {
              x: bbox.x + bbox.width / 2,
              y: bbox.y + bbox.height / 2,
            };
          }
        });

        setStatePositions(positions);
      };

      // Initial calculation
      setTimeout(calculateStatePositions, 1000);

      // Recalculate on window resize
      window.addEventListener("resize", calculateStatePositions);
      return () =>
        window.removeEventListener("resize", calculateStatePositions);
    }
  }, []);

  // Function to handle mouse enter
  const handleMouseEnter = (event) => {
    setHoveredState(event.target.dataset.name);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredState(null); 
  };

  const handleMapClick = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div className="container mx-auto my-30">
      <p className="text-emerald-400 text-xl text-center mb-2">
        STATES WE
      </p>
      <h1 className="text-center text-5xl mb-8">Currently Serve</h1>
      <p className="text-center text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
        We believe everyone should have access to treatment and care. That's why
        we're teaming up with providers all over the country. Click on a green
        state to see the insurance companies we currently accept and to learn
        more about online Suboxone doctors in your area.
      </p>

      <div className="flex flex-col xl:flex-row items-center gap-8">
        {/* Left side - Image with location */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img
              src="/images/toronto.webp"
              alt="Toronto skyline"
              className="w-full rounded-lg border-4 border-white shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">Toronto</h2>
          <p className="flex items-center text-teal-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Ottawa St. and Homer Waston Blvd.
          </p>
        </div>

        {/* Right side - Map */}
        <div className="w-full md:w-1/2 relative map-container" ref={mapRef}>
          <USAStateMap
            hoveredState={hoveredState}
            onClick={handleMapClick}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          />

          {Object.keys(statePositions).length > 0 && (
            <div className="state-labels-container">
              {Object.entries(statePositions).map(([stateCode, position]) => (
                <div
                  key={stateCode}
                  className="state-label"
                  style={{
                    left: `${
                      position.x -
                      (stateCode === "LA" ? 10 : 0) +
                      (stateCode === "FL" ? 50 : 0) +
                      (stateCode === "MI" ? 25 : 0) +
                      (stateCode === "CA" ? -20 : 0) +
                      (stateCode === "MN" ? -20 : 0) +
                      (stateCode === "WV" ? 10 : 0) +
                      (stateCode === "VA" ? 20 : 0) +
                      (stateCode === "OK" ? 10 : 0) + 
                      (stateCode === "TN" ? 10 : 0) +
                      (stateCode === "KY" ? 10 : 0) + 
                      (stateCode === "IN" ? 10 : 0) + 
                      (stateCode === "NJ" ? 15 : 0) + 
                      (stateCode === "ME" ? 15 : 0) + 
                      (stateCode === "NH" ? 15 : 0) + 
                      (stateCode === "NY" ? 25 : 0) + 
                      (stateCode === "VT" ? 15 : 0) + 
                      (stateCode === "MA" ? 10 : 0) + 
                      (stateCode === "RI" ? 20 : 0) + 
                      (stateCode === "CT" ? 15 : 0) + 
                      (stateCode === "DE" ? 10 : 0) + 
                      (stateCode === "MD" ? 15 : 0) + 
                      (stateCode === "PA" ? 15 : 0) + 
                      (stateCode === "MS" ? 10 : 0)


                    }px`,
                    top: `${
                      position.y +
                      (stateCode === "MI" ? 30 : 0) +
                      (stateCode === "AK" ? -20 : 0) +
                      (stateCode === "TN" ? 10 : 0) +
                      (stateCode === "KY" ? 15 : 0) +
                      (stateCode === "VA" ? 10 : 0) + 
                      (stateCode === "RI" ? 10 : 0) + 
                      (stateCode === "DE" ? 10 : 0) + 
                      (stateCode === "PA" ? 5 : 0) + 
                      (stateCode === "NH" ? 15 : 0) + 
                      (stateCode === "ID" ? 30 : 0)
                    }px`,
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {stateCode}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;
