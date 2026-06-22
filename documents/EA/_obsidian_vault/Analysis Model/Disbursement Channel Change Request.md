---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1872430
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Disbursement Channel Change Request

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model

## 📝 Notes

Request for change on payment channel.
Currently used only for disbursement.

## 🔗 Connections (5)

- → Aggregation: [[{MOD}Payment Channel]]
- → Association: [[Salesroom (Class 1556394)]]
- → Dependency: [[Payment Channel Type]]
- ← Aggregation: [[{ADD}External Card]]
- → Dependency: [[Disbursement Channel Change Request Status Type]]

## 📊 Appears In (1 diagrams)

- Logical: Payment Channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Created  | DateTime |  |
| Status | Disbursement Channel Change Request Status Type |  |
| Channel Type | Payment Channel Type |  |
| Closed By | User |  |
| {ADD}Demanded bank account code | Text(20) |  |
| Closed | DateTime |  |
