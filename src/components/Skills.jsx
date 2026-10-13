import Section from './Section.jsx';
import { skills } from '../data/portfolio.js';
import s from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      {skills.map(({ group, items }) => (
        <div key={group} className={s.row}>
          <h3>{group}</h3>
          <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      ))}
    </Section>
  );
}
