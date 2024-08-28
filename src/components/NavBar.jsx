import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { motion } from "framer-motion";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center flex-shrink-0"
          >
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </motion.div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <motion.li
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                key={index}
              >
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="hidden lg:flex justify-center space-x-12 items-center"
          >
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:bg-white hover:text-black"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </motion.div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="py-4"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <a href={item.href}>{item.label}</a>
                </motion.li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-1">
              <a href="#" className="py-2 px-3 border rounded-md ">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;
