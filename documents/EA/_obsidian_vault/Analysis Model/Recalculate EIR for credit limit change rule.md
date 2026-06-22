---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules"
domain: "Analysis Model"
element_id: 1860911
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Recalculate EIR for credit limit change rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules

## 📝 Notes

This business rule describes the recalculation of EIR for credit limit change on REL account. 

Input:

	
- Contract
	
- Required credit limit


Steps:

	
- If Required credit limit = 0, then estimatedEIR1 = 0 and estimatedEIR2 = 0 and the algorithm ends.
	
- System gets PIR = Contract->Financial Parameters->ContractPresentedInterestRate and sets:
- estimatedEIR1 as PIR.Value where PIR.PresentedIRSetting.Case = STANDARD and PIR.PresentedIRSetting.Order = 1
- estimatedEIR2 as PIR.Value where PIR.PresentedIRSetting.Case = STANDARD and PIR.PresentedIRSetting.Order = 2


Output:

	
- estimatedEIR1
	
- estimatedEIR2

## 🔗 Connections (4)

- → Dependency: [[REQ#3 Create credit limit change manually]]
- ← Dependency: [[13.450 Process supplement approval result (UseCase 1865654)]]
- ← Dependency: [[13.052 Process account notification for credit limit change (UseCase 1877198)]]
- ← Dependency: [[13.060 Create change credit limit request manually (UseCase 1877196)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Change credit limit manually
- Use Case: Credit Limit Change via messaging - Use Case model
