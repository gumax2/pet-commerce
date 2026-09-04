import { NextResponse } from 'next/server';
import { calculateOffer } from '@/lib/commerce';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const offer = calculateOffer(body.offerId);
    return NextResponse.json({ ok: true, offerId: offer.id, quantity: offer.quantity, total: offer.price, paymentReady: Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN) });
  } catch {
    return NextResponse.json({ ok: false, error: 'Dados de checkout inválidos.' }, { status: 400 });
  }
}
