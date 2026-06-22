---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776536
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Commodity type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source: the list is filled in with commodityTypes values of the response of PRC call (see UC 12.632 Create request for POS transaction without card) limited by categoryCode = chosen value in form.Commodity category. Localized commodityType.name is showed in the list.

Actions:
on form open:

	
- If CommodityData from input exists, preset with value from CommodityData.type else the field is empty.

on value change:

on Confirm commodity action:

	
- value is set into CreateCommodityDataRequest.commodity.values.commodityTypeCode


Localization code:
ACC_CommodityType

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
