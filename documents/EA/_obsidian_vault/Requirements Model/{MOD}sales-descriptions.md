---
type: Class
stereotype: "Resources"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service"
domain: "Requirements Model"
element_id: 1845779
diagrams: 3
connections: 11
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}sales-descriptions

> **Type**: Class · **Stereotype**: «Resources»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service

## 📝 Notes

https://prc.{environment}/openapi/v1/sales-descriptions

## 🔗 Connections (11)

- → Realisation: [[GET sales description for entity]]
- → Realisation: [[{ADD} GET sales description for entity by code and version]]
- → Abstraction: [[REQ#1 Create a tab in Service detail for managing sales description]]
- → Dependency: [[SalesDescriptionResponse]]
- → Realisation: [[POST new sales description]]
- → Realisation: [[GET sales description by search]]
- → Realisation: [[GET sales description by code]]
- → Realisation: [[PUT sales description]]
- → Dependency: [[SalesDescriptionSearchParametersDto]]
- → Dependency: [[SalesDescriptionInputDto]]
- ← Dependency «path»: [[Product catalog API (Class 1873281)]]

## 📊 Appears In (3 diagrams)

- Custom: One Level Requirement Hierarchy
- Logical: Sales Descriptions
- Logical: Sales Descriptions API
