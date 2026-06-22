---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new"
domain: "Analysis Model"
element_id: 1878090
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 RefundItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Installment schedule/InstallmentScheduleRestAPI v2_new

## 📝 Notes

Refunds for contract.
A basic entity for Refund (returning of overpayments to customer, partners, or to internal company account)

## 🔗 Connections (6)

- → Dependency: [[RefundStatusType (Enumeration 1878099)]]
- → Dependency: [[RefundType (Enumeration 1878098)]]
- → Dependency: [[RefundSourceSystemType (Enumeration 1878092)]]
- → Aggregation: [[GetDetailResponse (Class 1878091)]]
- → Aggregation: [[GetInstallmentsResponse (Class 1878089)]]
- → Dependency: [[RefundRecipientType (Enumeration 1878084)]]

## 📊 Appears In (2 diagrams)

- Logical: InstallmentScheduleRestAPI v2 - Get Detail
- Logical: InstallmentScheduleRestAPI v2 - Get Installments

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
