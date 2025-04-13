import USAMap from "react-usa-map";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

const USAStateMap = ({ hoveredState, onClick, onMouseOver, onMouseOut }) => {
  const [mapDimensions, setMapDimensions] = useState({
    width: "100%",
    height: "auto",
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // Maintain aspect ratio - USA map is roughly 1.6:1 (width:height)
        const height = containerWidth / 1.6;
        setMapDimensions({ width: containerWidth, height });
      }
    };

    // Initial sizing
    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /* optional customization of filling per state and calling custom callbacks per state */
  const statesCustomConfig = () => {
    // Base color for all states (teal/green color)
    const baseColor = "#4AC0A4";
    const hoverColor = "#fa846d";

    // Create config for all states
    const stateConfigs = {};

    // Get all state codes
    const stateCodes = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
      "DC",
    ];

    // Set the same color for all states
    stateCodes.forEach((code) => {
      stateConfigs[code] = {
        fill: hoveredState === code ? hoverColor : baseColor,
      };
    });

    return stateConfigs;
  };

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <USAMap
        customize={statesCustomConfig()}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        width={mapDimensions.width}
        height={mapDimensions.height}
      />
    </div>
  );
};

USAStateMap.propTypes = {
  hoveredState: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default USAStateMap;
