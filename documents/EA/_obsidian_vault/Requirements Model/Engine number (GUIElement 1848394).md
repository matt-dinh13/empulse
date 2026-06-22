---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1848394
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Engine number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

Engine number of the vehicle commodity.

Visible only if:

	
- CommodityType.flags = 'IS_VEHICLE'


LDM:

	
- LDM source for field pre-filling: CommodityForUpdate.commodity.engineNumber
	
- LDM for value saving: CommodityUpdate.commodity.engineNumber



Localization code:
GEN_CommodityEngineNumber

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: Edit commodity
