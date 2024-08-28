import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CodeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  // Variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Variants for the checklist items
  const checklistVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      id="workflow"
      className="mt-20 overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
        variants={titleVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding Workflow.
        </span>
      </motion.h2>

      <div className="flex flex-wrap justify-center">
        <motion.div
          className="p-2 w-full lg:w-1/2"
          variants={imageVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={CodeImg} alt="Code" className="rounded-lg shadow-lg" />
        </motion.div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-12"
              variants={checklistVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Workflow;
