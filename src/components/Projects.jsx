import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
    </Section>
  );
}
