---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model"
domain: "Analysis Model"
element_id: 1701840
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Determine penalty due date for CHECKTL service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model

## 📝 Notes

This rule describes way of determination of due date for penalty Checking Terms of Loan service request
Input:

	
- Contract
	
- CHECKTL Service


	
- Term


Output:

	
- DueDate


Steps:

	
- InstallmentNumber = Term - CHECKTL Service.Penalty Due Date Related Installment
	
- DueDate = Due Date of Installment having Installment Number = InstallmentNumber and Active Flag = 1 and reference to Contract

If no installment is found, or a due date cannot be determined, an error is raised

## 🔗 Connections (1)

- ← Dependency: [[08.409 Evaluate Checking Terms of Loan Service]]

## 📊 Appears In (1 diagrams)

- Use Case: Checking Terms of Loan Service
