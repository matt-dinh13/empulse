---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1734232
diagrams: 8
connections: 27
tags:
  - interface
  - analysis-model
---

# 🔶 AccountTransactionWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

A service exposed by CaBus system.

## 🔗 Connections (27)

- → Dependency: [[CancelTransactionResponse]]
- → Dependency: [[UnpairPaymentBatchResponse]]
- → Usage: [[CancelAccountItemResponse]]
- → Dependency: [[UnpairPaymentResponse (Class 1387647)]]
- → Dependency: [[ChargeFeeRequest]]
- → Dependency: [[ConfirmTransactionRequest]]
- → Dependency: [[ChargeFeeResponse]]
- → Dependency: [[PairPaymentResponse (Class 1387650)]]
- → Dependency: [[CancelAuthorizationResponse]]
- → Dependency: [[CancelEventResponse]]
- → Dependency: [[UnpairPaymentRequest (Class 1387665)]]
- → Usage: [[ConfirmTransactionWithIPConversionResponse]]
- → Dependency: [[CancelTransactionRequest]]
- → Dependency: [[AuthorizeTransactionResponse]]
- → Dependency: [[AuthorizeTransactionRequest]]
- → Dependency: [[CancelEventRequest]]
- → Dependency: [[UnpairPaymentBatchRequest]]
- → Dependency: [[PairPaymentRequest (Class 1387639)]]
- → Dependency: [[CancelAuthorizationRequest]]
- → Dependency: [[AuthorizeTransactionWithIPOfferResponse]]
- → Usage: [[CancelAccountItemRequest]]
- → Dependency: [[AuthorizeTransactionWithIPOfferRequest]]
- → Usage: [[ConfirmTransactionWithIPConversionRequest]]
- → Dependency: [[ConfirmTransactionResponse]]
- → Dependency: [[PairPaymentBatchRequest]]
- ← Dependency: [[{MOD}04.140 Charge fees]]
- ← Dependency: [[{MOD}04.130 Cancel fees]]

## 📊 Appears In (8 diagrams)

- Logical: Account TransactionsWS - charge/cancel fee
- Logical: Account TransactionsWS - usage on REL transaction confirmation and IP conversion
- Logical: AccountTransactions - usage at transaction cancellation
- Logical: AccountTransactionsWS - usage in incoming payment management
- Logical: AccountTransactionWS
- Logical: AccountTransactionWS - fee services
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant
