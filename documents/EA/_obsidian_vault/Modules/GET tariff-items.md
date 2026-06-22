---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights"
domain: "Modules"
element_id: 1862648
diagrams: 2
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 GET tariff-items

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Access Rights

## 📝 Notes

Returns list of tariff item data according to the specified search criteria.

## 🔗 Connections (4)

- → Dependency: [[TariffItemsSearchParametersDto - validation]]
- → Realisation: [[04.300 Provide Tariff Data]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- ← Association: [[External Component]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Use Case
