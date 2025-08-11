'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRive } from "@rive-app/react-canvas";
import { Poppins, Inter } from "next/font/google";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add whatever weights you use
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add whatever weights you use
});
export default function Home() {
  const { rive, RiveComponent } = useRive({
    src: "/rive.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 2;
      const scrollProgress = Math.min((scrollTop / maxScroll) * 100, 100);
      setScrollY(scrollProgress);

      if (rive) {
        const inputs = rive.stateMachineInputs("State Machine 1");
        const scrollInput = inputs.find((input) => input.name === "scroll value");
        if (scrollInput) {
          scrollInput.value = scrollProgress;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [rive]);

  gsap.registerPlugin(ScrollTrigger);
  const fadeInRef = useRef(null);
  const fadeoUTRef = useRef(null);
  const fadeInImg1 = useRef(null);
  const fadeInImg2 = useRef(null);
  const fadeInImg3 = useRef(null);
  const fadeInRightImg1 = useRef(null);
  const fadeInRightImg2 = useRef(null);
  const fadeInRightImg3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      fadeoUTRef.current,
      { opacity: 0.35 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: fadeoUTRef.current,
          start: "top 80%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, [])

  useEffect(() => {
    gsap.fromTo(
      fadeInRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: fadeInRef.current,
          start: 'top 10%',
          end: 'bottom 40%',
          scrub: true
        }
      }
    )

    gsap.fromTo(
      fadeInImg1.current,
      {
        opacity: 0,
        x:-10
      },
      {
        x:0,
        opacity: 1,
        scrollTrigger: {
          trigger: fadeInImg1.current,
          start: 'top 10%',
          end: 'bottom 40%',
          scrub: true
        }
      }
    )
  }, [])
  return (
    <>
      <div className="relative h-[300vh] w-screen">
        <img src="/heroBG.png"
          className="h-screen w-screen opacity-15 fixed -z-20 top-0 left-0"
          ref={fadeoUTRef}
          alt="" />

        <div className="w-screen h-screen fixed z-30">
          <RiveComponent />
        </div>

      {/* <div className="fixed -z-10 top-1/2  h-screen w-screen">
        <h1 className={`text-center text-[64px] font-bold ${poppins.className} text-white`}>The Infrastructure Layer</h1>
        <h1 className={`text-center text-[64px] font-bold ${poppins.className} text-white`}>for Agentic AI.</h1>
      </div> */}

        <div className="2nd_screen w-screen h-screen flex flex-col items-center justify-center my-auto fixed z-10 mt-28" ref={fadeInRef}> 
          <div className="imgContainer w-screen h-screen fixed top-0 left-0">
            <div className="flex justify-center items-center  top-0 left-0">
              <img src="./supabase-postgres.png" alt="" className="h-auto w-[500px] object-cover top-0 left-0 -mt-40 ml-20" ref={fadeInImg1} />
              <img src="./github.png" alt="" className="h-auto w-[800px] object-cover " />
            </div>

            <div className="flex justify-center items-center absolute top-0 left-0">
              <img src="./calendly.png" alt="" className="w-[400px] h-auto mt-[320px] ml-30 " ref={fadeInImg2}/>
              <img src="Group 151.png" alt="" className="w-[400px] h-auto mt-[320px] ml-[880px] " />
            </div>

            <div className="flex justify-center items-center absolute top-0 left-0">
              <img src="./asana.png" alt="" className="w-[650px] h-auto mt-[610px] ml-[150px]" ref={fadeInImg3}/>
              <img src="./youtube.png" alt="" className="w-[800px] h-auto mt-[310px] ml-[120px]" />
            </div>
          </div>

          <div className="z-20">
            <h1 className={`text-center text-[64px] font-bold ${poppins.className} text-white`}><span className="mr-20">Unify your</span> <span className="ml-20">tools with</span> <br /> <span className="ml-20"> high-performance     </span> <span className="ml-20">MCP infrastructure.</span></h1>
            <h1 className={`text-center ${inter.className} text-[#6C6C6C] font-semibold text-[24px] mt-5`}>Instant access to 100+ tools with secure, reliable <br /> API infrastructure — ready for scale.</h1>
            <div className="flex items-center justify-center mt-10 gap-[45px]">
              <div className="p-[5px] h-[fit] w-fit rounded-[50px]  bg-gradient-to-r from-[#212121] via-[#737373] via-[#212121] via-[#737373] to-[#212121]">
                <h1 className={`${inter.className} font-semibold text-[16px] text-black bg-white px-[20px] py-[10px]  rounded-[50px] `}>Get Started</h1>
              </div>
              <div className="pt-[1px] h-fit bg-white rounded-[50px] w-[140px] text-center">
                <h1 className={`${inter.className} font-semibold text-[16px] text-white bg-gradient-to-r from-[#313131] via-[#000000] to-[#313131] rounded-[50px] px-[20px] py-[10px]`}>Sign in</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}