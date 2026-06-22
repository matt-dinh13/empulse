---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 815970
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Create RESULT290 record from an incoming message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

Input:

	
- message object (e.g. IncomingPaymentResponse)
	
- Type message (e.g. 220, 222 etc.) 
	
- message Id
	
- message result code


Algorithm:
1. System finds a record in CommResult according to the rule Determinate RESULT290 result code from an incoming message (passed is name of the message object and message result code).

2. System creates a record in comm table RESULT290 with the following values:

	
- Id = automatically generated identifier
	
- Id record = message Id
	
- Type message = Type message
	
- Result code = found record in CommResult 
	
- Time stamp = current
	
- Note = null
	
- Error = "n (New)" if CommResult.IsError = true; null otherwise 


Output:

	
- found record in CommResult

## 🔗 Connections (3)

- → Dependency: [[Determinate RESULT290 result code from an incoming message]]
- ← Dependency: [[Processing RefundPaymentResponse]]
- ← Dependency: [[Processing IncomingPaymentResponse]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: Business rules
- Custom: Incoming payments - Business rules
- Custom: Refunds - Business rules
