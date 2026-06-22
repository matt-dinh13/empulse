---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776519
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Price

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source:  No

Actions:
on form open:

	
- If CommodityData from input exists, preset with value from CommodityData.price else the field is empty.

on Confirm commodity action:

	
- value is set into CreateCommodityDataRequest.commodity.values.price



Localization code: ACC_PriceTotal

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Amount _ 0 and Amount _= Available Balance]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
