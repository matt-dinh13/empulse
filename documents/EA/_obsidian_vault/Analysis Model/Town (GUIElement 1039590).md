---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039590
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Town

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ

## 📝 Notes

Looks for bank branches located in selected town

Localization code:
ADR_Town

LDM:
Bank_Branch->Bank_Branch_Address->Address.Town, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[Optional (Action 1789801)]]
- → Dependency: [[{MOD}Address rules - KZ]]
- → Dependency: [[Town]]

## 📊 Appears In (1 diagrams)

- Custom: Find bank branch - KZ specific
