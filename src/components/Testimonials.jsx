import { motion } from "framer-motion";
import { testimonials } from "../constants";

const Testimonials = () => {
  // Variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      id="testimonials"
      className="mt-20 tracking-wide relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
        variants={titleVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What people are saying
      </motion.h2>

      <div className="relative flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ zIndex: testimonials.length - index }}
          >
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
