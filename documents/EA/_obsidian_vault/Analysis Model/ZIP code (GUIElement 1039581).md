---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039581
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ ZIP code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ

## 📝 Notes

Looks for bank branches with selected ZIP code

Localization code:
ADR_ZipCode

LDM:
Bank_Branch->Bank_Branch_Address->Address.ZIP_Code, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[Optional (Action 1789801)]]
- → Dependency: [[ZIP Code]]
- → Dependency: [[{MOD}Address rules - KZ]]

## 📊 Appears In (1 diagrams)

- Custom: Find bank branch - KZ specific
