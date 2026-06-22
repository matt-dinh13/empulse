---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879576
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Contract Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Specifies which bank accounts are associated with the contract.

## 🔗 Connections (5)

- → Dependency: [[Debiting Method Type]]
- → Usage: [[Currency (Class 1819822)]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- → Association: [[Bank Account (Class 1627830)]]
- → Dependency: [[Bank Account Role]]

## 📊 Appears In (4 diagrams)

- Logical: Contract
- Logical: Contract Management
- Logical: Outgoing Payments
- Logical: Payment Channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {DEL?}Debiting Method | Debiting Method Type |  |
| Purpose | Bank Account Role |  |
| Limit Amount | decimal |  |
| Active Flag | boolean |  |
| Limit Amount Currency | Currency |  |
| Archived | boolean |  |
