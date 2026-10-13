import Section from './Section.jsx';
import { profile } from '../data/portfolio.js';
import s from './About.module.css';

export default function About() {
  const { name, role, summary, about, photo, facts } = profile;
  const parts = name.split(' ');
  const initials = parts[0][0] + parts[parts.length - 1][0];
  return (
    <div className={s.blueprint}>
    <Section id="sobre" title="Sobre mim">
      <div className={s.grid}>
        <div>
          <h1 className={s.name}>{name}</h1>
          <p className={s.role}>{role}</p>
          <p className={s.summary}>{summary}</p>
          {about.map((t) => <p key={t}>{t}</p>)}
          <a className={s.cta} href="#projetos">Ver projetos</a>
        </div>
        {photo ? <img className={s.photo} src={photo} alt={`Foto de ${name}`} /> : <div className={s.photo} aria-hidden="true">{initials}</div>}
      </div>
      <dl className={s.facts}>
        {facts.map((f) => (
          <div key={f.label}><dt>{f.value}</dt><dd>{f.label}</dd></div>
        ))}
      </dl>
    </Section>
    </div>
  );
}
