---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/CSD API/Business Rules"
domain: "Modules"
element_id: 1706144
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get Codelists from CSD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/CSD API/Business Rules

## 📝 Notes

{ADD PCG-3726/}
List of available values (Code+Value) is retrieved from external module (CSD) by REST service call with GET request: codelist/{group}/search/{codelist}
with specific group code and codelist code as parameter:
group code - CUST

## 🔗 Connections (6)

- → Dependency: [[CSD API (Interface 1706141)]]
- ← Dependency: [[Product - validation]]
- ← Dependency: [[Source for limit value]]
- ← Dependency: [[{MOD}Tariff Item activation validation rules]]
- ← Dependency: [[{ADD}Regular Payment Type]]
- ← Dependency: [[{MOD}ServiceParametersDto - validation]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Custom: Validation Rules
- Custom: Validation Rules
- Custom: Validation Rules
