# Pet Commerce

MVP de e-commerce de produto único, construído para evoluir para um Commerce Agent.

## Estado atual
- Landing page responsiva
- Oferta de 1 e 2 unidades
- Endpoint inicial de checkout
- Modelo Prisma para produtos e pedidos
- Painel administrativo inicial
- Variáveis de ambiente preparadas para Supabase/PostgreSQL, Mercado Pago, Meta/GA e Patzo

## Rodar localmente

```bash
npm install
npm run dev
```

## Próximas integrações
1. Supabase/PostgreSQL + Prisma
2. Mercado Pago e webhook
3. Eventos Meta/GA4
4. Integração de fulfillment com fornecedor
5. Autenticação e painel admin protegido
6. Product Hunter / Offer Builder / Ad Analyst

## Produto inicial
SKU: `PZCL001L`
Fornecedor: Patzo
Custo de referência: R$ 15,20
Preço de teste: R$ 49,90

Valores comerciais precisam ser validados com frete, taxas e impostos antes de tráfego pago.
