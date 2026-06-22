---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825333
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Model

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

Listed Subvention.ModelCode

Visible only if GlobalParameter.SubventionsPerCommodityType = True and if Product Subvention is created/updated else Subvention.ModelCode is not defined.
Combo is filled by active Model plus originally filled Subvention.ModelCode (in case of subvention update).
Field is filtered according selected Commodity type 
If Filter by model assigned on product is ticked then models are filtered according models assigned on product (Product.ProductToCommodity.ModelCode)

LDM: Subvention.ModelCode

## 🔗 Connections (1)

- → Dependency: [[{MOD}Unique subvention definition]]

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
