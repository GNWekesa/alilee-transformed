const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-blue-900">
            Alilee
          </h1>

          <p className="text-xs text-gray-500">
            Jiajiri Kwa Kujitengenezea
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <a href="#home" className="hover:text-blue-800">
            Home
          </a>

          <a href="#about" className="hover:text-blue-800">
            About
          </a>

          <a href="#courses" className="hover:text-blue-800">
            Courses
          </a>

          <a href="#materials" className="hover:text-blue-800">
            Raw Materials
          </a>

          <a href="#gallery" className="hover:text-blue-800">
            Gallery
          </a>

          <a href="#contact" className="hover:text-blue-800">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;