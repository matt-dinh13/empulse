---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model"
domain: "Modules"
element_id: 1688934
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Debt calculator

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/User interface model

## 📝 Notes

If Contract.ProductType = CEL then call UC 01.478 Show supposed debt for CEL contract.
If Contract.ProductType = REL then call UC 01.479 Show supposed debt for REL contract.

Localization code: CON_DebtCalculator

## 🔗 Connections (2)

- → Dependency: [[01.478 Show supposed debt for CEL contract (UseCase 1876077)]]
- → Dependency: [[01.479 Show supposed debt for REL contract (UseCase 1876083)]]

## 📊 Appears In (1 diagrams)

- Custom: Debt catalogue detail
