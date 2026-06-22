---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules"
domain: "Analysis Model"
element_id: 1817781
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Calculation of financial parameters for consolidation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Business Rules

## 📝 Notes

This rule describes, how system computes the financial parameters for consolidation.

Input:

	
- Contract
	
- FinancialParameterToBeCalculated



Calculations:
Particular calculation performed based on the FinancialParameterToBeCalculated from the input.

CreditAmountUsedForConsolidation

	
- CreditAmountUsedForConsolidation = NetCreditAmount

WHERE:
- NetCreditAmount = Contract->Offer Financial Parameters[Chosen = TRUE].NetCreditAmount


TotalConsolidationAmount
	
- TotalConsolidationAmount = sum of all Contract->Refinanced Contract[Active = TRUE].Amount


DisbursementAmount

	
- DisbursementAmount = CreditAmountUsedForConsolidation - TotalConsolidationAmount

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Prepare documentation to sign
