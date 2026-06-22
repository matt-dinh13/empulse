---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721988
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ IMEI

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

IMEI (International Mobile Equipment Identity) of the commodity.

Visible only if:

	
- CommodityType.flags = 'IMEI'. 


LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.IMEI
	
- //LDM for value saving
CommodityUpdate.commodity.IMEI


Localization code:
GEN_IMEI

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
