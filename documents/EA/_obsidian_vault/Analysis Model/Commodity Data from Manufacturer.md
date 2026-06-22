---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823027
diagrams: 1
connections: 1
tags:
  - screen
  - analysis-model
---

# 📱 Commodity Data from Manufacturer

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Form for selection of commodity data retrieved from Manufacturer in product calculator.
For detailed description see rule Obtaining Commodity Data from Manufacturer.
Button Save is displayed only if at least field Model is displayed.
Buttons Repeat is displayed only if calling of WS is unsuccessful due to timeout.
Button Cancel is displayed after end of communication via WS (response retrieved or timeout). 

Localization: PRD_CommodityFromManufacturer

## 🔗 Connections (1)

- → Realisation: [[Obtaining Commodity Data from Manufacturer]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity Data from Manufacturer
