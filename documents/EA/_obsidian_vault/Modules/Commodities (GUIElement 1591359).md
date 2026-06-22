---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model/Eligible commodities tab"
domain: "Modules"
element_id: 1591359
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Commodities

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model/Eligible commodities tab

## 📝 Notes

Listed: Active Commodity Types (CommodityCategory.(code+name)/CommodityType.(code+name)) which are not displayed in the field CommodityTypes-Selected.
Filtered according to selected commodity category in combo Commodity category.
Multiple selection must be possible.
Not saved.

LDM: InsuranceProgram.InsuranceEligibilityCriteria.EligibleCommodities.CommodityType

Listed: 
CommodityCategory.(code+name)/CommodityType.(code+name)
All active eligible commodities assignments are displayed after form opening.
Filtered according to selected commodity category in combo Commodity category.

Localization code: SER_InsCommodityAvailable

## 📊 Appears In (1 diagrams)

- Custom: Assign Eligible commodities
