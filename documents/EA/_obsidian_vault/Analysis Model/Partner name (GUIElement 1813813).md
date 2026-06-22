---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813813
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Name of the partner related to the salesroom, where the application was created.

LDM source:
 it is obtained based on calling HSIS module with code of partner on input

- where salesroom is got according to the rule Get salesroom by operation with respective Contract and Operation = 'APPLICATION_CREATED' on the input.


Localization code:
PAR_Name

## 🔗 Connections (1)

- → Dependency: [[Get salesroom by operation]]

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
