"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, User, Calendar } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const planData = [
  {
    type: "Academic",
    title: "B.Tech CSE // Semester 06",
    detail: "Core focus on Compiler Design and Software Engineering. Researching AI-integrated systems for my Major Project phase.",
    date: "Current Phase",
    icon: <GraduationCap className="w-5 h-5" />,
    status: "Execution"
  },
  {
    type: "Hardware", // Using 'Hardware' for Physical Health
    title: "Vibe & Vitality Protocol",
    detail: "Implementing a 4-day strength split and 10k steps daily to maintain peak cognitive performance during long dev sessions.",
    date: "Daily",
    icon: <User className="w-5 h-5" />,
    status: "Active"
  },
  {
    type: "Mental",
    title: "The Stoic Developer",
    detail: "Practicing 15-min morning mindfulness and 'digital sunsets' at 10 PM to reset my dopamine baseline and reduce burnout.",
    date: "Mental Health",
    icon: <div className="w-2 h-2 rounded-full bg-accent animate-ping" />, // Custom animated dot
    status: "Daily Reset"
  },
  {
    type: "Career",
    title: "Industry Alignment",
    detail: "Transitioning from academic theory to industry-ready builds (Next.js/GSAP/AI) for the 2026 recruitment cycle.",
    date: "Q3 - Q4 2026",
    icon: <Calendar className="w-5 h-5" />,
    status: "Pre-load"
  }
];

export default function Plans() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none none",
      }
    });

    tl.from(".plans-header", { x: -50, opacity: 0, duration: 1 })
      .from(".plan-item", {
        x: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="plans-header mb-20 border-l-2 border-accent pl-6 md:pl-10">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] block mb-2">/ Life Logic</span>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Trajectory <span className="text-white/10 font-light italic">2026</span>
          </h3>
        </div>

        <div className="space-y-4">
          {planData.map((plan, i) => (
            <div 
              key={i} 
              className="plan-item glass group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-accent"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="p-3 bg-white/5 rounded-xl text-accent group-hover:scale-110 transition-transform">
                  {plan.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{plan.type}</span>
                  <h4 className="text-xl font-bold tracking-tight">{plan.title}</h4>
                </div>
              </div>

              <div className="md:max-w-md w-full">
                <p className="text-gray-400 text-sm leading-relaxed">{plan.detail}</p>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-[10px] font-mono text-accent uppercase mb-1">{plan.date}</p>
                <div className="flex items-center gap-2 justify-start md:justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">{plan.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}