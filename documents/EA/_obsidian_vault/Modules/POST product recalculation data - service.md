---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data/Access Rights"
domain: "Modules"
element_id: 1841480
diagrams: 3
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 POST product recalculation data - service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data/Access Rights

## 📝 Notes

Returns services for recalculation on specified product

## 🔗 Connections (7)

- ← Dependency: [[service]]
- → Dependency: [[Product recalculation services - validation]]
- → Dependency: [[Service qualification criteria check]]
- → Dependency: [[Service limit check]]
- → Realisation: [[02.810 Provide Product Data]]
- → Dependency: [[Check Service Availability on Salesroom]]
- ← Association: [[External Component]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Product Recalculation Data API
- Use Case: Use Case
