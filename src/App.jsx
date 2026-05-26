import { usePortfolioData } from './hooks/usePortfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const { data, loading } = usePortfolioData();

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-cream dark:bg-ink flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      </div>
    );
  }

  return <PortfolioContent data={data} />;
}

function PortfolioContent({ data }) {
  useScrollReveal();
  const { profile, skills, projects, experience, education } = data;

  return (
    <div className="bg-cream font-body text-ink dark:bg-ink dark:text-cream transition-colors duration-300">
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <div className="h-px bg-border dark:bg-gray-800 mx-6 md:mx-16" />
      <Education education={education} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}
