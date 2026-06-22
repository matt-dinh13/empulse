---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813828
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Salesroom business model

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Business model of the salesroom, where the application was created.

LDM source:
it is obtained based on calling HSIS module with code of salesroom on input
- where salesroom is got according to the rule Get salesroom by operation with respective Contract and Operation = 'APPLICATION_CREATED' on the input.


Localization code:
SAL_BusinessModel

## 🔗 Connections (1)

- → Dependency: [[Get salesroom by operation]]

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
