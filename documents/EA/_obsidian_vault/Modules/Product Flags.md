---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1871977
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Product Flags

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

Displays list of active Product Flag Type.
Default order: flag type name, asc.
LDM: PRODUCT.ProductFlag.Type
Localization: PRD_ProductFlag

Flags assigned to Product are marked as selected. 
If an inactive flag type is assigned to Product, it is also displayed and selected.
Panel is hidden if no Product Type Flag is active and no flag is assigned to Product.
Only active flag types are enabled for selection, inactive flag types can be deselected.

When saving system:
- removes already existing assignment of flags to selected product, which are not marked as selected in the list,
- creates new assignments for all flags selected in the list and yet not assigned to product.

## 🔗 Connections (1)

- → Dependency: [[Product Flag Type]]

## 📊 Appears In (1 diagrams)

- Custom: Set main product properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| selection | boolean |  |
| name | char |  |
