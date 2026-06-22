---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1848383
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Vehicle registration number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

Registration number of the vehicle commodity.

Visible only if:

	
- CommodityType.flags = 'IS_VEHICLE'


LDM:

	
- LDM source for field pre-filling: CommodityForUpdate.commodity.vehicleRegistrationNumber


	
- LDM for value saving: CommodityUpdate.commodity.vehicleRegistrationNumber

Localization code:
GEN_VehicleRegistrationNumber

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: Edit commodity
