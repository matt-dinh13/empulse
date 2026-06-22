---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API"
domain: "Modules"
element_id: 1873261
diagrams: 8
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get sales description for versioned entity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API

## 📝 Notes

{ADD PCG-4839/} {ADD PCG-5137/}
Get attributes for the entity with the version by calling GET sales-descriptions /{entityType}/{entityCode}/{entityVersion} where {entityType} is type of entity from Entity type , {entityCode} is code of the entity (product, service, tariff...) and {entityVersion} is versionNumber of the entity

If no Sales description is returned then get attributes for the entity without version by calling GET sales-descriptions /{entityType}/{entityCode} where {entityType} is type of entity from Entity type and {entityCode} is code of the entity (product, service, tariff...)

for country: mobi bank  {ADD PCG-5137} also for PH country {PCG-5137/}

## 🔗 Connections (6)

- ← Dependency: [[Sales description attributes]]
- ← Dependency: [[GET financing package]]
- ← Dependency: [[GET products]]
- ← Dependency: [[GET financing schemes]]
- ← Dependency: [[GET tariffs]]
- ← Dependency: [[{MOD}GET services]]

## 📊 Appears In (8 diagrams)

- Custom: COMMON for Product catalog REST API
- Custom: One Level Requirement Hierarchy
- Custom: Show Sales Description on entity
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
