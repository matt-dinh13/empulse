---
type: GUIElement
stereotype: "checkbox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface"
domain: "Analysis Model"
element_id: 1761566
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ DD Client

> **Type**: GUIElement · **Stereotype**: «checkbox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface

## 📝 Notes

Looks for banks called DD Client which are not able to handle direct debits for themselves. DD Client is every bank, which is not DD Provider (for definition see DD Provider selection).

Localization code:
ACC_BankDDClientSelection

## 🔗 Connections (2)

- → Dependency: [[DD Provider or DD Client or DD provider type must be selected]]
- → Dependency: [[Find bank fields editability]]

## 📊 Appears In (1 diagrams)

- Custom: Find bank
