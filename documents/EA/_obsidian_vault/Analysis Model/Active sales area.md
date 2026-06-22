---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/User Interface "
domain: "Analysis Model"
element_id: 1716245
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Active sales area

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/User Interface 

## 📝 Notes

This combo offers all active sales areas that user has assigned (this list is provided by UMC in 00.050 Login system).
If user has already selected any area (exists record in User_Setting where User_Setting.User_Setting_Item = "ACTIVE_SALES_AREA" with not null value), this value is displayed in visible filed of the combo, otherwise visible field is blank.
The field is optional.
This field is visible only if GlobalParameter.UseSalesAreaAsZone = True.

Localization code: GEN_ActiveSalesArea

## 📊 Appears In (1 diagrams)

- Custom: User setting
