---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721987
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Stock keeping unit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

SKU (Stock Keeping Unit) of the commodity.

Visible only if:

	
- CommodityType.flags = 'SKU'. 


LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.SKU
	
- //LDM for value saving
CommodityUpdate.commodity.SKU


Localization code:
GEN_SKU

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
