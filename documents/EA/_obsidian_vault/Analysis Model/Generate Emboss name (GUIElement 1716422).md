---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information"
domain: "Analysis Model"
element_id: 1716422
diagrams: 1
connections: 5
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generate Emboss name

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information

## 📝 Notes

When pressed the algorithm Default Emboss name is executed.
Hidden until all the values
- Card issue method
- firstName, 
- lastName
are not filled in.
Values firstName, lastName are taken from AppForm (section Personal data) according to country specific rules for mapping of names(1-6).

Displayed only if rule Emboss Name Setting Allowed with parameters:
- Contract
- Card issue method from the form 
returns True.

Localization: REL_GenerateEmbossName

## 🔗 Connections (5)

- ← Generalization: [[Generate Emboss name]]
- → Generalization: [[Generate Emboss name (GUIElement 1686575)]]
- → Dependency: [[Emboss Name Setting Allowed]]
- → Dependency: [[Default Emboss name]]
- → Generalization: [[Generate Emboss name (GUIElement 1653033)]]

## 📊 Appears In (1 diagrams)

- Custom: Card information - product AF
