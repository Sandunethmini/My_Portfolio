const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white px-8 py-6 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Sanduni Nethmini</div>
      <div className="space-x-12">
        <a href="#home" className="hover:text-purple-300 transition-colors">Home</a>
        <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
        <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;