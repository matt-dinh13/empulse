---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication tickets"
domain: "Modules"
element_id: 1801242
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Assign ticket

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication tickets

## 📝 Notes

Assigning a ticket to a communication record
It runs 07.110 Assign ticket to communication v2 use case
Button is available only if valid communication record identifier (it exists in COMMUNICATION_RECORD.CODE) was used as input parameter during startup of use case.

Localization code: TIC_Assign

## 🔗 Connections (1)

- → Dependency: [[07.110 Assign ticket to communication v2]]

## 📊 Appears In (1 diagrams)

- Custom: List of communication tickets panel v2
