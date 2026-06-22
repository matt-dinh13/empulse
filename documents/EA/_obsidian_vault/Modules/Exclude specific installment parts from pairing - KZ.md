---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1741400
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Exclude specific installment parts from pairing - KZ

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Input:
- Payment to pairing
- Installment parts to pairing


Algorithm:
System excludes Installment parts from Installment parts to pairing fulfilling all the following conditions:

- Installment Part -> Installment.Installment Type = EXTRAORDINARY

- Installment Part -> tariff item type in (PHIO, PHIM) or tariff item type is NULL

- Installment Part -> Installment.Recalculation Reason in (GP, PR, CT)

- Installment Part -> Installment.Due date  is grater than Payment to pairing.Deposit Date

## 🔗 Connections (1)

- → Generalization: [[Exclude specific installment parts from pairing]]

## 📊 Appears In (3 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pairing installment parts procedure
- Use Case: Pairing installment parts procedure
