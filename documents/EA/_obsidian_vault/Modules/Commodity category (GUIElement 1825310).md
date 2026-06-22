---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825310
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Commodity category

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

Filter for Commodity Category, not saved in DB.
Visible only if GlobalParameter.SubventionsPerCommodityType = True and if Product Subvention is created/updated.
Filled by distinct union of categories related to commodities in field "Commodity type".
If a Commodity Category is selected then the field Commodity Type is adjusted as follows:
- If value of Commodity Type does not correspond to selected Commodity Category it is cleared.
- List in combo box Commodity Type is filtered by the Commodity Category.
Localization code: GEN_CommodityCategory

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
