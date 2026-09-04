export const offers = [
  { id: 'single', title: '1 unidade', quantity: 1, price: 49.9, badge: 'Mais simples' },
  { id: 'duo', title: '2 unidades', quantity: 2, price: 79.9, badge: 'Melhor valor' },
] as const;

export function calculateOffer(offerId: string) {
  return offers.find((offer) => offer.id === offerId) ?? offers[0];
}
