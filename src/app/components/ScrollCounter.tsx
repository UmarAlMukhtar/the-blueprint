"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollCounter() {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (counterRef.current) {
          const progress = Math.round(self.progress * 100);
          counterRef.current.innerText = progress < 10 ? `0${progress}%` : `${progress}%`;
        }
      },
    });
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
