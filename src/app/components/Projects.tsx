"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  { title: "ZenFocus", category: "Productivity", desc: "Deep work companion.", size: "md:col-span-2", color: "from-blue-500/10" },
  { title: "Sentience", category: "Design", desc: "Component library.", size: "md:col-span-1", color: "from-purple-500/10" },
  { title: "Vault-26", category: "Web3", desc: "Asset management.", size: "md:col-span-1", color: "from-orange-500/10" },
  { title: "Green Ledger", category: "OS", desc: "Sustainability tracker.", size: "md:col-span-2", color: "from-emerald-500/10" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal cards with a stagger
    gsap.fromTo(".project-card", 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Background text movement - confined to X axis
    gsap.to(".projects-bg", {
      x: -300,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, { scope: sectionRef });

  return (
    /* overflow-x-hidden here is the key fix */
    <section ref={sectionRef} className="relative py-24 w-full overflow-x-hidden bg-background">
      
      {/* Background text: Fixed with pointer-events-none and select-none */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h2 className="projects-bg text-[18vw] font-black text-white/2 whitespace-nowrap uppercase leading-none">
          Build Build Build Build Build Build Build Build
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-16">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">/ Portfolio</span>
          <h3 className="text-5xl font-bold mt-4 tracking-tighter">THE DREAM BIN</h3>
        </div>

        {/* Bento Grid layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {projectData.map((project, i) => (
            <div 
              key={i} 
              className={`project-card glass group relative rounded-3xl p-8 min-h-80 flex flex-col justify-end overflow-hidden transition-all duration-500 hover:border-white/20 ${project.size}`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <p className="text-[10px] font-mono text-accent uppercase mb-2 tracking-widest">{project.category}</p>
                <h4 className="text-3xl font-bold mb-2 tracking-tight">{project.title}</h4>
                <p className="text-gray-400 text-sm max-w-70 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex gap-4">
                  <Github className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                  <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
              <span className="absolute top-8 right-8 text-6xl font-black text-white/3 italic">0{i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}