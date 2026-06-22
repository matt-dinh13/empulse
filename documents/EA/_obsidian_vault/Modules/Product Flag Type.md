---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model"
domain: "Modules"
element_id: 1879083
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Product Flag Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model

## 📝 Notes

Code list of Product Flag Types used in particular system instance (country).
Can contain either 
- items from Product Flag Type Definition 
- custom types not referenced in program code of HomerSelect IS, but used as mark for country specific purposes not supported by this IS

## 🔗 Connections (3)

- ← Dependency: [[Product Flags]]
- ← Dependency: [[Product Flag]]
- → Dependency: [[{MOD}Product Flag Type Definition]]

## 📊 Appears In (1 diagrams)

- Logical: Product - Flags

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean | true |
