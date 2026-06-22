---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information"
domain: "Analysis Model"
element_id: 1716429
diagrams: 1
connections: 7
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Emboss name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information

## 📝 Notes

Initially disabled and set to empty string.
- After pressing of button Generate Emboss name it is pre-filled and enabled (see the button description).
- Enabled if some emboss name has been already saved (i.e. Temporary Application.TempAppl Card.Emboss name is not null).

Displayed only if rule Emboss Name Setting Allowed with parameters:
- Contract
- Card issue method from the form 
returns True.

Localization code: REL_CardEmbossName

LDM source/target: Temporary_Application->TempAppl_Card.Emboss_Name

## 🔗 Connections (7)

- ← Generalization: [[Emboss name]]
- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Generalization: [[Emboss name (GUIElement 1653035)]]
- → Dependency: [[Emboss name - validation rules]]
- → Dependency: [[Default Emboss name]]
- → Dependency: [[Length _= 25]]
- → Generalization: [[Emboss name (GUIElement 1686568)]]

## 📊 Appears In (1 diagrams)

- Custom: Card information - product AF
