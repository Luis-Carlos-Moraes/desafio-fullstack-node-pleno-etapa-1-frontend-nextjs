export const  Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          koral<span className="text-pink-400">.</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="text-white font-medium hover:text-pink-400 transition">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-pink-400 transition">
              PAGES
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-pink-400 transition">
              PORTFOLIOS
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-pink-400 transition">
              HEADERS
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-pink-400 transition">
              ELEMENTS
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-pink-400 transition">
              BLOG
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4 text-white">
          <button className="hover:text-pink-400 transition cursor-pointer">
            🔍
          </button>
          <button className="hover:text-pink-400 transition cursor-pointer">
            🛒
          </button>
          <button className="hover:text-pink-400 transition cursor-pointer">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
