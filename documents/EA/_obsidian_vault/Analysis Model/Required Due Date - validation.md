---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/User Interface"
domain: "Analysis Model"
element_id: 935690
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Required Due Date - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/User Interface

## 📝 Notes

Validation of entered CHDD_RequiredNexDueDate.
For CHDD_MinimalDueDate and CHDD_MaximalDueDate see rule Decisive dates for New Due Date.
 

	
- CHDD_MinimalDueDate <= CHDD_RequiredNexDueDate <= CHDD_MaximalDueDate (MSG_CHDD_ReqDueDateLimit)
	
- Day in CHDD_RequiredNextDueDate must be in interval <1, 28> (MSG_CHDD_ReqDueDayLimit)

## 🔗 Connections (2)

- → Dependency: [[Decisive dates for New Due Date]]
- ← Dependency: [[Required Next Due Date]]

## 📊 Appears In (1 diagrams)

- Custom: Change Due Date
