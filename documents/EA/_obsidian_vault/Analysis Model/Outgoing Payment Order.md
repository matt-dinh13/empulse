---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746977
diagrams: 3
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 Outgoing Payment Order

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

Payment order entity which is sent to bank for processing
Outgoing payment order groups outgoing payments by recipient bank account

## 🔗 Connections (9)

- → Aggregation: [[Outgoing Payment File]]
- ← Aggregation: [[Outgoing Payment]]
- → Association: [[Salesroom (Class 1556394)]]
- → Association: [[Dispatch Note]]
- → Association: [[Bank Account (Class 1627830)]]
- → Association: [[{MOD}Partner]]
- → Association: [[Outgoing Payment File Generation Request]]
- ← Association: [[CreateOutgoingPaymentOrderResendEvent]]
- ← Association: [[CreateOutgoingPaymentOrderEvent]]

## 📊 Appears In (3 diagrams)

- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments
- Logical: OutgoingPaymentSystemEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}External Card ID | String |  |
| {ADD}Recipient bank account code | Text(20) |  |
| Amount | Financial amount |  |
| ExternaI ID | Text |  |
| Recipient Name | Text |  |
| Transaction time | Datetime |  |
| {ADD}Source bank account id | Integer |  |
