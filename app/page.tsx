import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import AgentTrace from "@/components/AgentTrace";
import StackMap from "@/components/StackMap";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import NeuralField from "@/components/NeuralField";
import Cursor from "@/components/Cursor";
import Boot from "@/components/Boot";

export default function Home() {
  return (
    <div className="scanlines relative">
      <Boot />
      <Cursor />
      <NeuralField />
      <div className="noise" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Systems />
        <AgentTrace />
        <StackMap />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
