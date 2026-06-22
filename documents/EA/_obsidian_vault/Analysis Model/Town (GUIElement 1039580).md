---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039580
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

Town in which is branch located

Localization code:
ADR_Town

LDM:
Bank_Branch->Bank_Branch_Address->Address.Town, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[Town]]
- → Dependency: [[Optional (Action 1789801)]]
- → Dependency: [[{MOD}Address rules - KZ]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank branch - KZ specific
