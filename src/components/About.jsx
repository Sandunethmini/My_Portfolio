const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center relative flex items-center min-h-screen overflow-hidden bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)]">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 bg-green-400 rounded-full w-80 h-80 opacity-30 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 bg-green-300 rounded-full w-96 h-96 opacity-20 filter blur-3xl animate-pulse"></div>
      <section className="relative z-10 flex flex-col items-center w-full max-w-6xl px-8 py-16 mx-4 text-gray-800 bg-white shadow-2xl bg-opacity-95 md:px-20 rounded-3xl md:flex-row gap-14">
        {/* Description Left */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-700 to-green-500 drop-shadow-lg">
            About Me
          </h2>
          <p className="mb-6 text-xl leading-relaxed">
            Hello! I’m <span className="font-semibold text-green-800">Sanduni Nethmini</span>, a passionate developer dedicated to building beautiful and functional web applications.
          </p>
          <ul className="mb-6 space-y-2 text-lg">
            <li>
              <span className="inline-block w-3 h-3 mr-2 bg-green-700 rounded-full"></span>
              Frontend Development Enthusiast
            </li>
            <li>
              <span className="inline-block w-3 h-3 mr-2 bg-green-700 rounded-full"></span>
              UI/UX Design Lover
            </li>
            <li>
              <span className="inline-block w-3 h-3 mr-2 bg-green-500 rounded-full"></span>
              Always Learning & Exploring New Tech
            </li>
          </ul>
          <p className="mb-8 text-lg text-gray-700">
            When I’m not coding, you’ll find me reading, learning new things, or enjoying time with friends and family.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 font-bold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-green-700 via-green-600 to-green-500 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;