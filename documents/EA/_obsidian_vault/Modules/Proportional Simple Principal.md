---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1878861
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Proportional Simple Principal

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

Calculation of Proportional Simple Principal (PSP) base type

PSP = Simple principal * length of loan / 365
- Simple Principal (SP) = Simple principal calculation 
- Length of loan (in days) = end due date - first due date
- end due date = first due date + number of terms (in days)

## 🔗 Connections (1)

- → Dependency: [[{MOD}Simple principal calculation]]

## 📊 Appears In (1 diagrams)

- Custom: Financial calculations
