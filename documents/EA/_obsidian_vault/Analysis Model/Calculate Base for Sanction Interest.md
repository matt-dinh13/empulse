---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878872
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Base for Sanction Interest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

Input:
- contract
-debt catalogue
- futurePercentageBase (optional); if no value is provided, it is set to 0 (used by Debt calculator)

Output:
- percentageBase

Steps:
Calculate percentageBase from the found record in Debt Catalogue as 

	
- overdue Principal
	
- futurePercentageBase


Get additionalBase as FinancialParameters.InterestRate
percentageBase = percentageBase * additionalBase

## 🔗 Connections (1)

- ← Dependency: [[Calculate Tariff Item amount for period from debt]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
