import s from './Covers.module.css';

// Capas feitas a partir do conteúdo real dos projetos que não têm captura de tela
function Architecture() {
  return (
    <svg className={s.svg} viewBox="0 0 320 240" role="img" aria-label="Diagrama: o container carrega os micros Cardápio e Pedido; o Cardápio dispara o evento order:add e o Pedido escuta">
      <defs>
        <marker id="seta" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8z" style={{ fill: 'var(--mark)' }} />
        </marker>
      </defs>
      <g className={s.box}>
        <rect x="90" y="20" width="140" height="44" rx="4" /><text x="160" y="47">container :3000</text>
        <rect x="14" y="140" width="122" height="44" rx="4" /><text x="75" y="167">menu :3001</text>
        <rect x="184" y="140" width="122" height="44" rx="4" /><text x="245" y="167">order :3002</text>
      </g>
      <path className={s.line} d="M130 64 L80 140 M190 64 L240 140" />
      <path className={s.event} d="M138 162 H182" markerEnd="url(#seta)" />
      <text className={s.label} x="160" y="216">evento order:add</text>
    </svg>
  );
}

function Code() {
  return (
    <pre className={s.code} role="img" aria-label="Trecho do algoritmo em Visualg com a regra de ano bissexto">
{`se ((i % 4 = 0) e (i % 100 <> 0))
   ou (i % 400 = 0) entao
   diasVividos <- diasVividos + 366
senao
   diasVividos <- diasVividos + 365
fimse`}
    </pre>
  );
}

export default function Cover({ type, title }) {
  if (type === 'architecture') return <Architecture />;
  if (type === 'code') return <Code />;
  return <span aria-hidden="true">{title.slice(0, 2)}</span>;
}
