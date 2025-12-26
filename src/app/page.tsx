"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    // Parallax move for the background number
    gsap.to(".bg-2026", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal text animation
    gsap.from(".hero-title", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* BACKGROUND LAYER */}
      <h1 className="bg-2026 absolute text-[40vw] font-black opacity-10 select-none">
        2026
      </h1>
      
      {/* FOREGROUND LAYER */}
      <div className="z-10 text-center">
        <p className="hero-title text-blue-400 font-mono tracking-widest uppercase mb-4">The Blueprint</p>
        <h2 className="hero-title text-6xl md:text-8xl font-bold italic">MANIFESTO</h2>
      </div>
    </section>
  );
}