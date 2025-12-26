"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin outside the component
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const goals = [
  { 
    id: "01", 
    title: "Master GSAP", 
    desc: "Achieving high-end motion fidelity and complex parallax in web interfaces.",
    tag: "Technical"
  },
  { 
    id: "02", 
    title: "AI Integration", 
    desc: "Leveraging LLMs and vector databases to build proactive user experiences.",
    tag: "Innovation"
  },
  { 
    id: "03", 
    title: "Deep Focus", 
    desc: "Refining creative workflow through intentional deep work and digital minimalism.",
    tag: "Growth"
  }
];

export default function Goals() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Force ScrollTrigger to recalculate on mount
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%", // Triggers when the top of the section is 75% down the screen
        toggleActions: "play none none none",
        // markers: true, // Uncomment this to debug the trigger points!
      }
    });

    // 1. Header Entrance
    tl.from(".strategy-header", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    // 2. Staggered Card Entrance
    .from(".goal-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6"); // Starts halfway through the header animation

  }, { scope: container });

  return (
    <section 
      ref={container} 
      id="strategy"
      className="relative py-32 px-6 md:px-16 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="strategy-header mb-20 border-l-2 border-accent pl-6 md:pl-10">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] block mb-2">
            / 2026 Roadmap
          </span>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Strategy <span className="text-white/10 font-light italic">&</span> Vibe
          </h3>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, i) => (
            <div 
              key={i} 
              className="goal-card glass group relative p-10 rounded-3xl overflow-hidden transition-colors duration-500 hover:bg-white/5"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent transition-all duration-700 group-hover:w-full" />
              
              {/* ID Number */}
              <span className="text-4xl font-black text-white/5 font-mono mb-8 block group-hover:text-accent/30 transition-colors duration-500">
                {goal.id}
              </span>
              
              {/* Category Tag */}
              <div className="mb-6">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] border border-white/10 px-3 py-1.5 rounded-full group-hover:border-accent/50 group-hover:text-white transition-colors duration-500">
                  {goal.tag}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                {goal.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {goal.desc}
              </p>

              {/* Decorative Blueprint Corner */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-4 h-4 border-r-2 border-b-2 border-accent/40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Detail */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/2 -z-10" />
    </section>
  );
}