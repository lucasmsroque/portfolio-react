import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './data/portfolio.js';

export default function App() {
  return (
    <>
      <a className="skip" href="#sobre">Pular para o conteúdo</a>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ padding: '2rem 1.25rem', textAlign: 'center', color: 'var(--muted)' }}>
        {profile.name}, {new Date().getFullYear()}
      </footer>
    </>
  );
}
