---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721973
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Ownership book number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Ownership book number of the vehicle commodity.

Visible only if:

	
- CommodityType.flags = 'IS_VEHICLE'.


LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.ownershipBookNumber
	
- //LDM for value saving
CommodityUpdate.commodity.ownershipBookNumber


Localization code:
GEN_CommodityOwnershipBookNumber

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
