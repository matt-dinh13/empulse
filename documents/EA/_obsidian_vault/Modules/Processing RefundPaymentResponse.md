---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 1223696
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Processing RefundPaymentResponse

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

This business rule describes processing of incoming JMS message (RefundPaymentResponse) from HoSel and its transformation into comm tables.

Input:

	
- RefundPaymentResponse


Algorithm:
System creates a record in the comm table RESULT290 (and sets result event in appropriate record in PAYIN220) according to the rule Create RESULT290 record from an incoming message with the following parameters:

	
- message object = RefundPaymentResponse
	
- Type message = 222
	
- message Id = RefundPaymentResponse.messageId
	
- message result code = RefundPaymentResponse.resultCode

As a result of the calling the algorithm the system obtains a record in CommResult. 

System finds a record in the comm table REFUNDPAY222 with Id = RefundPaymentResponse.messageId and sets its the following values:

	
- Processed = true
	
- Fail reason =  CommResult.Code if CommResult.IsError = true; null otherwise

## 🔗 Connections (3)

- ← Dependency: [[RefundPaymentResponse]]
- → Dependency: [[REQ#4 Message REFUNDPAY222 (closed-end loans)]]
- → Dependency: [[Create RESULT290 record from an incoming message]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: Refunds - Business rules
- Logical: Refunds - Communication Model
