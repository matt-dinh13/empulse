---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new"
domain: "Analysis Model"
element_id: 1786516
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 RefundItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPIv1_new

## 📝 Notes

Refunds for contract.
A basic entity for Refund (returning of overpayments to customer, partners, or to internal company account)

## 🔗 Connections (6)

- → Dependency: [[RefundType]]
- → Aggregation: [[GetDetailResponse]]
- → Aggregation: [[GetInstallmentsResponse]]
- → Dependency: [[RefundStatusType]]
- → Dependency: [[RefundSourceSystemType]]
- → Dependency: [[RefundRecipientType]]

## 📊 Appears In (1 diagrams)

- Logical: installmentSchedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | Money |  |
| creationDate | DateTime |  |
| dataExchangeID | string |  |
| recipientType | RefundRecipientType |  |
| refundType | RefundType |  |
| sourceSystem | RefundSourceSystemType |  |
| status | RefundStatusType |  |
