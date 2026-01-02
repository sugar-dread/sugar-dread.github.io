import './App.css';
import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Publications from './components/sections/Publications';
import Certificates from './components/sections/Certificates';
import Languages from './components/sections/Languages';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
        <Certificates />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}

export default App;