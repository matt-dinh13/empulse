---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/Commodity API/Business Rules"
domain: "Modules"
element_id: 1873239
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Get list of commodity types

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/Commodity API/Business Rules

## 📝 Notes

List of available Commodity Types (Code) is retrieved from external module (Commodity module) by REST service call with GET request: Commodity API /commodity-types

if only active commodity types are needed add /active

## 🔗 Connections (3)

- ← Dependency: [[Model - validation]]
- ← Dependency: [[ProductCommodityTypeDto - validation]]
- → Dependency: [[Commodity API (Interface 1690181)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Validation Rules
- Custom: Validation Rules
