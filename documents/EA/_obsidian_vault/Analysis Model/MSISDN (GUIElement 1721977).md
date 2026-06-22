---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721977
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ MSISDN

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

MSISDN (Mobile Subscriber ISDN Number) of the commodity. //SIM card number.

Visible only if:

	
- CommodityType.flags = 'MSISDN'.


LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.MSISDN
	
- //LDM for value saving
CommodityUpdate.commodity.MSISDN


Localization code:
GEN_MSISDN

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
