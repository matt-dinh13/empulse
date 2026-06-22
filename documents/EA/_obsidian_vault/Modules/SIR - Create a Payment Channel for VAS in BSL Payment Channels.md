---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850561
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Create  a Payment Channel for VAS in BSL Payment Channels

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to create a payment channel used for accounting of the transaction
Input:

	
- contractCode
	
- salesroomCode


Output:

	
- paymentChannelId



	
- System calls POST ..bsl/api/vx/paymentchannels with parameters:
- contractCode = contractCode
- purpose = 'PP' (Premium Payment)
- salesroomCode = salesroomCode
- type = 'PBA' (Partner bank account)
	
- If the resultCode = "SUCCESS" is returned, system sets the returned dataExchangeId as paymentChannelId, otherwise the respective error is passed in the output

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
