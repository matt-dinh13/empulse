---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1857186
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Installment Priority

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/COMMON for Incoming Payments/Logical Data Model

## 📝 Notes

Defines pairing priority of installment types - i.e. how are sorted installment parts for pairing (e.g. 1. due date, 2. type principal, 3. type interest, ...)

## 🔗 Connections (4)

- → Dependency «use»: [[Tariff Item Type]]
- → Dependency: [[Installment Part Type (Class 1833460)]]
- → Association: [[Pairing Setting]]
- → Usage: [[Installment priority condition flag]]

## 📊 Appears In (4 diagrams)

- Logical: Incoming payments
- Logical: Installment Schedule
- Logical: Pairing priority
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Condition Change Flag | Boolean |  |
| Archived | Boolean |  |
| Installment part type | Installment Part Type |  |
| Priority | Number |  |
| Tariff Item Type | Tariff Item Type |  |
| Suppress Due Date Priority | Boolean | FALSE |
| Condition Flag | Installment priority condition flag |  |
