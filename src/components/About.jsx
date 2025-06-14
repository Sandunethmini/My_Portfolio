const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-purple-700 to-pink-400 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      <section className="relative bg-white bg-opacity-95 text-gray-800 py-16 px-8 md:px-20 rounded-3xl shadow-2xl max-w-6xl w-full mx-4 flex flex-col md:flex-row items-center gap-14 z-10">
        {/* Description Left */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-500 drop-shadow-lg tracking-tight">
            About Me
          </h2>
          <p className="text-xl mb-6 leading-relaxed">
            Hello! I’m <span className="font-semibold text-blue-800">Sanduni Nethmini</span>, a passionate developer dedicated to building beautiful and functional web applications.
          </p>
          <ul className="mb-6 space-y-2 text-lg">
            <li>
              <span className="inline-block w-3 h-3 bg-blue-700 rounded-full mr-2"></span>
              Frontend Development Enthusiast
            </li>
            <li>
              <span className="inline-block w-3 h-3 bg-purple-700 rounded-full mr-2"></span>
              UI/UX Design Lover
            </li>
            <li>
              <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              Always Learning & Exploring New Tech
            </li>
          </ul>
          <p className="text-lg text-gray-700 mb-8">
            When I’m not coding, you’ll find me reading, learning new things, or enjoying time with friends and family.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Get in Touch
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <img
              src="MyProffile.jpg"
              alt="Sanduni Lasara"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-purple-300 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-2xl z-[-1]"></div>
          </div>
        </div>
      </section>
    </div>
  );

  }

export default About;