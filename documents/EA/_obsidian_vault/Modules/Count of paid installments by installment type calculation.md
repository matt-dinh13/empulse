---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877483
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Count of paid installments by installment type calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Calculation of count of paid installments by installment type  

Takes into account debt tolerance (system property PARAM_DEBT_TOLERANCE_AMOUNT).
{ADD IS-2528} {IN only} For the last installment of the contract property DEBT_TOLERANCE_AMOUN_LAST_INST is used.{/ADD}

Input
Contract

Algorithm

	
- System counts number of Installments [Active] for which sum(Installment Part.Amount - Amount Paid) <= PARAM_DEBT_TOLERANCE_AMOUNT {ADD IS-2528} {IN only} (DEBT_TOLERANCE_AMOUN_LAST_INST for the last installment of the contarct){/ADD} grouped by Installment.Installment Type


Output
List of (Installment Type , count of paid installments) pairs

## 🔗 Connections (1)

- → Aggregation: [[Debt full info calculations]]

## 📊 Appears In (1 diagrams)

- Custom: Debt full info calculations
