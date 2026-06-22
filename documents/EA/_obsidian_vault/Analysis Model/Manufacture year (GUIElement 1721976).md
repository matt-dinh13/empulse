---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721976
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manufacture year

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Production year of the vehicle commodity.

Visible only if:

	
- CommodityType.flags = 'IS_VEHICLE'. 


LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.year  
	
- //LDM for value saving
CommodityUpdate.commodity.year


Localization code:
GEN_CommodityYear

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
