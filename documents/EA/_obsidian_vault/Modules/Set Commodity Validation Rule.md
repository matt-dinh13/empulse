---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/UI for Commodity Validation Setting/User Interface"
domain: "Modules"
element_id: 1439066
diagrams: 1
connections: 3
tags:
  - screen
  - modules
---

# 📱 Set Commodity Validation Rule

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/UI for Commodity Validation Setting/User Interface

## 📝 Notes

Form for setting (create/update/delete) of Commodity Validation Rule properties.

Data for listboxes are retrieved by method CommodityWS.GetCommodityValidationRuleCodeLists (in attribute description are referenced as CVRCodeLists).

For Creation (UC 01.611) and Cloning (UC 01.614):
Code is initially empty and then saved to SetCommodityValidationRule.code

For Update (UC 01.612):
Code is retrieved from ResultGetCommodityValidationRule.code and is disabled for update.

Other values in form correspond to structure CommodityValidationRuleValues (in attribute description are referenced as CVRValues).

Localization code: 
CVR_CreateCommodityValidationRule
CVR_CloneCommodityValidationRule
CVR_UpdateCommodityValidationRule

## 🔗 Connections (3)

- → Realisation: [[{DEL}01.612 Update Commodity Validation Rule UI]]
- → Realisation: [[{DEL}01.611 Create new Commodity Validation Rule UI]]
- → Realisation: [[{DEL}01.614 Clone Commodity Validation Rule UI]]

## 📊 Appears In (1 diagrams)

- Custom: Set Commodity Validation Rule
