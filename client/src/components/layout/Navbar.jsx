const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a href="#home" className="cursor-pointer">
          <h1 className="text-3xl font-extrabold text-blue-900">
            Alilee
          </h1>

          <p className="text-xs text-gray-500">
            Jiajiri Kwa Kujitengenezea
          </p>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <a href="#home" className="hover:text-blue-800 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-800 transition">
            About
          </a>

          <a href="#training" className="hover:text-blue-800 transition">
            Training
          </a>

          <a href="#materials" className="hover:text-blue-800 transition">
            Raw Materials
          </a>

          <a href="#gallery" className="hover:text-blue-800 transition">
            Gallery
          </a>

          <a href="#faq" className="hover:text-blue-800 transition">
            FAQ
          </a>

          <a href="#contact" className="hover:text-blue-800 transition">
            Contact
          </a>

          <a
            href="https://wa.me/254785687846"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;