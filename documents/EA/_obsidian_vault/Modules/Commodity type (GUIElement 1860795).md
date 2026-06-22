---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface"
domain: "Modules"
element_id: 1860795
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Commodity type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/User Interface

## 📝 Notes

Listed: {ADD PCG-2537}Values retrieved from commodity module via GET commodity-types/active (CommodityTypeDto.Code + CommodityTypeDto.Name){/ADD} {DEL PCG-2537}FPCodeLists.CommodityType.(code + name(LocalizedString)){/DEL}, ordered by code
Displayed only if selected SubventionScheme.byCommodityType = True
Filtered by the field Commodity Category
LDM: FPSubvention.commodityType
Localization code: GEN_CommodityType

## 📊 Appears In (1 diagrams)

- Custom: Set Financing Package Subvention
