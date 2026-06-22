---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Set/User Interface"
domain: "Modules"
element_id: 1871985
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 {ADD}Product to Product Set

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Set/User Interface

## 📝 Notes

{ADD PCG-1156/}
LDM: Product.Product2ProductSet.ProductSet
Display only Active ProductSet.
Currently chosen Product Sets are pre-selected.
When saving then all canceled (deselected) assignments (Product2ProductSet) are marked as archived and new assignments are created.
Default order: code, asc.
Localization code: PRD_ProductSets

## 📊 Appears In (1 diagrams)

- Custom: Product Set - Assign

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}Code | string |  |
| {ADD}Selection | boolean |  |
| {ADD}Name | string |  |
| {ADD}Type | string |  |
