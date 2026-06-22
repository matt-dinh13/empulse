---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Business Rules"
domain: "Modules"
element_id: 1877156
diagrams: 6
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Perform incoming payment cancellation (INCPAY)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Business Rules

## 📝 Notes

{ADD MODULARIZATION}
This rule is for cancellation of incoming payment in INCPAY module and it was creatd as a copy of Perform incoming payment cancellation rule which is processed in BSL.

Input:

	
- IncomingPayment to cancel


Steps:

	
- System sets Status of IncomingPayment to “cancelled” and its Cancellation date on current date and time.
	
- System creates a copy of canceled IncomingPayment and modifies the following attributes:
- dataExchangeID =  the system generates a new unique string.
- sourceSystem =  INC_PAY
- originalPaymentID = null
- amount = (-1) * amount of canceled payment
- parentPayment = canceled payment


Note: New payment record has status “cancelled” too. 

If cancelled payment was paired to contract, the system sets IncomingPaymentToContract.active = false. If cancelled payment was paired, pairing records has been removed; status “paired” and association with contract remains. Newly created payment has association to same contract.
{/ADD}

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Use Case: Cancel incoming payment
- Use Case: Cancel incoming payments by type for contract on local request
- Use Case: Cancelation incoming payment on internal component request
- Use Case: Cancellation incoming payment manually
- Use Case: Cancellation incoming payment on external request
