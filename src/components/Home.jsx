import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
});

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#1e293b] px-4"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 rounded-full bg-cyan-400 w-80 h-80 opacity-20 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 rounded-full bg-cyan-300 w-96 h-96 opacity-15 filter blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-6xl">
        {/* Text Content (Left) */}
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="max-w-md text-left"
        >
          <motion.h1
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, transition: { duration: 1 } }}
            className="mb-4 text-4xl font-extrabold text-white md:text-6xl"
          >
            Hello, It's Me
          </motion.h1>
          <motion.h2
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="mb-4 text-3xl font-bold text-cyan-400 md:text-5xl"
          >
            Sanduni Nethmini
          </motion.h2>
          <motion.span
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="block mb-6 text-lg text-gray-300"
          >
            And I'm a Frontend Developer
          </motion.span>
          

          {/* Social Media Icons */}
          <div className="flex justify-start mb-6 space-x-4">
            <motion.a
              variants={container(1.0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              href="#https://web.facebook.com/sandu.nethmini.16"
              className="text-cyan-400 hover:text-white"
            >
              <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </div>
            </motion.a>
            
            <motion.a
              variants={container(1.4)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              href="#www.linkedin.com/in/sanduni-nethmini-b707b4305"
              className="text-cyan-400 hover:text-white"
            >
              <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.03-3.054-1.863-3.054-1.864 0-2.148 1.453-2.148 2.957v5.701h-3v-11h2.881v1.517h.040c.4-.76 1.377-1.563 2.831-1.563 3.032 0 3.592 1.996 3.592 4.589v6.457z"/>
                </svg>
              </div>
            </motion.a>
            <motion.a
              variants={container(1.6)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              href="#https://github.com/Sandunethmini"
              className="text-cyan-400 hover:text-white"
            >
              <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-cyan-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.697-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.445-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 7.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.543 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
            </motion.a>
          </div>

          {/* Download CV Button */}
          <motion.a
            variants={container(1.8)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.9, duration: 0.5 } }}
            whileHover={{ scale: 1.1 }}
            href="/CV.pdf"
            download="Sanduni_Nethmini_CV.pdf"
            className="inline-block px-6 py-3 mt-6 font-semibold text-white transition-colors rounded-full bg-cyan-500 hover:bg-cyan-600"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Profile Image (Right) */}
        <motion.div
          variants={container(2.0)}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="relative group">
            <img
              src="MyProffile.jpg" 
              alt="Sanduni Nethmini"
              className="object-cover w-64 h-64 transition-transform duration-300 border-4 rounded-full shadow-2xl border-cyan-400 md:w-80 md:h-80 group-hover:scale-105"
            />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400 to-transparent opacity-50 blur-lg z-[-1]"></div>
          </div>
        </motion.div>
      </div>

      {/* SVG Wave at Bottom */}
      <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
}