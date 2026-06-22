---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Business Rules"
domain: "Analysis Model"
element_id: 1868142
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check RollbackServiceRequest input parameters

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Business Rules

## 📝 Notes

{ADD CSI-286 /}
The rule describes validation of the input parameters for RollbackServiceRequest. 
Input parameters:

	
- contractNumber
	
- serviceId
	
- loanServiceRequestId
	
- reason


Validation steps:

	
- checks if serviceId is related to the provided Contract (i.e. it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_Service_NotAvailable (e.g. Service is not available for the contract) and the validation ends
	
- checks if serviceId is in supported type (i.e. ServiceType related to serviceID is in [PAYHOL]). If not then set ErrorDescription = MSG_Service_NotSupported (e.g. Rollback is not supported for this service) and the validation ends
	
- check if loanServiceRequestId is related to the serviceId and it is in EXECUTED status (i.e. find Loan Service Request (LSR) where LSR.ExternalID=loanServiceRequestId and check that LSR.ContractService = ContractService(serviceId) and LSR.CurrentStatus = EXECUTED). If not then set ErrorDescription = MSG_LSR_NotAvailable (e.g. Loan service request is not available for the service) and the validation ends
	
- if related Contract Supplement exists for the LSR (LSR.Supplement is not null) then check that reason is defined and exist in the list of values from Contract Supplement Status Transitions Reason (Role_Type = 'USER', UsedDealType= 'REL contract' / 'CEL contract' according to the contract type, Transition Type = 'Rollback'). If not then set ErrorDescription = MSG_Reason_NotAvailable (e.g. Reason code is not available for the rollback) and the validation ends

## 🔗 Connections (1)

- ← Dependency: [[01.821 Rollback Loan Service Request service (UseCase 1869815)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-10922 (CSI-286) Rollback of executed Payhol request
- Logical: Contract Service Request Operation
