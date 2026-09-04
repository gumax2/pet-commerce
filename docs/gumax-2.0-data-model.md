# Gumax 2.0 — Data Model

## Objetivo

Modelo inicial de dados para marketplace de skins CS2 com inventário Steam, preços YouPin, encomendas em CNY/RMB, wallet/ledger, pagamentos, KYC, Trust/Risk, Trade Protect, Upgrade, Downgrade, suporte e auditoria.

## Regras de negócio

1. O preço das skins em inventário acompanha o preço de mercado YouPin.
2. Encomendas usam o preço do fornecedor em CNY, uma cotação RMB/BRL capturada no pedido e um markup configurável.
3. Compras de skins de usuários usam histórico de mercado de 7 dias e regras configuráveis de liquidez/margem.
4. Uma skin recebida via trade não fica automaticamente disponível: pode permanecer em quarentena/Trade Protect.
5. O ledger é a fonte de verdade financeira; saldos disponíveis/retidos são valores operacionais derivados/cache.
6. Operações financeiras precisam de idempotência para impedir duplicação de webhooks/pagamentos.
7. KYC e Trust são dimensões diferentes: KYC identifica/verifica o usuário; Trust/Risk determina limites e permissões operacionais.
8. Documentos KYC devem ficar em storage privado e ser acessados apenas por referências seguras.
9. Eventos críticos de segurança, pagamento, trade, KYC e alterações administrativas devem gerar Audit Log.
10. Banimento/restrição não apaga histórico, saldo ou tickets; o acesso às operações é restringido conforme as regras.

## Máquina de pedido

`CREATED -> PAYMENT_PENDING -> PAYMENT_CONFIRMED -> RISK_REVIEW/FUNDS_AUTHORIZED -> PROCESSING -> TRADE_PENDING -> COMPLETED`

Rotas de exceção incluem `CANCELLED`, `REFUNDED` e `FAILED`.

## Próximas etapas

- Gerar migration Prisma e validar contra PostgreSQL.
- Adicionar testes de constraints e transações do ledger.
- Implementar Order/Risk/Permission engines.
- Integrar provedor de pagamento e webhooks idempotentes.
- Integrar KYC provider.
- Implementar adaptadores Steam e YouPin somente conforme APIs/termos permitidos.
