---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API"
domain: "Modules"
element_id: 1873259
diagrams: 4
connections: 9
tags:
  - requirement
  - modules
---

# 📋 {ADD}User check for activation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API

## 📝 Notes

{ADD PCG-5209/}
Validation of user for entity activation

Input:
useCase = UC code
currentUser - user doing the activation
lastUpdateUser - last user that updated the entity

If current user have assess right for useCase then return true
else
  if currentUser <> lastUpdateUser return true
  else return false

## 🔗 Connections (9)

- ← Dependency: [[{MOD}POST products]]
- ← Dependency: [[{MOD}PUT products]]
- ← Dependency: [[{MOD}PUT product activations]]
- ← Dependency: [[{MOD}PUT tariffs]]
- ← Dependency: [[{MOD}PUT tariff activations]]
- ← Dependency: [[{MOD}POST tariffs]]
- ← Dependency: [[{MOD}PUT services]]
- ← Dependency: [[{MOD}POST services]]
- ← Dependency: [[{MOD}PUT service activations]]

## 📊 Appears In (4 diagrams)

- Custom: COMMON for Product catalog REST API
- Use Case: Use Case
- Use Case: Use Case
- Use Case: Use Case
