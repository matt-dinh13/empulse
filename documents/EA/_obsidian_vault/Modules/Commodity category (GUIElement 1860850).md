---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860850
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Commodity category

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Filter for Commodity Category, not saved in DB.
Displayed only if selected SubventionScheme.byCommodityType = True
List retrieved from {ADD PCG-2537}commodity module via GET commodity-categories/active (CommodityCategoryDto.Name){/ADD} {DEL PCG-2537}FPCodeLists.CommodityCategory.Name{/DEL} (LocalizedString)
If a Commodity Category is selected then the field Commodity Type is adjusted as follows:
- If value of Commodity Type does not correspond to selected Commodity Category it is cleared.
- List in combo box Commodity Type is filtered by the Commodity Category.
Localization code: GEN_CommodityCategory

## 📊 Appears In (1 diagrams)

- Custom: Set Financing Package Subvention
