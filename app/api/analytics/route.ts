import { NextResponse } from 'next/server';

const allowedEvents = new Set(['ViewContent', 'AddToCart', 'InitiateCheckout', 'Purchase']);

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.event || !allowedEvents.has(body.event)) {
    return NextResponse.json({ ok: false, error: 'Evento inválido.' }, { status: 400 });
  }

  // V1: endpoint preparado para persistência/Meta CAPI.
  return NextResponse.json({ ok: true, event: body.event });
}
