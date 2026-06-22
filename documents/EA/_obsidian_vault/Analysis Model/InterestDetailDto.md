---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1309260
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 InterestDetailDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 🔗 Connections (3)

- ← Dependency: [[GetInterestAccountItemDetailResponse]]
- → Dependency: [[AttributesDto (Class 1611776)]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]

## 📊 Appears In (2 diagrams)

- Logical: Account UI - Interface diagram - Transactions
- Logical: Structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionSourceSystemId | TransactionSourceIdDto |  |
| transactionDate | date |  |
| billingDate | date |  |
| amount | MoneyDto |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
| principalAmount | MoneyDto |  |
| interestRate | decimal |  |
| accruedInterest | MoneyDto |  |
| accruedDays | long |  |
| interestPeriodStart | date |  |
| interestPeriodEnd | date |  |
| cardAcceptorName | string |  |
| cardAcceptorCity | string |  |
| cardAcceptorState | string |  |
| attributes | AttributesDto |  |
