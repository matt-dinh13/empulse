---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/CSI-3860 Missing flags in PRC"
domain: "Requirements Model"
element_id: 1845819
diagrams: 3
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ServiceCatalogTypeDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/CSI-3860 Missing flags in PRC

## 🔗 Connections (3)

- → Dependency: [[ServiceCatalogRoleAssignmentDto]]
- → Dependency: [[ServiceCatalogCategoryDto]]
- ← Dependency: [[CodeListsDto]]

## 📊 Appears In (3 diagrams)

- Custom: CSI-3860 Missing flags in PRC
- Logical: Code Lists
- Logical: Service catalog type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| active | boolean |  |
| categories | ServiceCatalogCategoryDto |  |
| code | string |  |
| name | LocalizedString |  |
| parameters | string |  |
| serviceLevels | string |  |
| roleAssignment | int |  |
| {ADD}flags | string |  |
