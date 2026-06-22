---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Use Case Model"
domain: "Analysis Model"
element_id: 1878534
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Process SAI outgoing payments after disbursement confirmation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Use Case Model

## 📝 Notes

{ADD PAYM-5567} 

	
- If global parameter OutgoingPaymentWaitForRelatedContract = false, then use case ends.
	
- System checks if provided contract has related laon. If no related contract with type SAI is found (record does not exist ExtendedPropertyValue.ExtPropertyItemCode = RELATED_LOAN, ExtendedPropertyValue.Value = cash loan contract code ExtendedPropertyValue.ParentID = related loan ID  -> Contract.contractType = SAI), use case ends.
	
- System find outgoing payments for related contract with type SAI.
	
- If no outgoing payment is found or any payment is in status 'WAITING', use case ends.
	
- System switch all outgoing payment in status 'WAITING' to 'UNPAID'.
	
- System call UC 05.230 Process outgoing payments with created request with outgoingPayment, Bank Account from Payment channel created in Generate INS outgoing payment , automatically generated request ID (technical attribute) and skipUserNotification = TRUE as parameters.
	
- System sends RabbitMQ OutgoingPaymentNotification with given attributes (this message is consumed by BookNG)
	
- Use case ends.

## 🔗 Connections (1)

- → Dependency: [[{MOD}05.230 Process outgoing payments]]

## 📊 Appears In (2 diagrams)

- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: Process outgoing payments
