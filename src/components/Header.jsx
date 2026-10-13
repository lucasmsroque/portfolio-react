import { useState } from 'react';
import { sections, profile } from '../data/portfolio.js';
import useActiveSection from '../hooks/useActiveSection.js';
import s from './Header.module.css';

const ids = sections.map((x) => x.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  return (
    <header className={s.header}>
      <a className={s.brand} href="#sobre">{profile.name}</a>
      <button className={s.toggle} type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
        {open ? 'Fechar' : 'Menu'}
      </button>
      <nav id="menu" className={`${s.nav} ${open ? s.open : ''}`} aria-label="Seções">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
