---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823058
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Price

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Price of the related commodity.
Field can be controlled by algorithm Obtaining Commodity Data from Manufacturer.
If the field Price is enabled and Stock Keeping Unit was chosen according to the algorithm and any of PriceMin/PriceMax was passed from the algorithm then manually entered Price is validated as follows:
- If PriceMin is defined then Price >= PriceMin 
- If PriceMax is defined then Price <= PriceMin
If checking is not successful then error message is displayed (MSG_PriceOutOfRange) and user cannot start calculation of product offer.

Localization code: GEN_Price

## 🔗 Connections (2)

- → Dependency: [[Mandatory when visible]]
- → Dependency: [[Financial amount _ 0]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator
