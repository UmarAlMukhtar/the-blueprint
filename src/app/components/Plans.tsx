"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, User, Calendar, Activity } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const planData = [
  {
    type: "Academic",
    title: "B.Tech CSE // Sem 06",
    detail: "Focusing on Compiler Design & AI-integrated systems for Major Project research.",
    date: "Current",
    icon: <GraduationCap className="w-6 h-6" />,
    status: "Execution"
  },
  {
    type: "Hardware",
    title: "Vibe & Vitality",
    detail: "4-day strength split & 10k steps to maintain peak cognitive performance.",
    date: "Daily",
    icon: <Activity className="w-6 h-6" />,
    status: "Active"
  },
  {
    type: "Mental",
    title: "The Stoic Dev",
    detail: "15-min mindfulness & digital sunsets at 10 PM to reset dopamine baselines.",
    date: "Routine",
    icon: <User className="w-6 h-6" />,
    status: "Reset"
  },
  {
    type: "Career",
    title: "Industry Alignment",
    detail: "Transitioning to industry-ready builds (Next.js/GSAP/AI) for 2026 recruitment.",
    date: "Q3 - Q4",
    icon: <Calendar className="w-6 h-6" />,
    status: "Pre-load"
  }
];

export default function Plans() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const horizontalEl = horizontalRef.current;
    if (!horizontalEl) return;

    // Calculate how much we need to move the slider to the left
    // (Total width of the scrolling container - the width of the screen)
    const totalWidth = horizontalEl.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(horizontalEl, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        id: "plans-horizontal",
        pin: true,           // Locks the section on screen
        start: "top top",    // Starts when top of section hits top of viewport
        end: () => `+=${scrollDistance}`, // Duration of the pin matches scroll distance
        scrub: 1,            // Links movement to scrollbar
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="plans-section" className="bg-background">
      <div className="h-screen flex items-center overflow-hidden">
        
        {/* Container that moves horizontally */}
        <div ref={horizontalRef} className="flex flex-nowrap items-center px-[10vw] gap-12">
          
          {/* Section Introduction Card */}
          <div className="w-[300px] md:w-[500px] shrink-0">
            <div className="border-l-2 border-accent pl-6">
              <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] block mb-2">/ Life Logic</span>
              <h3 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                TRAJECTORY <br />
                <span className="text-white/10 font-light italic text-4xl md:text-7xl">PHASE 2026</span>
              </h3>
              <p className="mt-6 text-gray-500 font-mono text-xs uppercase tracking-widest animate-pulse">
                Scroll to explore timeline →
              </p>
            </div>
          </div>

          {/* Individual Plan Cards */}
          {planData.map((plan, i) => (
            <div 
              key={i} 
              className="w-[300px] md:w-[400px] shrink-0 glass p-8 md:p-10 rounded-[2.5rem] relative group border-b-2 border-transparent hover:border-accent transition-all duration-500"
            >
              <span className="absolute top-6 right-8 text-6xl font-black text-white/[0.03] italic">0{i + 1}</span>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                  {plan.icon}
                </div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{plan.type}</span>
              </div>

              <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-accent transition-colors">{plan.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{plan.detail}</p>

              <div className="flex justify-between items-center border-t border-white/5 pt-6">
                <div>
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest">{plan.date}</p>
                  <p className="text-[9px] font-mono text-gray-600 uppercase italic">{plan.status}</p>
                </div>
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent animate-ping" />
                </div>
              </div>
            </div>
          ))}

          {/* Ending Spacer - Helps the transition feel cleaner */}
          <div className="w-[20vw] shrink-0 flex flex-col items-center justify-center opacity-20">
             <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent" />
             <p className="text-[10px] font-mono uppercase tracking-tighter rotate-90 mt-10 whitespace-nowrap">End of Log</p>
          </div>
        </div>
      </div>
    </section>
  );
}