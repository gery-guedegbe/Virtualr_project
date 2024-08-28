import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  // Variants for different elements
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
      className="flex flex-col items-center mt-6 lg:m-20"
    >
      <motion.h1
        variants={headingVariants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          for developers
        </span>
      </motion.h1>

      <motion.p
        variants={paragraphVariants}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
      >
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </motion.p>

      <motion.div
        variants={buttonVariants}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center my-10"
      >
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-3 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-4 px-3 rounded-md border text-center hover:bg-white hover:text-black"
        >
          Documentation
        </a>
      </motion.div>

      <div className="flex flex-col lg:flex-row mt-10 items-center justify-center">
        <motion.video
          variants={videoVariants}
          transition={{ delay: 0.9, duration: 0.6 }}
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support this video tag.
        </motion.video>

        <motion.video
          variants={videoVariants}
          transition={{ delay: 1.1, duration: 0.6 }}
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support this video tag.
        </motion.video>
      </div>
    </motion.div>
  );
};

export default HeroSection;
