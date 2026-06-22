---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854272
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Perform incoming payment cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

Input:

	
- IncomingPayment to cancel


Steps:

	
- System sets Status of IncomingPayment to “cancelled” and its Cancellation date on current date and time.
	
- System creates a copy of canceled IncomingPayment and modifies the following attributes:
- dataExchangeID =  {DEL MODULARIZATION} the system generates a new unique string. {/DEL} {ADD MODULARIZATION}CancelIncomingPaymentRequest.negativePaymentCode{/ADD}
-  sourceSystem = {DEL MODULARIZATION} BSL {/DEL} {ADD MODULARIZATION}CancelIncomingPaymentRequest.negativePaymentSourceSystem{/ADD}
- originalPaymentID = null
- amount = (-1) * amount of canceled payment
- parentPayment = canceled payment


Note: New payment record has status “cancelled” too. If cancelled payment was paired, pairing records has been removed; status “paired” and association with contract remains. Newly created payment has association to same contract.

## 🔗 Connections (2)

- ← Dependency: [[TODO 05.400 Process incoming payment message]]
- ← Dependency: [[05.045 Cancel incoming payment (UseCase 1855717)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Cancellation incoming payment manually
