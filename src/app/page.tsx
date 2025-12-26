import Hero from "./components/Hero";
import Goals from "./components/Goals";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Hero />
      <div className="relative z-10 bg-background">
        <Goals />
        {/* <Projects />
        <Footer /> */}
      </div> 
    </main>
  );
}