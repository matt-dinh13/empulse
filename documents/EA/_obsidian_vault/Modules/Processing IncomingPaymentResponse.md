---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 1224188
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Processing IncomingPaymentResponse

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

This business rule describes processing of incoming JMS message (IncomingPaymentResponse) from HoSel and its transformation into comm tables.

Input:

	
- IncomingPaymentResponse


Algorithm:
System creates a record in the comm table RESULT290 (and sets result event in appropriate record in PAYIN220) according to the rule Create RESULT290 record from an incoming message with the following parameters:

	
- message object = IncomingPaymentResponse
	
- Type message = 220
	
- message Id = IncomingPaymentResponse.messageId
	
- message result code = IncomingPaymentResponse.resultCode

As a result of the calling the algorithm the system obtains a record in CommResult enumeration. 


System finds a record in the comm table PAYIN220 with Id = IncomingPaymentResponse.messageId and sets its the following values:

	
- Processed = true
	
- Fail reason =  CommResult.Code if CommResult.IsError = true; null otherwise

## 🔗 Connections (3)

- ← Dependency: [[IncomingPaymentResponse]]
- → Dependency: [[REQ#2 Message PAYIN220 (closed-end loan and revolving loan)]]
- → Dependency: [[Create RESULT290 record from an incoming message]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: Incoming payments - Business rules
- Logical: Processing Incoming Payments - Communication Model
