---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/CSD API/Business Rules"
domain: "Modules"
element_id: 1682578
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get codelists from CSD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/CSD API/Business Rules

## 📝 Notes

{ADD PCG-3157/}
List of available values (Code) is retrieved from external module (CSD) by REST service call with GET request: codelist/search /csd/v1/codelist/CUST/search/{codelist}
with specific codelist code as parameter
- color
- delivery_type

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Commodity - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Validation Rules
