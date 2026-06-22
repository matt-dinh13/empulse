---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877836
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Calculation of interest rate derived from ACT/365 per year (R365_Y) 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type R365_Y

Input: 
- Presented IR Parameters (PIRP)
- PIRP.PresentedIRCashFlow (CFlow)

Output: 
- PresentedIRValue (percentage)

Steps:
RepaymentCashFlow (Due Date, Annuity Amount) = PIRP.PresentedIRCashFlow.(Date, Amount) (order by Date ascending)
WithdrawalAmount = RepaymentCashFlow.Amount where RepaymentCashFlow.Date = PIRP.LoanProvidingDate
// Removal of WithdrawalAmount
Delete record in RepaymentCashFlow where RepaymentCashFlow.Date = PIRP.LoanProvidingDate

PresentedIRValue is calculated according to R365_Y algorithm with parameters
- Credit Amount = WithdrawalAmount
- LoanProvidingDate = PIRP.LoanProvidingDate 
- RepaymentCashFlow
- IRGuess = PIRP.Presented IR Parameters.NominalInterestRate / 365

## 🔗 Connections (2)

- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]
- → Dependency: [[R365_Y algorithm]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
