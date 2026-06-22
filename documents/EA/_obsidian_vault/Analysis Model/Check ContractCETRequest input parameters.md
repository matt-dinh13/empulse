---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Use Case"
domain: "Analysis Model"
element_id: 1757673
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Check ContractCETRequest input parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Use Case

## 📝 Notes

The rule describes validation of the input parameters for getting ContractCETRequest. There are validated only parameters provided on input here so if a parameter value is not provided, the respective check is skipped.

	
- contractNumber
	
- serviceId
	
- variant
	
- decisiveDate
	
- reason
	
- notice


Validation steps:

	
- check if Contract having Contract Code = contractNumber in Status (N, A, L) exists. If not then set ErrorDescription = MSG_SER_InvalidContract (e.g. "Contract is not allowed for the service") and the validation ends
	
- checks if serviceId (i.e. Contract Service.External ID) is CET type and related to the provided Contract (i.e. Service is ServiceType = CET an it is related to an active Contract Service of the provided Contract). If not then set ErrorDescription = MSG_CET_NoAvailable (e.g. Contract Early Termination is not allowed) and the validation ends
	
- check if Contract (based on contractNumber on input) has active installments must exist. If not then set ErrorDescription = MSG_0400 and the validation ends
	
- check if provided variant is allowed for the Contract:
- If Contract.InitialTransactionType = POS then only variant (POS_CASH, POS_GOODS) are allowed
- If Contract.InitialTransactionType = CASH then only variant (CASH_CASH) is allowed
If the validation fails, set ErrorDescription = MSG_CET_InvalidVariant (e.g. "The provided variant is not allowed for the contract.") and the validation ends
	
- check if decisiveDate is valid date format and ContractSignDate <= decisiveDate <= current date (where ContractSignDate is date of the last Contract Status Transition of Contract to status Signed(N)).
If the validation fails, set ErrorDescription = MSG_CET_InvalidDecisiveDate (e.g. "Decisive date is invalid.") and the validation ends
	
- check if reason code matches a code in the Contract Status Transitions Reasons having Role_Type = 'USER' AND UsedDealType = 'CEL_contract' AND ContractTransitionType = K - 'Finished'. If not then set ErrorDescription = MSG_SER_InvalidReasonCode (e.g. "Reason code not found".) and the validation ends
	
- check the notice are printable characters with maximal length of 256. If not then set ErrorDescription = MSG_SER_InvalidNotice (e.g. "Notice has to consist printable character with maximal length of ${length}")

## 🔗 Connections (2)

- ← Dependency: [[01.783 Get ContractCETRequest preview]]
- ← Dependency: [[01.784 Create ContractCETRequest service]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract Early Termination request creation
