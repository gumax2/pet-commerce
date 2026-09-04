const metrics = [
  ['Pedidos', '0'],
  ['Faturamento', 'R$ 0,00'],
  ['Investimento', 'R$ 0,00'],
  ['CAC', '—'],
  ['ROAS', '—'],
  ['Lucro', '—'],
];

export default function AdminPage() {
  return (
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '56px 24px'}}>
      <p style={{fontSize: 12, fontWeight: 800, letterSpacing: '.12em'}}>PET COMMERCE / ADMIN</p>
      <h1 style={{fontSize: 48, letterSpacing: '-.04em'}}>Painel de operação</h1>
      <p style={{color: '#666'}}>Métricas reais entram aqui após conectar banco, pagamento e analytics.</p>
      <section style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, marginTop: 32}}>
        {metrics.map(([label, value]) => <article key={label} style={{padding: 20, border: '1px solid #ddd', borderRadius: 16}}><small>{label}</small><div style={{fontSize: 26, fontWeight: 800, marginTop: 8}}>{value}</div></article>)}
      </section>
    </main>
  );
}
