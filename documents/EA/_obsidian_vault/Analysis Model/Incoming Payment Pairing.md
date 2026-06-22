---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1875592
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Incoming Payment Pairing

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Logical Data Model

## 📝 Notes

Pairing record defining to which installment part is payment paired

## 🔗 Connections (4)

- ← Association: [[IncomingPaymentPairingChangedCELSE]]
- ← Association: [[IncomingPaymentPairingNotificationSE]]
- → Association: [[Installment Part (Class 1857180)]]
- → Association: [[Incoming Payment]]

## 📊 Appears In (4 diagrams)

- Logical: Incoming payments
- Logical: IncomingPaymentSystemEvent schema
- Logical: Installment Schedule
- Logical: Notification system event schema

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Locked | Boolean | False |
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Paired amount | Financial amount |  |
| Pairing Date | DateTime |  |
| Unpairing Date | DateTime |  |
