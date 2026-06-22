---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876171
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Create Premium Payment Channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

This rule describes creation Payment Channel for Premium Payment used to an insurance company disbursement.
Input:

	
- Insurance Contract

Output:

	
- PaymentChannelId


Steps:

	
- System get SalesroomCode from Insurance Program related to the Insurance Contract
	
- System creates Payment Channel by calling with CreatePaymentChannelRequest parameters:
- contractCode = Insurance Contract.Loan Contract Code
- paymentPurpose = 'PP' (Premium Payment) 
- salesroomCode = SalesroomCode
	
- If CreatePaymentChannelResponse.result = SUCCESS, set PaymentChannelId = paymentChannelId
	
- If CreatePaymentChannelResponse.result != SUCCESS, PaymentChannelId id NULL

## 🔗 Connections (1)

- ← Dependency: [[Create request for insurance premium payment]]

## 📊 Appears In (2 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Use Case: Insurance based on EOM message
