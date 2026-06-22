---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1867089
diagrams: 13
connections: 28
tags:
  - class
  - modules
---

# 🔷 {MOD}Tariff

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules

## 📝 Notes

Tariff defines fees and penalties for product (and therefore for contracts based on this product)

## 🔗 Connections (27)

- ← Dependency: [[Tariff]]
- ← Dependency: [[Tariff]]
- ← Dependency: [[Tariff]]
- ← Dependency: [[Tariff]]
- ← Dependency: [[Tariff]]
- ← Dependency: [[Tariff]]
- ← Dependency: [[Tariff]]
- ← Dependency: [[Offer Result Tariff Item]]
- ← Dependency: [[Tariff (Class 1266029)]]
- ← Dependency: [[FinancingSchemeValues - validation rules]]
- ← Dependency: [[Financing Scheme (Class 1668708)]]
- → Dependency: [[Currency (Class 1819822)]]
- → Association: [[Tariff Label]]
- → Generalization: [[Versioned entity]]
- ← Aggregation: [[{MOD}Tariff Item]]
- → Dependency: [[Tariff Type]]
- → Dependency: [[Tariff Purpose]]
- ← Dependency: [[Tariff (GUIElement 1867447)]]
- ← Association: [[Contract Service (Class 1868570)]]
- ← Dependency: [[Tariff (GUIElement 1872087)]]
- ← Association: [[Offer Service (Class 1878189)]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Association: [[Offer Financial Parameter]]
- ← Dependency: [[{MOD}Product]]
- ← Dependency: [[Financial Parameters (Class 1879562)]]
- ← Association: [[Financial Parameters (Class 1879562)]]
- ← Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (13 diagrams)

- Custom: Financing Scheme Values - validation Rules
- Logical: CBL-1533 Adjust OFP
- Logical: Contract - Financial parameters
- Logical: Contract - Services
- Logical: Fees and Penalties in context
- Logical: Financing Scheme
- Logical: GetFinancingSchemeCodeLists
- Logical: Loan Service Structure
- Logical: Offer Financial Parameters
- Logical: Offer Service
- Logical: Product Management
- Logical: Tariff and Tariff Item Management
- Logical: Tariff data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Currency | Currency |  |
| Name | Text |  |
| Tariff Type | Tariff Type |  |
| Purpose | Tariff Purpose |  |
| Active | Boolean | true |
| Approval Document | string |  |
| Service Restriction | String |  |
| Updated by employee number | string |  |
