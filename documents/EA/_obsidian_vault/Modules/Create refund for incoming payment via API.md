---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Use Case Model"
domain: "Modules"
element_id: 1877250
diagrams: 1
connections: 1
tags:
  - usecase
  - modules
---

# 🎯 Create refund for incoming payment via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Use Case Model

## 📝 Notes

{ADD PAYM-4601 PAYM-4602}
This use case allows refunding of an incoming payment via API. 

A typical use case is when BSL IS solves bulk overpayment cancellation via calling this API to refund an incoming payment, when INCPAY

	
- Either triggers refunding of the whole payment;
	
- Or divides the payment, pairs its one part back to the contract and created a refund for the other part (typically equal to the overpayment amount).

## 🔗 Connections (1)

- ← UseCase: [[External System (Actor 1877512)]]

## 📊 Appears In (1 diagrams)

- Use Case: Refund processing
