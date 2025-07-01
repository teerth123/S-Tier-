import './index.css';
import './App.css';
import Hero from "./RiveAnimation";

function App() {
  return (
    <>
      {/* Nav Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white px-6 sm:px-10 py-4 flex items-center justify-between font-roboto font-medium">
        {/* Logo */}
        <img
          src="https://www.slash.com/_next/static/media/fd0c0324b9d9b1f5d86eb79b641ecb95.svg"
          className="h-6 sm:h-7"
          alt="Slash Logo"
        />

        {/* Middle nav (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base">
          <div className="flex items-center gap-1 cursor-pointer group">
            Company
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="14" height="14" className="transition-transform group-hover:rotate-180">
              <path stroke="currentColor" strokeLinecap="round" d="m3 6 4 4 4-4"></path>
            </svg>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="14" height="14" className="transition-transform group-hover:rotate-180">
              <path stroke="currentColor" strokeLinecap="round" d="m3 6 4 4 4-4"></path>
            </svg>
          </div>
          <div className="cursor-pointer">Pricing</div>
          <div className="cursor-pointer">FAQ</div>
          <div className="cursor-pointer">Blog</div>
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-4 text-sm">
          <div className="cursor-pointer">Login</div>
          <div className="border border-[#444755] rounded-2xl px-3 py-1 cursor-pointer">
            Open Account
          </div>
        </div>
      </nav>

      <Hero />
    </>
  );
}

export default App;
