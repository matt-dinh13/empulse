---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878536
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Generate participated payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

Input parameters:

	
- Amount
	
- OutgoingPaymentType
	
- Contract


Generate participated payment

	
- Create new payment (OUTGOING_PAYMENT)
	
- Set payment amount (OUTGOING_PAYMENT.AMOUNT) as payment Amount provided as algorithm parameter
	
- Set payment status (OUTGOING_PAYMENT.STATUS) to “Paid”
	
- Set payment type (OUTGOING_PAYMENT.PAYMENT_TYPE) as payment type provided as algorithm parameter
	
- Set payment contract (OUTGOING_PAYMENT.CONTRACT) to provided contract


	
- Set payment creation time (OUTGOING_PAYMENT.CREATION_TIME) to now

## 🔗 Connections (3)

- → Dependency: [[Generate outgoing payment code]]
- → Dependency: [[Requirement3 - Not generate outgoing payment orders if there is an unprocessed DCH request]]
- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate and Cancel outgoing payments
