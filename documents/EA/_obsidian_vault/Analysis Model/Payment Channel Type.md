---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1872434
diagrams: 6
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 Payment Channel Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

Defines the list of possible payment channels

## 🔗 Connections (12)

- ← Association: [[Due Date Algorithm Parameters]]
- ← Dependency: [[Payment channel (GUIElement 1538495)]]
- ← Dependency: [[Salesroom Disbursement Channel]]
- ← Dependency: [[Partner Disbursement Channel]]
- ← Dependency: [[Repayment channel (GUIElement 1747610)]]
- ← Dependency: [[TempAppl Payment Channel]]
- ← Dependency: [[Disbursement method (GUIElement 1820256)]]
- ← Dependency: [[DDM Change Request]]
- ← Dependency: [[{MOD}Payment Channel]]
- ← Dependency: [[Payment Channel To Product Type]]
- ← Dependency: [[Disbursement Channel Change Request]]
- ← Dependency: [[Disbursement method (GUIElement 1873897)]]

## 📊 Appears In (6 diagrams)

- Logical: Outgoing Payments
- Logical: Partner
- Logical: Payment Channels
- Logical: Product Type - Payment Channel
- Logical: Salesroom
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| GBA (General bank account) |  |  |
| PBA (Payment provider bank account) |  |  |
| SBA (Retailer bank account) |  |  |
| DD (Direct debit) |  |  |
| OTHER (Other) |  |  |
| CA (Card account) |  |  |
| {ADD}OC (On contract) |  |  |
| {ADD}RTA (Retailer account) |  |  |
