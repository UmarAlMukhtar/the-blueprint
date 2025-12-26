"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
    { 
      id: "01", 
      title: "Motion Engineering", 
      desc: "Deep diving into advanced GSAP, Three.js, and Shaders to create high-performance spatial interfaces.",
      tag: "Frontend",
      level: "10%" 
    },
  { 
    id: "02", 
    title: "Advanced AI & LLMs", 
    desc: "Mastering RAG (Retrieval-Augmented Generation) and vector database orchestration for the Neural Index project.",
    tag: "Intelligence",
    level: "0%" 
  },
  { 
    id: "03", 
    title: "Cloud-Native AI Ops", 
    desc: "Deploying scalable AI microservices using Docker and Serverless functions to power real-time web intelligence.",
    tag: "Infrastructure",
    level: "0%" 
}
];

export default function Skills() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none none",
      }
    });

    tl.from(".skills-header", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(".skill-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6")
    // Animate the internal progress bars
    .from(".progress-fill", {
      scaleX: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.inOut"
    }, "-=0.5");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      id="skills"
      className="relative py-32 px-6 md:px-16 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="skills-header mb-20 border-l-2 border-accent pl-6 md:pl-10">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] block mb-2">
            / Growth Stack
          </span>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Skill <span className="text-white/10 font-light italic">Lab</span> 2026
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="skill-card glass group relative p-10 rounded-3xl overflow-hidden transition-colors duration-500 hover:bg-white/5"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent transition-all duration-700 group-hover:w-full" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-black text-white/5 font-mono group-hover:text-accent/30 transition-colors duration-500">
                  {skill.id}
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] border border-white/10 px-3 py-1.5 rounded-full group-hover:border-accent/50 group-hover:text-white transition-colors duration-500">
                  {skill.tag}
                </span>
              </div>

              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                {skill.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 min-h-[60px]">
                {skill.desc}
              </p>

              {/* Learning Progress UI */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <span>Proficiency</span>
                  <span className="text-accent">{skill.level}</span>
                </div>
                <div className="w-full h-[2px] bg-white/5 overflow-hidden">
                  <div 
                    className="progress-fill h-full bg-accent origin-left" 
                    style={{ width: skill.level }}
                  />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-4 h-4 border-r-2 border-b-2 border-accent/40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Pattern Background Detail */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
    </section>
  );
}