---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877464
diagrams: 2
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Incoming payment calculations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 🔗 Connections (7)

- ← Aggregation: [[Sum of incoming payments after pay-off calculation]]
- ← Aggregation: [[Latest payment amount calculation]]
- ← Aggregation: [[Sum of incoming payments calculation]]
- ← Aggregation: [[Date of first payment calculation]]
- ← Aggregation: [[Date of latest payment calculation]]
- → Aggregation: [[Debt catalogue calculation formula]]
- ← Aggregation: [[Sum of paid penalties calculation]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
