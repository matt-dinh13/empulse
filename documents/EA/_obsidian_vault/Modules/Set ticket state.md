---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Mistake list"
domain: "Modules"
element_id: 1799308
diagrams: 2
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Set ticket state

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Mistake list

## 📝 Notes

A panel with list of buttons generated dynamically by ticket flow setting. 
It enables users according to their department and the current ticket status to change ticket to a new state run UC 10.060 Change ticket status
For information about buttons generating see UC 10.030 Show ticket detail

Localization code: TCK_SetStateLink

## 🔗 Connections (1)

- → Dependency: [[10.060 Change ticket status (UseCase 1865675)]]

## 📊 Appears In (2 diagrams)

- Custom: Mistake list
- Custom: Ticket detail - user interface
