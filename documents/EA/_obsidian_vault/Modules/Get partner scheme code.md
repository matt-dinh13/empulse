---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/Commodity API/Business Rules"
domain: "Modules"
element_id: 1873240
diagrams: 2
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Get partner scheme code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/Commodity API/Business Rules

## 📝 Notes

Partner scheme code (SchemeCode) is retrieved from external module (Commodity module) by REST service call with GET request: Commodity API /partner-schemes
with attributes:
- productCode - code of product
- financingPackageCode - code of financing package
- showInactive - false

## 🔗 Connections (8)

- ← Dependency: [[GET partner scheme search]]
- ← Dependency: [[Partner scheme (GUIElement 1860857)]]
- ← Dependency: [[Partner scheme (GUIElement 1860842)]]
- ← Dependency: [[Financing package activation validation rules]]
- ← Dependency: [[Partner scheme (GUIElement 1872053)]]
- ← Dependency: [[Partner scheme (GUIElement 1872020)]]
- → Dependency: [[Commodity API (Interface 1690181)]]
- ← Dependency: [[{MOD}Product activation validation rules]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
