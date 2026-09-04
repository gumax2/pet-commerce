const benefits = [
  'Formato interativo para a rotina de alimentação',
  'Reutilizável e simples de usar',
  'Adequado para oferecer ração, petiscos e alimentos compatíveis',
  'Uso para cães e gatos',
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="badge">PET CARE • NOVO</div>
        <h1>Uma forma diferente de transformar a hora da comida.</h1>
        <p className="lead">
          Comedouro lento + tapete de lamber para tornar a rotina de alimentação do seu pet mais interativa.
        </p>
        <div className="actions">
          <a className="button primary" href="#oferta">Conhecer o produto</a>
          <a className="button secondary" href="#como-funciona">Como funciona</a>
        </div>
        <div className="product-card" aria-label="Produto em destaque">
          <div className="product-visual">🐶<span>🐾</span></div>
          <div>
            <small>PET COMMERCE • PRODUTO EM DESTAQUE</small>
            <h2>Tapete de Lamber + Comedouro Lento</h2>
            <p>Produto reutilizável para uma rotina de alimentação mais interativa.</p>
          </div>
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="eyebrow">SIMPLES DE USAR</div>
        <h2>Prepare. Posicione. Deixe seu pet explorar.</h2>
        <div className="steps">
          {['Coloque o alimento', 'Posicione o tapete', 'Deixe seu pet explorar'].map((item, i) => (
            <article className="step" key={item}><strong>0{i + 1}</strong><h3>{item}</h3><p>Uma etapa simples para incorporar o produto à rotina.</p></article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div><div className="eyebrow">POR QUE USAR?</div><h2>Mais interação na rotina do seu pet.</h2></div>
        <ul>{benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul>
      </section>

      <section className="offer" id="oferta">
        <div className="eyebrow">OFERTA DE LANÇAMENTO</div>
        <h2>Pet Slow — 1 unidade</h2>
        <p>Preço de teste. O valor final será confirmado após validação de frete e taxas.</p>
        <div className="price">R$ 49,90</div>
        <a className="button primary" href="/checkout">Quero experimentar</a>
        <small>Pagamento seguro • checkout protegido</small>
      </section>

      <footer>Pet Commerce MVP • Desenvolvido para validação de produto</footer>
    </main>
  );
}
