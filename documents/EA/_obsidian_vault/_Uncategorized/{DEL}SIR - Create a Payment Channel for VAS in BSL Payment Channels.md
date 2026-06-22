---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1872742
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 {DEL}SIR - Create  a Payment Channel for VAS in BSL Payment Channels

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

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

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
