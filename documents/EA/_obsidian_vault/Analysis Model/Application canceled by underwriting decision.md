---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules"
domain: "Analysis Model"
element_id: 1755901
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Application canceled by underwriting decision

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules

## 📝 Notes

This object describes the steps, how system identifies whether the application was canceled based on the underwriting decision or not.

Input:
- ApplicationCode = identification code of an application

Output:
- ApplicationCanceledByUnderwriting = decision (boolean), whether the application was canceled based on the underwriting decision


Steps:

	
- System finds the Last scoring type and related scoring result for the respective application (Contract.Code=ApplicationCode) from the input.
	
- If Contract->Scoring->Scoring_Result.Evaluation_Result = 'CAN', then system returns TRUE. Otherwise FALSE is returned instead.

## 🔗 Connections (1)

- → Dependency: [[Last scoring type]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
