---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1872436
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}External Card

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model

## 📝 Notes

{ADD CBL-1093 PAYM-1018 /} 
Data of external payment card.

Entity is historicized.

## 🔗 Connections (2)

- → Aggregation: [[{MOD}Payment Channel]]
- → Aggregation: [[Disbursement Channel Change Request]]

## 📊 Appears In (1 diagrams)

- Logical: Payment Channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Truncated PAN | string |  |
| External Card ID | string |  |
| Issuer | string |  |
| Processing result | string |  |
| Deleted In External System | boolean | false |
