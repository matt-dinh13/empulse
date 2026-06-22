---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/Payment Discipline/User Interface"
domain: "Modules"
element_id: 1562072
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Last DPD Amount Tolerance

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/Payment Discipline/User Interface

## 📝 Notes

LDM: *.PaymentDisciplineParameters.LastDPDAmountTolerance
Displayed only if DifferToleranceForLastDPD = true

Localization Code: SER_LastDPDToleranceAmount

## 🔗 Connections (3)

- → Dependency: [[Not greater than Small Underpayment]]
- → Dependency: [[Financial amount _= 0 (Requirement 1789776)]]
- → Dependency: [[Tolerance for Last DPD - cross validation]]

## 📊 Appears In (1 diagrams)

- Custom: Edit Payment Discipline Parameters
