import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold">
          Alilee Transformed
        </h2>

        <p className="mt-3 text-gray-400">
          Jiajiri Kwa Kujitengenezea
        </p>

        <p className="mt-6 max-w-2xl text-gray-400">
          Empowering entrepreneurs through practical skills, DIY raw materials,
          innovation and AI-powered business support.
        </p>

        <div className="flex gap-5 text-2xl mt-8">

          <FaFacebook />

          <FaInstagram />

          <FaLinkedin />

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-gray-500">
          © {new Date().getFullYear()} Alilee Transformed Limited.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;