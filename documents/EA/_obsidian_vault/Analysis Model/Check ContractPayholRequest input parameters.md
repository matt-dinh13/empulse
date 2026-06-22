---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1619099
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Check ContractPayholRequest input parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

The rule describes validation of the input parameters for getting ContractPayholRequest. 
Input parameters:

	
- contractNumber
	
- serviceId


Validation steps:

	
- check if Contract having Contract Code = contractNumber in Status (N, A, L) exists. If not then set ErrorDescription = MSG_SER_InvalidContract (e.g. "Contract is not allowed for the service") and the validation ends
	
- checks if serviceId is PAYHOL type and related to the provided Contract (i.e. Service is ServiceType = PAYHOL and it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_PAYHOL_NotAvailable (e.g. Contract Payment holiday is not available) and the validation ends
	
- check if Contract Installment schedule is not closed by Check if Installment Schedule is Closed rule. If the validation fails, set ErrorDescription = MSG_400 and the validation ends

## 🔗 Connections (2)

- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[01.796 Get ContractPayholRequest preview service]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: CBL-4047 (CLM-1820) Create API for PaymentHoliday
