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
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      {/* Content */}
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center relative z-10"
      >
        <motion.h1
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 1 } }}
          className="font-extrabold text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 drop-shadow-lg"
        >
          Hi, I'm Sanduni Nethmini
        </motion.h1>
        <motion.span
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="text-2xl lg:text-3xl font-bold uppercase tracking-widest mt-4 block"
        >
          Software Engineer
        </motion.span>
        <motion.a
          variants={container(0.6)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.5 } }}
          whileHover={{ scale: 1.1, backgroundColor: "#4b5563" }}
          href="/CV.pdf"
          download="Sanduni_Nethmini_CV.pdf"
          className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-semibold mt-6 inline-block"
        >
          Download CV
        </motion.a>
      </motion.div>
      <hr className="w-1/2 border-t-2 border-gray-400 mt-12" />
    
    {/* SVG Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
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