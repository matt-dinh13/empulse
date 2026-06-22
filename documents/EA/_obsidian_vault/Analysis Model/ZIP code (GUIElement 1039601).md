---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039601
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

ZIP code of branch

Localization code:
ADR_ZipCode

LDM:
Bank_Branch->Bank_Branch_Address->Address.ZIP_Code, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[ZIP Code]]
- → Dependency: [[Optional (Action 1789801)]]
- → Dependency: [[{MOD}Address rules - KZ]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank branch - KZ specific
