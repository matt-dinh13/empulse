---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service"
domain: "Requirements Model"
element_id: 1881079
diagrams: 3
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 services

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service

## 📝 Notes

{DEL PCG-3094} https://prcwl.{environment}/product-catalog/openapi/v1/services {/DEL}

{ADD PCG-3094} https://prc.{environment}/openapi/v1/services {/ADD}

## 🔗 Connections (9)

- ← Dependency «path»: [[Product catalog API (Class 1873281)]]
- → Realisation: [[{MOD}GET services]]
- → Realisation: [[DELETE services]]
- → Realisation: [[{MOD}PUT services]]
- → Realisation: [[{MOD}POST services]]
- → Dependency: [[ServiceResponse]]
- → Dependency: [[{MOD}ServiceInputDto]]
- → Dependency: [[ServiceSearchParametersDto]]
- → Dependency: [[{MOD}Dependencies (Enumeration 1881055)]]

## 📊 Appears In (3 diagrams)

- Custom: One Level Requirement Hierarchy
- Logical: Service
- Logical: Service API
