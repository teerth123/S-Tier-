import { useEffect, useRef } from "react";
import {
  Rive,
  Layout,
  Fit,
  Alignment,
  StateMachineInputType,
} from "@rive-app/react-canvas";

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

  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const riveRef = useRef<any>(null);
  const scrollInputRef = useRef<any>(null);