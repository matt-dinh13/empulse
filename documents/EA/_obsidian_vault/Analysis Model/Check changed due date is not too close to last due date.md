---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Business Rules"
domain: "Analysis Model"
element_id: 1863326
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check changed due date is not too close to last due date

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Business Rules

## 📝 Notes

The rule checks whether new changed due date does not come too early after the last (original) due date. If so then changed due date will be moved to keep required distance between the due dates.

Input:
- lastDueDate - last original due date to be paid
- changedDueDate - new proposed due date which follows after lastDueDate
- minDays - minimal days required between lastDueDate and changedDueDate

Output:
Result

Pre-condition: changedDueDate > lastDueDate

Steps:

	
- Check changedDueDate - lastDueDate >= minDays
- if not then return Result = "NOK"
	
- Return Result = "OK"

## 🔗 Connections (1)

- ← Dependency: [[Prepare change due date simulation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: CHDDR request creation - via GUI
