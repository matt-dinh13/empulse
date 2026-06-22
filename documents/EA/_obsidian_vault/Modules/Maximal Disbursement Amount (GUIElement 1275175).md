---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/CONS/User Interface"
domain: "Modules"
element_id: 1275175
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Maximal Disbursement Amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/CONS/User Interface

## 📝 Notes

LDM: SERVICE.ConsolidationService.MaximalDisbursementAmount

Displayed only if Service.ConsolidationService.ConsolidationType= WITH_DISBURSEMENT_AMOUNT

If hidden, it is set to zero.

Localization Code: SER_MaximalDisbursementAmount

## 🔗 Connections (3)

- → Dependency: [[Optional]]
- → Dependency: [[Integer _= 0]]
- → Dependency: [[Maximal Disbursement Amount _= Minimal Disbursement Amount]]

## 📊 Appears In (1 diagrams)

- Custom: Set Consolidation properties
