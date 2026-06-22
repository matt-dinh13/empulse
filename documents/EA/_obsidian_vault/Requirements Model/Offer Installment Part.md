---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1878159
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Offer Installment Part

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Installment part of offered installments.

## 🔗 Connections (3)

- → Aggregation: [[Offer Installment]]
- → Dependency: [[Installment Part Type (Class 1833460)]]
- → Association: [[{MOD}Tariff Item]]

## 📊 Appears In (4 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Installment Schedule
- Logical: Offer Financial Parameters
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Part type | Installment Part Type |  |
