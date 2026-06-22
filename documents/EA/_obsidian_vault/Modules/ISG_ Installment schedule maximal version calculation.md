---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1303996
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ISG: Installment schedule maximal version calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model

## 📝 Notes

This rule determines maximal version of active and inactive installments as:
MV = (MAX(MAX( I.Installment Version), MAX(I.Deactivated In Version)))

(I = Installment in schedule of processed contract)

## 🔗 Connections (1)

- ← Dependency: [[ISG01 Generate installment schedule]]

## 📊 Appears In (1 diagrams)

- Use Case: ISG - Generate installment schedule
