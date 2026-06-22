---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/MER API/Business Rules"
domain: "Modules"
element_id: 1845323
diagrams: 7
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Get List of Merchants

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/MER API/Business Rules

## 📝 Notes

List of available Merchants (Code) is retrieved from external module (MERCHANT) by REST service call with GET request: Merchant (MER) /mer-web/openapi/active-merchants
Example of response: ["ALFA", "BRAVO", "CHARLIE"]

## 🔗 Connections (7)

- ← Dependency: [[Merchant]]
- ← Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- → Dependency: [[Merchant (MER)]]
- ← Dependency: [[Service Criterion type]]
- ← Dependency: [[{MOD}Service Catalog Service - validation]]
- ← Dependency: [[{MOD}Financing Package Criterion Type]]
- ← Dependency: [[{MOD}Financing package - validation]]

## 📊 Appears In (7 diagrams)

- Custom: Business Rules
- Custom: Financing Package Values - validation rules
- Custom: Validation Rules
- Custom: Validation Rules
- Logical: Financing Package Criterion
- Logical: GetFinancingPackageCodeLists
- Logical: Service Structure
