---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model"
domain: "Analysis Model"
element_id: 1864786
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Refund Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model

## 📝 Notes

A basic entity for Refund (returning of overpayments to customer, partners, or to internal company account)

## 🔗 Connections (8)

- → Usage: [[Refund Recipient Type]]
- → Usage: [[Refund Type]]
- → Aggregation: [[Refund Order]]
- → Dependency: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Refund Status Transition]]
- → Association: [[Incoming Payment]]
- → Dependency «use»: [[Refund Status Type]]
- → Dependency: [[RefundSourceSystemType (DataType 1864785)]]

## 📊 Appears In (1 diagrams)

- Logical: Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Refund Type | Refund Type |  |
| Recipient Type | Refund Recipient Type |  |
| Contract Code | Text |  |
| Status | Refund Status Type |  |
| Amount | Financial Amount |  |
| Creation date | Date Time |  |
| Data exchange ID | string |  |
| SourceSystem | RefundSourceSystemType |  |
|  External Payment ID | string |  |
| External Payment Source System | int |  |
