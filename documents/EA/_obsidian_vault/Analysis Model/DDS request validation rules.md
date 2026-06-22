---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753476
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 DDS request validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

This rule describes list of validation are to be performed at request for direct debit (DDS). The validations are done for one 
request. Each failed validation means removing the request from processing.

Input:

	
- DDSRequestDto


Output:

	
- result code from DDSRequestProcessingResultTypeDto
...if all validation passed it returns DDSRequestProcessingResultTypeDto.OK


Validations (validation -> DDSRequestProcessingResultTypeDto.code):

	
- DirectDebittatement where DirectDebitStatement.ExternalRequestID does not exist within the system
-> DDS_WITH_SAME_REQ_ID_EXISTS
	
- Contract with Code = DDSRequestDto.code exist within the system 
-> CONTRACT_NOT_FOUND


	
- Contract status - check if the provided contract is in statuses (N (Signed), A (Active), L (Paid-off))  
-> WRONG_CONTRACT_STATUS


	
- payment channel of the contract is set to "Direct debit" (Contract.PaymentChannel(for Repayment, on TODAY))  
-> NO_VALID_DD_PAYMENT_CHANNEL
	
- If DDSRequestDto.type = AMOUNT then DDSRequestDto.amount is not null
-> AMOUNT_IS_NULL
	
- If DDSRequestDto.type = AMOUNT and Contract->DDM[currently active].regularPaymentAmount is not null, then 
Contract->DDM[currently active].regularPaymentAmount >=  DDSRequestDto.amount 
-> FIXED_AMOUNT_EXCEEDED

## 🔗 Connections (2)

- → Dependency: [[REQ#1 - DDS request processing]]
- ← Dependency: [[05.271 Process DDS request]]

## 📊 Appears In (1 diagrams)

- Use Case: DDS requests from external systems
