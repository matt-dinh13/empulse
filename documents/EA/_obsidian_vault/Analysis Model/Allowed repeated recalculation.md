---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules"
domain: "Analysis Model"
element_id: 1755900
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed repeated recalculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules

## 📝 Notes

This element describes how system decides about applications for which the recalculation should be run.


Input:
- application

Output:
- TRUE/FALSE

Steps:

	
- System finds the Last scoring type and its scoring result for application
	
- If Contract->Scoring->Scoring_Result.Evaluation_Result = 'CAN'  for which exists Contract->Scoring->Scoring_Result.Additional_information with key outputData.isRequiredRbpScoring and value 1 then returns TRUE, otherwise returns FALSE
	
- If contract was approved (contractStatusTransition = S exists) and exists Contract->Scoring->Scoring_Result.Additional_information with key outputData.isRequiredRbpScoring and value 1 then returns TRUE, otherwise returns FALSE

## 🔗 Connections (1)

- → Dependency: [[Last scoring type]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
