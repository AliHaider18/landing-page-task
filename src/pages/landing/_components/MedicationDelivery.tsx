import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface MedicationDeliveryProps {
  heading: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  videoSrc?: string; // Optional GIF source
}

const MedicationDelivery: React.FC<MedicationDeliveryProps> = ({
  heading,
  title,
  description,
  buttonText,
  buttonLink,
  videoSrc = "/images/background-get-app.gif", // Default GIF path
}) => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* GIF background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={videoSrc}
          alt="Background GIF"
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text is readable */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(123.74deg, rgba(73, 199, 171, 0.7) 11.54%, rgba(255, 255, 255, 0.7) 111.58%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-black relative z-20">
        <motion.h3
          className="text-lg font-medium mb-2"
          initial={{ x: -1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {heading}
        </motion.h3>
        <motion.h2
          className="text-5xl mb-6"
          initial={{ x: 1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">{description}</p>
        <a href={buttonLink}>
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium flex items-center mx-auto">
            {buttonText}
            <ArrowUpRight size={24} className="ml-2" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default MedicationDelivery;
