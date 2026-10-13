import { useState } from 'react';
import Cover from './Covers.jsx';
import s from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const { title, description, tags, images, highlights, learned, links } = project;
  const cover = images[0];
  return (
    <article className={s.card}>
      <div className={s.cover}>
        {cover ? <img src={cover.src} alt={cover.alt} loading="lazy" /> : <Cover type={project.cover} title={title} />}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className={s.tags}>{tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className={s.actions}>
          {links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? 'Ocultar detalhes' : 'Ver detalhes'}
          </button>
        </div>
        {open && (
          <div className={s.details}>
            <ul>{highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            <p><strong>O que aprendi:</strong> {learned}</p>
            {images.slice(1).map((img) => <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />)}
          </div>
        )}
      </div>
    </article>
  );
}
