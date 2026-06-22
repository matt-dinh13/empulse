---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1798275
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Validate payment channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This rule defines which attributes in payment channels are required in order to perform correct disbursement of money.

If paymentChannel.purpose = RE
Sytem ignore validation for payment channel with such purpose

If paymentChannel.type = CA
System requires presence of paymentChannel.ExternalCardId

If paymentChannel.type = GBA, {ADD PAYM-5301} RTA {/ADD}
System requires following attributes:

	
- paymentChannel.bankAccountNumber
	
- paymentChannel.RecipientName
	
- paymentChannel.BankCode


If paymentChannel.type = PBA,SBA
System requires following attributes:

	
- paymentChannel.bankAccountNumber
	
- paymentChannel.RecipientName
	
- paymentChannel.BankCode
	
- PaymentChannel.SalesroomCode


{ADD CBL-11254 PAYM-3599}
If paymentChannel.type = OC
System requires presence of paymentChannel.targetContract
