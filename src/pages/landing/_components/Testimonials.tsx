import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  heading: string;
  testimonials: {
    content: string;
    additionalContent?: string;
    author: string;
    rating: number;
    image: string;
  }[];
}

// Extracted TestimonialCard as a separate component for better organization
const TestimonialCard = ({
  testimonial,
  style,
}: {
  testimonial: TestimonialProps["testimonials"][0];
  style: React.CSSProperties;
}) => {
  return (
    <div
      className="bg-white z-100 p-6 rounded-lg shadow-sm border border-gray-100 transition-transform hover:-rotate-3 hover:scale-105"
      style={style}
    >
      <div className="flex mb-4">
        <RatingStars rating={testimonial.rating} />
      </div>
      <p className="text-gray-700 mb-4">{testimonial.content}</p>
      {testimonial.additionalContent && (
        <p className="text-gray-700 mb-4">{testimonial.additionalContent}</p>
      )}
      <div className="flex items-center mt-6">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <p className="font-medium text-gray-800">{testimonial.author}</p>
      </div>
    </div>
  );
};

// Extracted RatingStars as a separate component
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 fill-yellow-400"
        />
      ))}

      {hasHalfStar && (
        <div key="half" className="relative w-5 h-5">
          <Star className="absolute w-5 h-5 text-yellow-400" />
          <div className="absolute overflow-hidden w-2.5 h-5">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
    </>
  );
};

const Testimonials: React.FC<TestimonialProps> = ({
  heading,
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-emerald-400 text-xl mb-2">OUR CLIENT'S</p>
            <h2 className="text-4xl md:text-5xl text-slate-800">{heading}</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center hover:bg-emerald-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative overflow-hidden"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === activeIndex ? "z-10" : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <TestimonialCard
                style={{
                  opacity:
                    hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1,
                }}
                testimonial={testimonial}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
