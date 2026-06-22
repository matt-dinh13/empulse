---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/PH/Payment information PH/Card information PH"
domain: "Analysis Model"
element_id: 1653031
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card pickup salesroom

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/PH/Payment information PH/Card information PH

## 📝 Notes

The field contains salesrooms from the selected District allowing card pickuping, i.e. Salesrooms with Salesroom[.Card_pickup = 'TRUE']->Salesroom_Address[.Role = 'BP']->Address.District = value selected in the field District.
Displayed values: Salesroom.Name + ' (' + Concatenate address parts of Salesroom_Address with Role = 'BP' + ')'
The field is displayed only when Card delivery type=POS.
The field is disabled when the field District. is not filled in.

## 🔗 Connections (2)

- ← Dependency: [[Card pickup salesroom]]
- ← Generalization: [[Card pickup salesroom (GUIElement 1716423)]]

## 📊 Appears In (1 diagrams)

- Custom: Card information PH
