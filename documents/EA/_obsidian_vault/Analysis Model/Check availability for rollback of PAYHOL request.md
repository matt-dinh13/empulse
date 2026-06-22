---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1619097
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check availability for rollback of PAYHOL request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

{ADD CSI-286 /}
This rule checks if Rollback function for the PAYHOL Loan Service Request is available.

Input:

	
- Loan Service Request


Output:

	
- Validation Message


Steps:

	
- System find Contract related to provided Loan Service Request.
	
- System check Contract status, if contract status is not in [Active (A), Signed (N), Paid-off (L)] then rule returns FALSE with message MSG_InvalidContractStatus (e.g. Action is not allowed in the current contract status).
	
- System checks if installment schedule of the contract has been already closed according to rule Check if Installment Schedule is Closed. If so, the rule returns FALSE with message MSG_INST_SCHEDULE_CLOSED.
	
- System checks if any active Payment holiday request or Early Repayment request or Change due date request or Loan restructuring request exists for the Contract, i.e. Loan Service Request related to the Contract with Current Status = CREATED, Request Type in (FER, PER, COP, CET, CHDDR, LRES, PAYHOL). if so, the rule returns FALSE with message MSG_ActiveServiceRequestExists (e.g. Active requests for ${ServiceName} already exists on the contract.) where ServiceName = found Loan Service Request.Service.Name
	
- System checks that provided Loan Service Request is the last executed Payment holiday request for the Contract, i.e.  Loan Service Request related to the Contract with Current Status = EXECUTED, Request Type in (PAYHOL) and Created date > Loan Service Request.Created date do NOT exist. If some LSR exists, the rule returns FALSE with message MSG_NotLastPayholRequest (e.g. Action is not possible because selected request is not the last executed Payment holiday request.)
	
- If no previous condition is used then the rule returns TRUE with no message.

## 🔗 Connections (1)

- ← Dependency: [[01.821 Rollback Loan Service Request service (UseCase 1869815)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-10922 (CSI-286) Rollback of executed Payhol request
- Logical: Contract Service Request Operation
- Use Case: Payment holiday rollback
