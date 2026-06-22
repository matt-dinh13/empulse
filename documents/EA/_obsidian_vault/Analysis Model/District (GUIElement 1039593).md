---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039593
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ District

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ

## 📝 Notes

Looks for bank branches located in selected district

Localization code:
ADR_District

LDM:
Bank_Branch->Bank_Branch_Address->Address.District, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[District (Action 865869)]]
- → Dependency: [[Optional (Action 1789801)]]
- → Dependency: [[{MOD}Address rules - KZ]]

## 📊 Appears In (1 diagrams)

- Custom: Find bank branch - KZ specific
