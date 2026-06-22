---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721980
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Vehicle registration expiration date

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Registration expiration date of the vehicle commodity.

Visible only if:

	
- CommodityType.flags = 'IS_VEHICLE'.


LDM:

	
- //LDM source for field pre-filling
CommodityForUpdate.commodity.vehicleRegistrationExpirationDate
	
- //LDM for value saving
CommodityUpdate.commodity.vehicleRegistrationExpirationDate


Localization code:
GEN_VehicleRegistrationExpirationDate

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
