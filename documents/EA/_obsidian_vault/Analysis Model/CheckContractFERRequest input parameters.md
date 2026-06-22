---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case"
domain: "Analysis Model"
element_id: 1807831
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 CheckContractFERRequest input parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case

## 📝 Notes

The rule describes validation of the input parameters for getting ContractFERRequest. 
Input parameters:

	
- contractNumber
	
- serviceId
	
- expectedDueDate


Validation steps:

	
- check if Contract having Contract Code = contractNumber in Status (N, A, L) exists. If not then set ErrorDescription = MSG_SER_InvalidContract (e.g. "Contract is not allowed for the service") and the validation ends
	
- checks if serviceId is FER type and related to the provided Contract (i.e. Service is ServiceType = FER an it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_FER_NotAvailable (e.g. Contract Full Early Repayment is not allowed) and the validation ends
	
- check if Contract Installment schedule is not closed by Check if Installment Schedule is Closed rule. If the validation fails, set ErrorDescription = MSG_400 and the validation ends
	
- check if expectedDueDate is valid date format. If the validation fails, set ErrorDescription = MSG_FER_InvalidExpectedDueDate (e.g. "Expected due date is invalid.").

## 🔗 Connections (3)

- → Dependency: [[Check if Installment Schedule is Closed]]
- ← Dependency: [[01.785 Get ContractFERRequest preview (UseCase 1869811)]]
- ← Dependency: [[01.786 Create ContractFERRequest service (UseCase 1869805)]]

## 📊 Appears In (1 diagrams)

- Use Case: Full early repayment request - externally
