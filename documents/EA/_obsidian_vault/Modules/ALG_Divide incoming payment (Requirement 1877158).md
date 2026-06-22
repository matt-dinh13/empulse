---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Business Rules"
domain: "Modules"
element_id: 1877158
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ALG_Divide incoming payment

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Business Rules

## 📝 Notes

Algorithm describes splitting of one payment to two incoming payments
Input:

	
- Entered Amount
	
- Computed Amount


	
- Original Payment


Output:

	
- First Payment
	
- Second Payment



	
- Create 2 copies of Original Payment being divided.
	
- Set first new payment amount (INCOMING_PAYMENT.AMOUNT.VALUE) to EnteredAmount and create it as First Payment
	
- Set second new payment amount to Computed Amount and create it as Second Payment
	
- Set reference to Original Payment (INCOMING_PAYMENT.ORIGINAL_PAYMENT_ID) for the new First Payment and Second Payment.
	
- Set status of First Payment and Second Payment (INCOMING_PAYMENT.STATUS) to “active” and pairing status to “unpaired”.
	
- {DEL MDL}Sets paring reason to null{/DEL}


Note: Both newly created payments have to get a new unique Data exchange ID. It must not be copied from payment which was divided.

## 🔗 Connections (1)

- → Realisation: [[REQ 1_ New attribute of Incoming payment]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
