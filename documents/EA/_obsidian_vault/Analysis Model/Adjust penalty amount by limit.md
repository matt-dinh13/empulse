---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Business Rules"
domain: "Analysis Model"
element_id: 1836326
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Adjust penalty amount by limit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Business Rules

## 📝 Notes

Input:
- chargeID
- contract
- chargeDate
- tariffItem (reference)
- amountOriginal
- relatedInstallment (reference)

Output:
- amountAdjusted

Steps:

	
- Evaluate contractSignDate (date of the last transition of contract to status Signed(N)) and find parameters (Penalty Limit Parameters) for evaluation of penalty limit, which was valid on contractSignDate. 
If no parameters found then return amountOriginal.
	
- Calculate startDate and endDate of Penalty Limit Period by the rule Evaluate Period for Penalty limit with parameters:
- contract
- PenaltyLimitParameters.penaltyLimitPeriodType
	
- Calculate amountAvailable according to the rule Calculate Available amount in Penalty limit with parameters:
- contract
- startDate, endDate
- PenaltyLimitParameters.percentageRate
	
- Calculate amountAdjusted = Minimum (amountAvailable, amountOriginal)
	
- Calculate amountUncovered = amountOriginal - amountAdjusted
	
- If amountUncovered > 0 then add record into Penalty Over Limit entity as follows:
- ChargeID = input.chargeID
- OriginalChargeDate = input.chargeDate
- TariffItem = input.tariffItem
- Installment = input.relatedInstallment
- Amount = amountUncovered
- UnchargedAmount = amountUncovered
	
- Return amountAdjusted.

## 🔗 Connections (3)

- → Dependency: [[Evaluate Period for Penalty limit]]
- → Dependency: [[Calculate Available amount in Penalty limit]]
- ← Dependency: [[{MOD}04.140 Charge fees]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Fee services used by external system (Collection)
