---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1309258
diagrams: 4
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 BasicAccountItemDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Account item. Account items are created by transaction billing or EOM process based as a result of tariff item calculation.
Account item can be billed transaction, fee, penalty, payment,...

## 🔗 Connections (6)

- ← Dependency: [[InstalmentPaymentMatchResponse]]
- → Dependency: [[TransactionTypeDto]]
- → Dependency: [[AccountItemAmountDirectionDto]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[MoneyDto (Class 1638510)]]
- ← Generalization: [[AccountItemDto]]

## 📊 Appears In (4 diagrams)

- Logical: Account ManagementWS - Account items
- Logical: Account UI - Interface diagram - Installment schedule
- Logical: Account UI - Interface diagram - Transactions
- Logical: Structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | AccountItemCodeType |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
| transactionDate | date |  |
| billingDate | date |  |
| amount | MoneyDto |  |
| transactionAmount | MoneyDto |  |
| amountDirection | AccountItemAmountDirectionDto |  |
| type | TransactionTypeDto |  |
| transactionSourceId | TransactionSourceIdDto |  |
| cancelled | boolean |  |
| cancelledDate | date |  |
| cancellationReason | CancellationReasonDto |  |
