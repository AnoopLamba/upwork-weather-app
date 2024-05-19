import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-12 flex items-center justify-between">
      {/* Logo */}
      <Link href="#" className="text-3xl font-black text-blue-800">
        LOGO
      </Link>
      <div className="flex items-center justify-center gap-6 font-medium text-gray-800">
        <Link href="#" className="hover:text-blue-800 text-lg duration-300">
          Help
        </Link>
        <Link href="#" className="hover:text-blue-800 text-lg duration-300">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
