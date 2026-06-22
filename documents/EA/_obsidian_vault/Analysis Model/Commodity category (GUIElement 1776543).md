---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776543
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Commodity category

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source:  the list is filled in with values from the response of PRC call (see UC 12.632 Create request for POS transaction without card) - commodityCategories. Localized commodityCategory.name is showed in the list.

Actions:
on form open:
If CommodityData from input exists, preset with value from CommodityData.category

on value change:
clear form.Commodity type and fills it in with values from the response of PRC call limited by categoryCode = chosen value in form.Commodity category 

on Confirm commodity action:

	
- no action (commodity category is not stored to the Commodity module)


Localization code: 
ACC_CommodityCategory

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
