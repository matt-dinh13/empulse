---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Logical Data Model"
domain: "Analysis Model"
element_id: 1839626
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Amortized Installment Part

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Logical Data Model

## 📝 Notes

The entity is detail of Amortized Contract and keeps calculated receivables grouped by separate installments parts of contracts intended for write-offs.

## 🔗 Connections (4)

- → Dependency «use»: [[Amortization Tax Type]]
- → Dependency «use»: [[Tariff Item Type]]
- → Dependency «use»: [[Installment Part Type (Class 1833460)]]
- → Aggregation: [[Amortized Contract]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Write-off domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amortization Amount | Financial Amount |  |
| Amortization Type | Amortization Tax Type | D |
| Part Type | Installment Part Type |  |
| Tariff Item Type | Tariff Item Type |  |
