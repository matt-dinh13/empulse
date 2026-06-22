---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Use Case"
domain: "Analysis Model"
element_id: 822658
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create refund item on external request rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Use Case

## 📝 Notes

There is described a rule for creation Refund Item on external request here
Input:

	
- RefundPaymentRequest


Steps:
Refund Item object is created as follow:

	
- Refund Type = OVERPAY
	
- Recipient Type = RefundPaymentRequest.typeOfRecipient
	
- Status = REFUNDED
	
- Amount = RefundPaymentRequest.amountOfRefund
	
- Contract Code = RefundPaymentRequest.contractCode
	
- Data exchange ID = RefundPaymentRequest.refundDataExchangeID
	
- Source System = RefundPaymentRequest.refundSource


Note: If the DataExchangeID has not been provided, the system generates the DataExchangeID as an unique identifier of the incoming payment across the systems (not DB ID).

Similarly, there is created status change record in Refund Status Transition entity with reference to Refund Item object.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}05.502 Process refund message]]

## 📊 Appears In (1 diagrams)

- Use Case: Process refund message
