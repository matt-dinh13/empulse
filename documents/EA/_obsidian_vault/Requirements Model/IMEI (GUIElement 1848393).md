---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1848393
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ IMEI

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

IMEI (International Mobile Equipment Identity) of the commodity.

Visible only if:

	
- CommodityType.flags = 'IMEI'


LDM:

	
- LDM source for field pre-filling: CommodityForUpdate.commodity.IMEI


	
- LDM for value saving: CommodityUpdate.commodity.IMEI


Localization code:
GEN_IMEI

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: Edit commodity
