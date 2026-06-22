---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818737
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Save scoring data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

- System saves additional scoring information based on Scoring path setting into Contract->Scoring->Scoring_Result.Additional_information where .Key is the fullpath and .Value is the value stored in the fullpath.
	
- If value *.limit.cashAvailableLimitRate is returned in Last valid LAP fullpathes, it is saved into Offer Financial Parameter.CashAvailableLimitRate (simple update, not creating of a new version of OFP).


See country specific rules for saving other LAP vector data:
- Save scoring data - IN

## 🔗 Connections (3)

- → Dependency: [[Last valid LAP fullpathes]]
- ← Generalization: [[{MOD}Save scoring data - IN]]
- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Receive evaluation results
