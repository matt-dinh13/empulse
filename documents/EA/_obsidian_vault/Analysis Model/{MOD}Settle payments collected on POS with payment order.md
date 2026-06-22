---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878556
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Settle payments collected on POS with payment order

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

Input:

	
- Outgoing Payment Order


Pre-condition:

	
- exactly one of the following relations is filled:
- Outgoing Payment Order->Salesroom 
- Outgoing Payment Order->Partner     


Pre processing:

	
- If Outgoing Payment Order->Salesroom is filled, the system gets all Payments On Pos where:
- related IncomingPayment.Status is not Canceled
- Status = NOT_SETTLED
- Salesroom = any of Outgoing Payment Order->OutgoingPayment->PaymentChannel->Salesroom
	
- Otherwise system gets all Payments On Pos where:
- related IncomingPayment.Status is not Canceled
- Status = NOT_SETTLED
- Salesroom = any of Outgoing Payment Order->Partner->Salesroom [where {DEL CBL-3607 PAYM-1428}currently valid BankAccount has set{/DEL} {ADD CBL-3607 PAYM-1428}Salesroom2BankAccount.{/ADD}ForPayments = false]
...i.e. gets all "not settled payments" collected on each POS related with referred Partner
If no such a Payment On Pos is found, the algorithm ends.
	
- System sorts a list of Payments On Pos by Payment On Pos.Collected When from the oldest one.




Cycle for list of Payments On Pos 

	
- Sets variable tempAmount = (Outgoing Payment Order.Amount - Payment On Pos->Incoming Payment.Amount)
	
- If tempAmount < 0, then the algorithm ends.
	
- System sets:
- Outgoing Payment Order.Amount = tempAmount
- new relation Payment On Pos->Outgoing Payment Order
- Payment On Pos.Status = SETTLED_AS_COUNTERPART
- IncomingPaymentOnPos.settledBy = system user
- IncomingPaymentOnPos.settledWhen = current

## 🔗 Connections (2)

- → Dependency: [[Requirement3 - Generate outgoing payment orders with settlements]]
- ← Dependency: [[{MOD}05.230 Process outgoing payments]]

## 📊 Appears In (1 diagrams)

- Use Case: Process outgoing payments
