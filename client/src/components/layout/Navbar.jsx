const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-blue-800">
          Alilee Transformed
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Training</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;