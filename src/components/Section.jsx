import s from './Section.module.css';

// Wrapper reutilizável: toda seção compartilha espaçamento, largura e título
export default function Section({ id, title, children }) {
  return (
    <section id={id} className={s.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}
