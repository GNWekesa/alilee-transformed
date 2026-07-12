const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 text-center">
      <h2 className="text-2xl font-bold">
        Alilee Transformed
      </h2>

      <p className="mt-2">
        Jiajiri Kwa Kujitengenezea
      </p>

      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} Alilee Transformed Limited
      </p>
    </footer>
  );
};

export default Footer;