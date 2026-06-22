---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Access Rights"
domain: "Modules"
element_id: 1872162
diagrams: 5
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {ADD}GET product-assignments

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface/Access Rights

## 📝 Notes

{ADD PCG-5594}
For country: PH
Returns list of product assignments on salesrooms by products from input.

## 🔗 Connections (8)

- ← Association: [[External Component]]
- → Dependency: [[{ADD}Products assignments - validation]]
- → Dependency: [[{ADD}Product assignments - Commodity type data]]
- → Dependency: [[{ADD} Product Assignments Search Criteria API rules]]
- → Dependency: [[{ADD}Product assignments - Commodity categories data]]
- → Realisation: [[09.240 Show salesroom]]
- ← Dependency: [[{ADD}product-assignment]]
- ← Dependency: [[Search (GUIElement 1873542)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: PCG-5594 CBL-30020 BRPH-2306 - Product Assignment Governance - PH - ANA - HoSel - Product Catalog
- Custom: Products Assignment Governance
- Logical: Salesroom assignment API
- Use Case: Use Case
