import { useEffect, useRef } from "react";
import {
  Rive,
  Layout,
  Fit,
  Alignment,
  StateMachineInputType,
} from "@rive-app/react-canvas";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

type Props = {
  className?: string;
};

gsap.registerPlugin(ScrollTrigger)

const ScrollRiveStateMachine = ({ className }: Props) => {


  useEffect(() => {
    const headline1 = document.querySelector(".willFadeOut")
    if (!headline1) {
      console.log("element not landed yet")
      return
    }
    gsap.to(headline1,
      {
        fontSize: "0.7rem",
        opacity: 0,
        scrollTrigger: {
          trigger: ".willFadeOut",
          scrub: 2,
          start: "top 0%",
          end: "bottom 60%",

        }
      }
    )
  }, [])

  useEffect(() => {
    const headline2 = document.querySelector(".willFadeIn")
    if (!headline2) {
      console.log("headline2 not mounted")
      return
    }

    gsap.to(headline2, {
      opacity: 1,
      fontSize: "130rem",
      scrollTrigger: {
        trigger: ".willFadeIn",
        scrub: true,
        start: "top 20%",
        end: "bottom 80%"
      }
    })
  }, [])

  useEffect(() => {
    const riveCard = document.querySelector(".riveCard")
    if (!riveCard) {
      console.log("card not mounted")
      return
    }
    gsap.to(riveCard, {
      x: -10,
      y: 140,
      scale: "0.3",
      // rotate:-30,
      // width:"0.9rem",
      scrollTrigger: {
        trigger: ".riveCard",
        start: "top 10%",
        end: "bottom 20%",
        scrub: 2
      }
    })
  }, [])

  useEffect(()=>{
    const phone = document.querySelector(".phone")
    if(!phone){
      console.log("phone not mounted")
      return
    }

    gsap.to(phone, {
      opacity:0,
      scrollTrigger:{
        trigger:".phone",
        scrub:true,
        start: "top 0%",
        end: "bottom 60%",
      }
    })
  }, [])



  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const riveRef = useRef<any>(null);
  const scrollInputRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    riveRef.current = new Rive({
      src: "/final.riv",
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
    <>
      <div
        className={className}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          width: "500px",
          height: "500px",
          pointerEvents: "none",
        }}
      >
        <canvas
          className=""
          id="scroll-example"
          ref={canvasRef}
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
          }}

        />
      </div>

    </>
  );
};


function Hero() {
  return (
    <div className="hero relative w-full min-h-[200vh] overflow-visible">

      <img src="phone2.png" id="phone" className="phone absolute h-[500px] w-[720px]  -mt-20  top-[20%] left-[48%] 2xl:left-[48%] -translate-x-1/2 -translate-y-1/2 z-10  xl:left-[47%] lg:left-[46%] md:left-[45%] sm:left-[44%] xs:left-[43%]" alt="" />
      <ScrollRiveStateMachine className="riveCard absolute  -mt-20 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 " />

      <div id="willFadeOut" className="willFadeOut relative z-10 pt-[55vh] sm:pt-[50vh] md:pt-[55vh] lg:pt-[55vh] ">
        <h1 className="text-5xl lg:text-6xl md:text-6xl sm:text-5xl font-playfair font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#ffeecc] to-white text-center">
          The era of one-size-fits-all <br />
          <span> banking is over</span>
        </h1>
      </div>

      {/* part -2 */}
      <div className="willFadeIn opacity-0 fixed flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4  z-25 text-white ">
        <h1 className="text-4xl 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl font-playfair font-semibold text-center leading-tight">
          <span className="whitespace-nowrap block">We're reimagining banking</span>
          <span className="inline-flex gap-10 whitespace-nowrap">
            <span className="-ml-10">to accelerate</span>
            <span className="ml-16">your success</span>
          </span>
        </h1>

        <h3 className="font-roboto text-xl mt-7 text-[#aeb0b6] font-medium">Traditional banks force everyone into the same box – Slash builds <br /> features specifically for your industry's needs.</h3>
      </div>

      <div className="fixed left-1/2 top-[calc(55vh+10rem)] z-10 -translate-x-1/2 flex justify-center gap-5">
        <div className="p-1 cursor-pointer border border-slate-400 bg-gradient-to-r from-[#5d5f6b] via-[#27292f] to-[#5d5f6b] rounded-2xl">
          <div className="bg-[#e2e3e8] text-slate-800 rounded-2xl px-5 py-2 font-medium">Contact Sales</div>
        </div>
        <div className="cursor-pointer bg-gradient-to-r from-[#2d2f37] via-[#131315] to-[#2d2f37] border-t border-slate-400 text-white font-medium rounded-2xl px-5 py-2">
          Open Account
        </div>
      </div>
    </div>
  );
}


export default Hero;
