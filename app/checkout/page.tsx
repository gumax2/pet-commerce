export default function CheckoutPage() {
  return (
    <main style={{maxWidth: 760, margin: '0 auto', padding: '64px 24px'}}>
      <a href="/">← Voltar</a>
      <h1 style={{fontSize: 48, letterSpacing: '-.04em'}}>Finalizar pedido</h1>
      <p>O checkout está preparado para receber a integração de pagamento. Nenhum pagamento real é processado nesta V1.</p>
      <div style={{marginTop: 32, padding: 24, border: '1px solid #ddd', borderRadius: 16}}>
        <strong>Pet Slow — 1 unidade</strong>
        <div style={{fontSize: 32, fontWeight: 800, margin: '12px 0'}}>R$ 49,90</div>
        <button disabled style={{padding: '14px 20px', borderRadius: 10, border: 0}}>Checkout em integração</button>
      </div>
    </main>
  );
}
