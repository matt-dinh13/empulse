---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813812
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Status description

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Sub-status of the application (additional description for the application status).

Visible only if the application is in different status than Rejected or Canceled (i.e. Contract.Status not in ('D', 'T')).

LDM source:
Contract.SubStatus

Localization code:
CON_StatusDescription

## 🔗 Connections (1)

- → Dependency: [[SubStatus Description Type]]

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
