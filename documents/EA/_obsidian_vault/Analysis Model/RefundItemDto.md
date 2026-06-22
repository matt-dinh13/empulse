---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS"
domain: "Analysis Model"
element_id: 1592129
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 RefundItemDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/InstallmentScheduleWS

## 📝 Notes

Refunds for contract.
A basic entity for Refund (returning of overpayments to customer, partners, or to internal company account)

LDM:
all RefundItem where contractCode = GetInstallmentScheduleFilter.contractNumber

## 🔗 Connections (5)

- → Dependency: [[RefundTypeDto]]
- → Dependency: [[RefundStatusTypeDto]]
- → Dependency: [[RefundSourceSystemTypeDto]]
- → Association: [[GetInstallmentScheduleResponse]]
- → Dependency: [[RefundRecepientTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| refundType | RefundTypeDto |  |
| recepientType | RefundRecepientTypeDto |  |
| status | RefundStatusTypeDto |  |
| amount | MoneyDto |  |
| creationDate | DateTime |  |
| dataExchangeID | string |  |
| sourceSystem | RefundSourceSystemTypeDto |  |
