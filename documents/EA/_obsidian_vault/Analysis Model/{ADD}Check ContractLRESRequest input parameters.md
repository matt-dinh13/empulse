---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Business Rules"
domain: "Analysis Model"
element_id: 1762069
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Check ContractLRESRequest input parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Business Rules

## 📝 Notes

{ADD CLM-3060 /}
The rule describes validation of the input parameters for getting ContractLRESRequest. 
Input parameters:

	
- contractNumber
	
- serviceId


Validation steps:

	
- check if Contract having Contract Code = contractNumber in Status (N, A, L) exists. If not then set ErrorDescription = MSG_SER_InvalidContract (e.g. "Contract is not allowed for the service") and the validation ends
	
- checks if serviceId is LRES type and related to the provided Contract (i.e. Service is ServiceType = LRES and it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_LRES_NotAvailable (e.g. Contract Loan restructuring is not available) and the validation ends
	
- check if Contract Installment schedule is not closed by Check if Installment Schedule is Closed rule. If the validation fails, set ErrorDescription = MSG_400 and the validation ends

## 🔗 Connections (3)

- ← Dependency: [[01.812 Confirm ContractLRESRequest offer service (UseCase 1869797)]]
- ← Dependency: [[01.810 Create ContractLRESRequest service (UseCase 1869794)]]
- ← Dependency: [[01.811 Get ContractLRESRequest offer service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: CBL-9759 (CLM-3060) Create API for Loan restructuring
