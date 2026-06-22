---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information"
domain: "Analysis Model"
element_id: 1716423
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card pickup salesroom

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information

## 📝 Notes

The field contains salesrooms from the selected Areas  allowing card pickuping, where Area is country specific definition 
Displayed values: Salesroom.Name + ' (' + Concatenate address parts of Salesroom_Address with Role = 'BP' + ')' the information is retrieved from HOMESIS REST API GET ( https://{environment}/homesis/restful/salesrooms/search?filter={appropriate parameters}) - name+address part with type = 'SR_BUS'
The field is displayed only when Card delivery type=POS.
The field is disabled when the field  Card pick-up area is not filled in.

Localization code: REL_CardPickupSalesroom

LDM source/target: Temporary_Application->TempAppl_Card->Salesroom

## 🔗 Connections (3)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Generalization: [[Card pickup salesroom (GUIElement 1686572)]]
- → Generalization: [[Card pickup salesroom (GUIElement 1653031)]]

## 📊 Appears In (1 diagrams)

- Custom: Card information - product AF
