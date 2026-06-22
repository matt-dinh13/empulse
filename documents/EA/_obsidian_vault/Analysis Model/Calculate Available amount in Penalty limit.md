---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Business Rules"
domain: "Analysis Model"
element_id: 1836325
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Available amount in Penalty limit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Business Rules

## 📝 Notes

Input:
- contract
- startDate, endDate for Penalty limit
- percentageRate for calculation of Penalty limit 

Steps:

	
- Calculate penaltyLimit = contract.FinancialParameters.ProvidedCreditAmount * PercentageRate.
	
- Calculate chargedPenaltyAmount as sum of all InstallmentPart(IP).Amount where
- IP.PartType = P (Penalty)
- IP.Installment.Active = TRUE
- IP.Installment.Contract = contract
- startDate <= IP.Installment.DueDate <= endDate
	
- Calculate amountAvailable = Maximum (penaltyLimit - chargedPenaltyAmount, 0)
	
- Return amountAvailable.

## 🔗 Connections (3)

- ← Dependency: [[Adjust penalty amount by limit]]
- → Dependency: [[REQ#1 - Change base for penalty limit calculation]]
- ← Dependency: [[04.150 Charge Penalty Registered Over Limit (UseCase 1836318)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Charging Penalty Over Limit
- Use Case: Fee services used by external system (Collection)
