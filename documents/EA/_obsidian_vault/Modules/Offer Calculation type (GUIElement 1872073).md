---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1872073
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Offer Calculation type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

{DEL PCG-1208_1/}
Listed: 
ProductTypeCalculationType.CalculationType.name 
where ProductTypeCalculationType.ProductType = Product.ProductProfile.ProductType
LDM: PRODUCT. CalculationType

Disabled if exists any Product Variant assigned to Product.

Localization code: PRD_ProductCalculationType

## 🔗 Connections (3)

- → Dependency: [[{DEL}Offer Calculation Type]]
- → Dependency: [[Only active item can be related]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Set main product properties
