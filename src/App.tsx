// import { motion, useAnimate, useAnimation } from "motion/react";
import './index.css';
import './App.css';
// import { useEffect } from "react";
// import ScrollRiveStateMachine from "./RiveAnimation";
import Hero from "./RiveAnimation";

function App() {
  return (
    <>
      {/* Nav Bar */}
      <div className='mt-2 font-roboto font-medium fixed flex flex-row justify-between z-50  text-white gap-52'>
        <img src="https://www.slash.com/_next/static/media/fd0c0324b9d9b1f5d86eb79b641ecb95.svg" className=' h-7 mt-2' alt="" />
        
        <div className='flex gap-10 mt-3'>
          <div className='flex'>Company <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="relative z-20 mt-1 text-gray-70 transition-transform duration-200 group-hover/navitem:rotate-180" width="14" height="14" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" d="m3 6 4 4 4-4"></path></svg></div>
          <div className='flex'>Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="relative z-20 mt-1 text-gray-70 transition-transform duration-200 group-hover/navitem:rotate-180" width="14" height="14" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" d="m3 6 4 4 4-4"></path></svg></div>
          <div>Pricing</div>
          <div>FAQ</div>
          <div>Blog</div>
        </div>

        <div className='flex gap-10 mt-3'>
          <div className='font-medium'>Login</div>
          <div className='font-medium border-[1px] border-[#444755] rounded-2xl px-3 py-1'>Open Account</div>
        </div>
      </div>
      <Hero/>

    </>
  );
}

export default App;
