---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1863325
diagrams: 4
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Check ContractCHDDRequest input parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

{ADD CLM-1856 /}
The rule describes validation of the input parameters for getting ContractCHDDRRequest. 
Input parameters:

	
- contractNumber
	
- serviceId
	
- installmentNumber (optional)
	
- newDueDay (optional)


Validation steps:

	
- check if Contract having Contract Code = contractNumber in Status (N, A, L) exists. If not then set ErrorDescription = MSG_SER_InvalidContract (e.g. "Contract is not allowed for the service") and the validation ends
	
- checks if serviceId is CHDDR type and related to the provided Contract (i.e. Service is ServiceType = CHDDR and it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_CHDDR_NotAvailable (e.g. Contract Change due date is not available) and the validation ends
	
- check if Contract Installment schedule is not closed by Check if Installment Schedule is Closed rule. If the validation fails, set ErrorDescription = MSG_400 and the validation ends

## 🔗 Connections (2)

- ← Dependency: [[01.794 Get ContractCHDDRequest preview service (UseCase 1869814)]]
- ← Dependency: [[01.795 Create ContractCHDDRequest service (UseCase 1869792)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Custom: CBL-5303 (CLM-1856) Create API for CHDDR request
- Use Case: CHDDR request creation - externally
