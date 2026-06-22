---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client"
domain: "Analysis Model"
element_id: 1814762
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Safe guaranty

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client

## 📝 Notes

Button for showing the detailed information about the safety guaranty provided to the client.

Activates the 06.041 Show clients safe guaranty use case.

Enabled only if the client's CUID is known (i.e. Contract->Deal->Client_Snapshot->Client.CUID is not null).

Localization code:
CLI_SafeGuaranty

## 🔗 Connections (1)

- → Dependency: [[06.041 Show clients safe guaranty]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client
