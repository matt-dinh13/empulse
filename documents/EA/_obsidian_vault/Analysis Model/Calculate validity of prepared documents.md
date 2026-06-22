---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model"
domain: "Analysis Model"
element_id: 1879418
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate validity of prepared documents

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model

## 📝 Notes

This rule calculates the date until which prepared documents are valid.
Input:
- maximumValidityOfDocuments (optional)
 

	
- If the maximumValidityOfDocuments is on input then system gets the value from attribute otherwise system gets value of parameter Product Profile.Maximum validity of prepared documents (in days) System adds the value to current date - 1.  It is validity of current documents.
	
- System gets maximum documents validity by the rule Calculate maximum validity of prepared documents.
	
- If validity of current documents (the value get is step 1) is greater then maximum documents validity (the value get in step 2), validity of current documents is set to value of maximum documents validity.
	
- System returns current documents validity.


E.g. If value of parameter=1, then maximum validity is current date.

## 🔗 Connections (3)

- ← Dependency: [[01.182 Prepare documentation manually]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- → Dependency: [[Calculate maximum validity of prepared documents]]

## 📊 Appears In (1 diagrams)

- Use Case: Prepare documentation to sign
