import { motion } from "framer-motion";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

// Variants for animations
const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.h3
            className="text-md font-semibold mb-4"
            variants={listItemVariants}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Resources
          </motion.h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.h3
            className="text-md font-semibold mb-4"
            variants={listItemVariants}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Platform
          </motion.h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.h3
            className="text-md font-semibold mb-4"
            variants={listItemVariants}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Community
          </motion.h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          className="mt-8 text-neutral-500 text-sm"
        >
          © 2024 Your Company. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
