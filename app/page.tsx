import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}