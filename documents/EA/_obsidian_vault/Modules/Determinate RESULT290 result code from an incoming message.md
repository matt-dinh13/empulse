---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments"
domain: "Modules"
element_id: 815971
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Determinate RESULT290 result code  from an incoming message 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2204 - OBS interface - Incoming payments

## 📝 Notes

Input:

	
- message name (e.g. IncomingPaymentResponse)
	
- message result code (e.g. CONTRACT_NOT_FOUND)


Algorithm:

	
- System finds a record in CommResultTransformation enumeration where MessageName = message name AND MessageResultCode = message result code.


Output:

	
-    a record in CommResult referenced in CommResultTransformation.ResultCode

## 🔗 Connections (1)

- ← Dependency: [[Create RESULT290 record from an incoming message]]

## 📊 Appears In (2 diagrams)

- Custom: BRR-2204 - OBS interface - Incoming payments
- Custom: Business rules
