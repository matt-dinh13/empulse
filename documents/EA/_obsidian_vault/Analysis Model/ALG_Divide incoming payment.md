---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854279
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 ALG_Divide incoming payment

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

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
	
- Sets paring reason to null


Note: Both newly created payments have to get a new unique Data exchange ID. It must not be copied from payment which was divided.

## 🔗 Connections (1)

- ← Dependency: [[{DEL} 05.500 Create refund automatically]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: {DEL}Creating Refunds automatically
