---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1848395
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Stock keeping unit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

SKU (Stock Keeping Unit) of the commodity.

Visible only if:

	
- CommodityType.flags = 'SKU'


LDM:

	
- LDM source for field pre-filling: CommodityForUpdate.commodity.SKU
	
- LDM for value saving: CommodityUpdate.commodity.SKU

Localization code:
GEN_SKU

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: Edit commodity
