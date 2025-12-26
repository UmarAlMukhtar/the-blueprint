"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react"; // Or use 'Crosshair'

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Hidden on load
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e: MouseEvent) => {
      // Show cursor on first move
      gsap.to(cursor, { opacity: 1, duration: 0.5 });
      
      // Smooth follow logic (QuickTo is faster for cursors)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // Add hover effect for pointers
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable element
      const isClickable = target.closest("a, button, .cursor-pointer");
      
      gsap.to(cursor, {
        scale: isClickable ? 2.5 : 1,
        rotation: isClickable ? 45 : 0,
        duration: 0.3,
        ease: "back.out(1.7)", // Adds a nice pop effect
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
    >
      <Plus className="text-accent w-6 h-6" strokeWidth={1} />
    </div>
  );
}