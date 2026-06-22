---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039575
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ ZIP code suffix

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ

## 📝 Notes

Looks for bank branches with selected ZIP code suffix

Localization code:
ADR_Landmark

LDM:
Bank_Branch->Bank_Branch_Address->Address.Landmark, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[{MOD}Address rules - KZ]]
- → Dependency: [[ZIP Code suffix]]
- → Dependency: [[Optional (Action 1789801)]]

## 📊 Appears In (1 diagrams)

- Custom: Find bank branch - KZ specific
