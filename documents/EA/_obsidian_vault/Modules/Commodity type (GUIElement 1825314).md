---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825314
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Commodity type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

LDM: Subvention.CommodityType
Visible only if GlobalParameter.SubventionsPerCommodityType = True and if Product Subvention is created/updated else Subvention.CommodityType is not defined.
Combo is filled by active Commodity Types plus originally filled Subvention.CommodityType (in case of subvention update).
If a Commodity Type is selected then the field Model is adjusted as follows:
- If value of Model does not correspond to selected Commodity Type it is cleared.
- List in combo box Model is filtered by the Commodity Type.
Localization code: GEN_CommodityType

## 🔗 Connections (1)

- → Dependency: [[{MOD}Unique subvention definition]]

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
