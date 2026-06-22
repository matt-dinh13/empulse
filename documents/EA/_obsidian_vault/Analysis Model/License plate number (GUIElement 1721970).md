---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721970
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ License plate number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Licence plate number of the vehicle commodity.

Visible only if:

	
- CommodityType.flags = 'IS_VEHICLE'.

LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.licencePlateNumber
	
- //LDM for value saving
CommodityUpdate.commodity.licencePlateNumber


Localization code:
GEN_LicencePlateNumber

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
