"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollCounter() {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateFromWindowScroll = () => {
      const max = ScrollTrigger.maxScroll(window);
      const y = window.scrollY;
      const pct = Math.max(0, Math.min(1, max ? y / max : 0));
      const progress = Math.round(pct * 100);
      if (counterRef.current) {
        counterRef.current.innerText = progress < 10 ? `0${progress}%` : `${progress}%`;
      }
    };
    // Update on every window scroll
    window.addEventListener("scroll", updateFromWindowScroll, { passive: true });

    // Keep percent accurate on refreshes/resizes (ScrollTrigger can change maxScroll)
    ScrollTrigger.addEventListener("refresh", updateFromWindowScroll);
    window.addEventListener("resize", updateFromWindowScroll);

    // Initial paint
    updateFromWindowScroll();

    return () => {
      window.removeEventListener("scroll", updateFromWindowScroll);
      ScrollTrigger.removeEventListener("refresh", updateFromWindowScroll);
      window.removeEventListener("resize", updateFromWindowScroll);
    };
  }, []);

  return (
    <div className="fixed top-8 left-8 z-50 pointer-events-none mix-blend-difference">
      <span 
        ref={counterRef} 
        className="font-mono text-sm font-bold text-white tracking-widest"
      >
        00%
      </span>
    </div>
  );
}
