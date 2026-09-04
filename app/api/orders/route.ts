import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.offerId) return NextResponse.json({ ok: false, error: 'offerId é obrigatório.' }, { status: 400 });

  // Persistência será ativada quando DATABASE_URL estiver configurada.
  return NextResponse.json({
    ok: true,
    order: {
      status: 'PENDING',
      offerId: body.offerId,
      customer: body.customer ?? null,
    },
    databaseReady: Boolean(process.env.DATABASE_URL),
  }, { status: 201 });
}
