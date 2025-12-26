"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLHeadingElement>(null);
  const titleText = "UMAR DRIVES";
  
  // Split into words to ensure proper wrapping on mobile
  const words = titleText.split(" ");

  useGSAP(() => {
    if (!container.current || !bgRef.current) return;

    // 1. Refresh ScrollTrigger to catch correct positions
    ScrollTrigger.refresh();

    const tl = gsap.timeline();

    // 2. The 2026 Parallax (The "Wow" background)
    gsap.to(bgRef.current, {
      y: 250, // Moves down as you scroll
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 1, // Smooth "catch-up" effect
        invalidateOnRefresh: true,
      },
    });

    // 3. Staggered Entrance for Title and UI
    tl.from(".char", {
      y: "120%",
      rotateX: -90,
      opacity: 0,
      stagger: 0.04,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(".hero-ui", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.7");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* BACKGROUND LAYER: One-line 2026 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 
          ref={bgRef}
          className="text-[45vw] font-black text-white/[0.04] leading-none tracking-tighter whitespace-nowrap will-change-transform"
        >
          2026
        </h1>
      </div>
      
      {/* FOREGROUND LAYER: Content */}
      <div className="relative z-10 w-full px-6 text-center">
        <span className="hero-ui text-accent font-mono tracking-[0.4em] text-[10px] md:text-xs uppercase mb-6 block">
          Establish // Reality
        </span>
        
        {/* Title with overflow-hidden wrappers for the "slide up" effect */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase flex flex-wrap justify-center gap-x-[0.3em]">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-flex overflow-hidden py-2">
              {word.split("").map((char, charIndex) => (
                <span 
                  key={charIndex} 
                  className="char inline-block origin-bottom"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h2>

        {/* Sub-UI elements */}
        <div className="hero-ui mt-8 flex flex-wrap items-center justify-center gap-4 text-gray-500 font-light text-[10px] md:text-xs uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Design
          </span>
          <span className="text-white/20">|</span>
          <span>Code</span>
          <span className="text-white/20">|</span>
          <span>Motion</span>
        </div>
      </div>

      {/* Blueprint Aesthetic Elements */}
      <div className="hero-ui absolute bottom-10 left-10 hidden md:block border-l border-white/10 pl-4 py-1">
        <p className="text-[9px] font-mono text-gray-600 tracking-widest uppercase">System_Logic</p>
        <p className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">Status: Manifesting_Future</p>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-ui absolute bottom-10 right-10 flex flex-col items-center gap-2">
        <span className="text-[9px] font-mono text-gray-600 uppercase vertical-text tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-bounce" />
      </div>

      {/* Subtle bottom divider for clean transition */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}