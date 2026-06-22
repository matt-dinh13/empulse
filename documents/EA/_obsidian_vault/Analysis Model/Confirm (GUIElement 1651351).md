---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651351
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Confirm

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

This button is default disable and invisible.
When radio Permanent blocking or Temporary blocking checked, button is visible, but still disable.
If one of the Temporary blocking reason is checked, channel is selected and Note is filled, button is enable.
If one of Permanent blocking reasons, channel is selected and Note is filled, button is enable too.

Localization code: GEN_Confirm

## 🔗 Connections (1)

- → Dependency: [[12.504 Block card (UseCase 1849982)]]

## 📊 Appears In (1 diagrams)

- Custom: Card block/unblock
