---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information"
domain: "Analysis Model"
element_id: 1716421
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card pick-up region area 

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information

## 📝 Notes

The field contains values from HOMESIS REST API GET ( https://{environment}/homesis/restful/salesrooms/search?filter={appropriate parameters}) - related attribute from address part with type = 'SR_BUS'

The field is displayed only when Card delivery type=POS.

Localization code:  REL_CardPickupRegion 

LDM source/target: country specific

## 🔗 Connections (4)

- → Generalization: [[Region (GUIElement 1686576)]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Generalization: [[District (GUIElement 1653036)]]
- → Dependency: [[Region (Class 1461201)]]

## 📊 Appears In (1 diagrams)

- Custom: Card information - product AF
