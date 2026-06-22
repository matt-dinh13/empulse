---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1619096
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Payment holiday service request validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

{DEL PBR-750 /}Replaced by Service Eligibility Criteria
This rule describes list of validation which are performed before the payment holiday service request is created. If a validation fails, the particular reason is logged for informing of user.
Input:

	
- Contract
	
- Payment Holiday Loan Service related to Contract (PHS)


Output:

	
- Validation Message


Validation steps (validated rule; logged Validation Message when validation fails):

	
- The Contract is in (Signed, Active) status; Validation Message = MSG_PHContractNotAllowedStatus (e.g. The contract is incorrect status for payment holiday request.)
	
- Count of (Loan Service Request having Request Type = PAYHOL and Current Status = CREATED for the Contract) = 0 ; Validation Message = MSG_ActiveServiceRequestExists (e.g. Active requests for ${ServiceName} already exists on the contract.) where ServiceName = Service.Name
	
- Installment.Due Date (of the standard active Installment having Installment Number = PHS.Moratorium) <= current date (e.g. Setting the parameter on 5 means, that after 5 standard installment passed the client can be eligible for this evaluation); Validation Message = MSG_MinTermPassedNotMatch (e.g. Minimal number of installments to be passed is ${MinimalTermPassed}.) where MinimalTermPassed = PHS.Moratorium
	
- Count of (active standard Installments having Due Date > current date + PHS.Min Days Before Installment) >= PHS.Minimal Term Future (e.g. Settings "2" means there has to be 2 installments to be service eligible); Validation Message = MSG_MinTermRemainNotMatch (e.g. Minimal number of remaining installment to apply service is ${MinimalTermFuture}.) where MinimalTermFuture = PHS.Minimal Term Future
	
- Maximal current DPD on the contract (get as current date minus Debt Catalogue.First Overdue Installment Due Date) <= PHS.DPD Max Limit;  Validation Message = MSG_SER_0001 (e.g. Contract ${ContractCode} has overdue installment with DPD above limit)
	
- Count of (Loan Service Request having Request Type = PAYHOL and Current Status = EXECUTED for the Contract) < PHS.Max Number Of Holidays ; ValidationMessage = MSG_MaxNumberServiceUsageExceeded (e.g. Maximal number of ${ServiceName} usage on the contract is ${MaxNumberOfServiceUsage}); where MaxNumberOfService = UsagePHS.Max Number Of Holidays

## 🔗 Connections (2)

- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Payment holiday request creation - via GUI
