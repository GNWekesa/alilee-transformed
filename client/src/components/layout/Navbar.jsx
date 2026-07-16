const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <div>

          <h1 className="text-3xl font-black text-blue-800">
            Alilee
          </h1>

          <p className="text-xs">
            Jiajiri Kwa Kujitengenezea
          </p>

        </div>

        <div className="hidden md:flex gap-8 font-semibold">

          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Services</a>

          <a href="#">Training</a>

          <a href="#">Contact</a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;