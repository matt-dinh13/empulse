---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813831
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner code

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Code of the partner related to the salesroom, where the application was created.

LDM source:
it is obtained based on calling HSIS module with code of salesroom on input

- where salesroom is got according to the rule Get salesroom by operation with respective Contract and Operation = 'APPLICATION_CREATED' on the input.


Localization code:
PAR_Code

## 🔗 Connections (1)

- → Dependency: [[Get salesroom by operation]]

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
