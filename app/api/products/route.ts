import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ ok: true, databaseReady: false, products: [] });
  }

  const products = await db.product.findMany({ where: { active: true }, orderBy: { createdAt: 'desc' } });
  return NextResponse.json({ ok: true, databaseReady: true, products });
}
