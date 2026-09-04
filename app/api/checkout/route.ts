import { NextResponse } from 'next/server';
import { calculateOffer } from '@/lib/commerce';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const offer = calculateOffer(body.offerId);

  // V1: valida a oferta e prepara a ordem. A criação do pagamento real
  // será habilitada quando MERCADOPAGO_ACCESS_TOKEN estiver configurado.
  return NextResponse.json({
    ok: true,
    checkout: {
      offerId: offer.id,
      quantity: offer.quantity,
      total: offer.price,
      paymentReady: Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN),
    },
  });
}
