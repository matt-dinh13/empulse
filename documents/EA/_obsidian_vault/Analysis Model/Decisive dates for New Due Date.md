---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/User Interface"
domain: "Analysis Model"
element_id: 935688
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Decisive dates for New Due Date

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/User Interface

## 📝 Notes

Evaluates next due date and calculates limits for new due date.
 

	
- CHDD_LastDueDate - due date of the last previous installment where Installment.DueDate < = current date and InstallmentType is in (STANDARD, EARLY_REPAID)


	
- CHDD_NextDueDate = due date of the next installment after the CHDD_LastDueDate
	
- CHDD_MinimalDueDate = Maximum [current date, (CHDD_LastDueDate + ChangeOfDueDateService.MinDaysAfterLastDueDate)]
If Day of (CHDD_MinimalDueDate) > 28 then set CHDD_MinimalDueDate to the 1st day of the next months.


	
- CHDD_MaximalDueDate = CHDD_LastDueDate  + ChangeOfDueDateService.MaxDaysAfterLastDueDate
{ADD TID-2970}CHDD_MaximalDueDate = Maximum(CHDD_MaximalDueDate, CHDD_MinimalDueDate){/ADD}
If Day of (CHDD_MaximalDueDate) > 28 then set day of CHDD_MaximalDueDate to 28.

## 🔗 Connections (3)

- ← Dependency: [[Required Due Date - validation]]
- ← Dependency: [[Change Due Date]]
- ← Dependency: [[{MOD}08.060 Change Due Date]]

## 📊 Appears In (2 diagrams)

- Custom: Change Due Date
- Use Case: Change Due Date processing
