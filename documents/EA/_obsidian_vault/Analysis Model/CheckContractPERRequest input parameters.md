---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869771
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 CheckContractPERRequest input parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

{ADD CLM-1713 /}
The rule describes validation of the input parameters for getting ContractPERRequest. 
Input parameters:

	
- contractNumber
	
- serviceId
	
- clientPerAmount + currency
	
- perType


Validation steps:

	
- check if Contract having Contract Code = contractNumber in Status (N, A, L) exists. If not then set ErrorDescription = MSG_SER_InvalidContract (e.g. "Contract is not allowed for the service") and the validation ends
	
- checks if serviceId is PER type and related to the provided Contract (i.e. Service is ServiceType = PER and it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_PER_NotAvailable (e.g. Contract Partial Early Repayment is not available) and the validation ends
	
- check if Contract Installment schedule is not closed by Check if Installment Schedule is Closed rule. If the validation fails, set ErrorDescription = MSG_400 and the validation ends
	
- check if perType is set to LOWER_ANNUITY or SHORTER_TERM value and perType is allowed by PER service setting (serviceId.PER Type value is same as perType or is set to CHOICE). If the validation fails, set ErrorDescription = MSG_PER_InvalidPerType (e.g. "PER type is invalid.")
	
- check if clientAmount>=0 and currency is correct (e.g. the same as Credit Amount Currency in Financial Parameters), If the validation fails, set ErrorDescription = MSG_PER_InvalidClientAmount (e.g. "Client PER amount is invalid.")

## 🔗 Connections (2)

- ← Dependency: [[01.788 Create ContractPERRequest service (UseCase 1869817)]]
- ← Dependency: [[01.787 Get ContractPERRequest preview service (UseCase 1869808)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
- Use Case: PER request creation - externally
