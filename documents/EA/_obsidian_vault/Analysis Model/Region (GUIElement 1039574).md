---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ"
domain: "Analysis Model"
element_id: 1039574
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Region

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface/KZ

## 📝 Notes

Region in which is branch located

Localization code:
ADR_Region

LDM:
Bank_Branch->Bank_Branch_Address->Address.Region, where Bank_Branch_Addres.Role = "BP (Business place)"

## 🔗 Connections (3)

- → Dependency: [[Region]]
- → Dependency: [[{MOD}Address rules - KZ]]
- → Dependency: [[Optional (Action 1789801)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank branch - KZ specific
