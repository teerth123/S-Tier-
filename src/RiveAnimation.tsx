import { useEffect, useRef } from "react";
import {
  Rive,
  Layout,
  Fit,
  Alignment,
  StateMachineInputType,
} from "@rive-app/react-canvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

type Props = {
  className?: string;
};

gsap.registerPlugin(ScrollTrigger);

const ScrollRiveStateMachine = ({ className }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const riveRef = useRef<any>(null);
  const scrollInputRef = useRef<any>(null);

  useEffect(() => {
    const headline1 = document.querySelector(".willFadeOut");
    if (!headline1) return;
    gsap.to(headline1, {
      fontSize: "0.7rem",
      opacity: 0,
      scrollTrigger: {
        trigger: ".willFadeOut",
        scrub: 2,
        start: "top 0%",
        end: "bottom 60%",
      },
    });
  }, []);

  // ✅ PHOTO FADE-IN EFFECT THROUGHOUT ENTIRE HERO SCROLL
  useEffect(() => {
    const fadeInElements = [
      { selector: ".fade-in-photo-1", delay: 0 },
      { selector: ".fade-in-photo-2", delay: 0.3 },
      { selector: ".fade-in-photo-3", delay: 0.6 },
    ];

    fadeInElements.forEach(({ selector, delay }) => {
      const el = document.querySelector(selector);
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero", // Use the entire hero section
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smooth animation tied to scroll progress
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const headline2 = document.querySelector(".willFadeIn");
    if (!headline2) return;
    gsap.to(headline2, {
      opacity: 1,
      fontSize: "130rem",
      scrollTrigger: {
        trigger: ".willFadeIn",
        scrub: true,
        start: "top 20%",
        end: "bottom 80%",
      },
    });
  }, []);

  useEffect(() => {
    const riveCard = document.querySelector(".riveCard");
    if (!riveCard) return;
    gsap.fromTo(
      riveCard,
      { scale: 1.2 },
      {
        x: -10,
        y: 140,
        scale: 0.3,
        scrollTrigger: {
          trigger: ".riveCard",
          start: "top 10%",
          end: "bottom 20%",
          scrub: 2,
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    riveRef.current = new Rive({
      src: "/slash_card.riv",
      canvas: canvasRef.current,
      autoplay: true,
      stateMachines: ["State Machine 1"],
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center,
      }),
      onLoad: () => {
        const inputs = riveRef.current.stateMachineInputs("State Machine 1");
        const input = inputs.find((i: any) => i.name === "scroll number");

        if (input && input.type === StateMachineInputType.Number) {
          scrollInputRef.current = input;
          input.value = 0;
        }

        riveRef.current.resizeDrawingSurfaceToCanvas();
      },
    });

    return () => riveRef.current?.cleanup();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      const value = scrollPercent * 100;

      if (scrollInputRef.current) {
        scrollInputRef.current.value = value;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${className} fixed top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none
         w-[500px] h-[500px]
        sm:w-[850px] sm:h-[850px]
        md:w-[1000px] md:h-[1000px]
        lg:w-[1200px] lg:h-[1200px]
        xl:w-[1400px] xl:h-[1400px]
      `}
    >
      <canvas
        ref={canvasRef}
        width={2000}
        height={2000}
        className="w-full h-full"
      />
    </div>
  );
};

// export default ScrollRiveStateMachine;

// import ScrollRiveStateMachine from "./ScrollRiveStateMachine";

function Hero() {
  return (
    <div className="hero relative w-full min-h-[200vh] overflow-visible">

      {/* ✅ PHOTOS - Not fixed anymore */}
      <div className="photos absolute inset-0 z-0 pointer-events-none max-h-screen">
        <div className="photo-row fade-in-photo-1 absolute top-[105%] left-[10%] right-[10%] flex justify-between px-10 opacity-0">
          <img src="/1.png" alt="" className="w-56 h-56" />
          <img src="/5.png" alt="" className="w-48 h-48" />
        </div>
        <div className="photo-row fade-in-photo-2 absolute top-[145%] left-0 right-0 flex justify-between px-10 opacity-0">
          <img src="/3.png" alt="" className="w-96 h-56" />
          <div className="w-24 h-24" />
        </div>
        <div className="photo-row fade-in-photo-3 absolute top-[175%] left-[12%] right-[5%] flex justify-between px-10 opacity-0">
          <img src="/4.png" alt="" className="w-56 h-56 rounded-xl" />
          <img src="/2.png" alt="" className="w-96 h-56" />
        </div>
      </div>

      {/* 👇 Rive */}
      <ScrollRiveStateMachine className="riveCard z-10" />

      {/* 👇 First Text Block */}
      <div className="willFadeOut relative z-20 pt-[55vh]">
        <h1 className="text-5xl lg:text-6xl font-playfair font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#ffeecc] to-white text-center">
          The era of one-size-fits-all <br />
          <span>banking is over</span>
        </h1>
      </div>

      {/* 👇 Second Text Block */}
      <div className="willFadeIn z-10 opacity-0 fixed flex-col items-center top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/4 z-25 text-white">
        <h1 className="text-4xl xl:text-6xl font-playfair font-semibold text-center leading-tight">
          <span className="whitespace-nowrap block">We're reimagining banking</span>
          <span className="inline-flex gap-10 whitespace-nowrap">
            <span className="-ml-10">to accelerate</span>
            <span className="ml-16">your success</span>
          </span>
        </h1>
        <h3 className="font-roboto text-xl mt-7 text-[#aeb0b6] font-medium">
          Traditional banks force everyone into the same box – Slash builds <br />
          features specifically for your industry's needs.
        </h3>
      </div>

      {/* 👇 Buttons */}
      <div className="fixed left-1/2 top-[calc(55vh+10rem)] z-10 -translate-x-1/2 flex justify-center gap-5">
        <div className="p-1 cursor-pointer border border-slate-400 bg-gradient-to-r from-[#5d5f6b] via-[#27292f] to-[#5d5f6b] rounded-2xl">
          <div className="bg-[#e2e3e8] text-slate-800 rounded-2xl px-5 py-2 font-medium">Contact Sales</div>
        </div>
        <div className="cursor-pointer bg-gradient-to-r from-[#2d2f37] via-[#131315] to-[#2d2f37] border-t border-slate-400 text-white font-medium rounded-2xl px-5 py-2">
          Open Account
        </div>
      </div>

      {/* ✅ ScrollTrigger Anchor */}
      <div id="photo-trigger" className="h-[1px] w-full absolute bottom-0" />
    </div>
  );
}

export default Hero;
