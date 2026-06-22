---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1848400
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ MSISDN

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

MSISDN (Mobile Subscriber ISDN Number) of the commodity. //SIM card number.

Visible only if:

	
- CommodityType.flags = 'MSISDN'


LDM:

	
- LDM source for field pre-filling: CommodityForUpdate.commodity.MSISDN
	
- LDM for value saving: CommodityUpdate.commodity.MSISDN

Localization code:
GEN_MSISDN

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: Edit commodity
