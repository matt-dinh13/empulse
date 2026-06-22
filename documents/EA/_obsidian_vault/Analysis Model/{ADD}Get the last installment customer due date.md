---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract operation API/Contract DDM operations/Use case model"
domain: "Analysis Model"
element_id: 1325281
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get the last installment customer due date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract operation API/Contract DDM operations/Use case model

## 📝 Notes

{ADD CLM-781 /}
The rule describes how to find installment at the related contract with the greatest customer due date.

Output:

	
- CustomerDueDateLast


Steps:

	
- System gets Max (Installment.Customer Due Date) from Installment having Active Flag = 1 and Installment Type in (STANDARD, EARLY_REPAID)
	
- If a record is found, set CustomerDueDateLast = Installment.Customer Due Date
	
- If no record is found, CustomerDueDateLast stays NULL

## 🔗 Connections (2)

- ← Dependency: [[01.776 Create contract DDM service]]
- ← Dependency: [[01.777 Update contract DDM service]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract DDM operations
