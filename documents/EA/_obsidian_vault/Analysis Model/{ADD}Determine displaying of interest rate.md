---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/Use Cases"
domain: "Analysis Model"
element_id: 1165506
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Determine displaying of interest rate

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Installment Plan for REL/Use Cases

## 📝 Notes

{ADD CBL-20/}
Input:
AnnualInterestRate - obtained from InstallmentPlanOverviewDto.annualInterestRate
MonthlyInterestRateVisible - determines whether Monthly Interest Rate is to be displayed instead of Annual Interest Rate on List of installment plans.

Output:
AnnualInterestRate or MonthlyInterestRate

Steps:

	
- Get MonthlyInterestRateVisible defined on the level of program code in system properties FieldVisibilityParameters.
	
- Determine interest rate to be displayed:
- if MonthlyInterestRateVisible = true then calculate MonthlyInterestRate = (AnnualInterestRate / 12) and round using Rounding rule with (MATH, 0.000001) as parameters and return MonthlyInterestRateVisible
- else return AnnualInterestRate


Note: MonthlyInterestRateVisible is defined on the level of program code for country configuration. Currently this configuration is used for Indonesia (ID).

Example:
5% / 12 = 0,4167% (after rounding)

## 🔗 Connections (1)

- ← Dependency: [[12.620 Show installment plan for REL (UseCase 1575225)]]

## 📊 Appears In (1 diagrams)

- Use Case: Installment plan for REL management
