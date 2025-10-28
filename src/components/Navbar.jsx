const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-6 text-white shadow-md bg-blue-950">
      <div className="text-xl font-bold">Sanduni Nethmini</div>
      <div className="space-x-12">
        <a href="#home" className="transition-colors hover:text-purple-300">Home</a>
        <a href="#about" className="transition-colors hover:text-purple-300">About</a>
        <a href="#skills" className="transition-colors hover:text-purple-300">Skills</a>
        <a href="#projects" className="transition-colors hover:text-purple-300">Projects</a>
        <a href="#contact" className="transition-colors hover:text-purple-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
