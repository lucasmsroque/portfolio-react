import { useState } from 'react';
import Section from './Section.jsx';
import { profile } from '../data/portfolio.js';
import s from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Sem backend: o formulário abre o app de e-mail já preenchido
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo portfólio: ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contato" title="Contato">
      <div className={s.grid}>
        <form onSubmit={handleSubmit} className={s.form}>
          <label>Seu nome<input name="name" value={form.name} onChange={update} required /></label>
          <label>Mensagem<textarea name="message" rows="5" value={form.message} onChange={update} required /></label>
          <button type="submit">Enviar por e-mail</button>
          <p role="status">{sent && `Abrindo seu app de e-mail. Se nada abrir, escreva para ${profile.email}.`}</p>
        </form>
        <ul className={s.links}>
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          {profile.socials.map((l) => <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>)}
        </ul>
      </div>
    </Section>
  );
}
