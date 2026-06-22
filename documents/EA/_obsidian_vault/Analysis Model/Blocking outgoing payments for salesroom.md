---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676457
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Blocking outgoing payments for salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 📝 Notes

Input:

	
- Salesroom


Algorithm:
If the Salesroom represents insurance company (i.e. Salesroom->Partner.PartnerType = IC) then the system finds all Outgoing payments where OutgoingPayment->PaymentChannel->Salesroom = passed Salesroom 
AND OutgoingPayment.Status is in (Unpaid, Waiting  AND OutgoingPayment.isBlocked = false
(i.e. it blocks only unpaid payments for insurance company)

{ADD CBL-14142}Otherwise (i.e. Salesroom does not represent insurance company) system checks table allowed_blocked_outpay_types.outgoing_payment_type:
-  if the table is empty, system finds all  Outgoing payments with OutgoingPayment.Status is in ('Unpaid', Waiting) AND OutgoingPayment.isBlocked = false 
-  if the table is NOT empty, system finds  Outgoing payments with OutgoingPayment.Status is in ('Unpaid', Waiting) AND OutgoingPayment.isBlocked = false and OutgoingPayment.TransactionType = BSL_BLOCKABLE_OUTPAY_TYPE.outgoing_payment_type{/ADD}
which meets also one of the following conditions:

	
- OutgoingPayment->Contract = Contract where Contract - Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED)->Salesroom = passed Salesroom 
(i.e. it blocks all unpaid payments (even for ins. companies) on contracts and supplement which were signed on passed Salesroom)


For all found Outgoing payments the system sets OutgoingPayment.isBlocked = true.

## 🔗 Connections (3)

- ← Dependency: [[Algorithm_ Set payment status for Salesroom to Disabled]]
- ← Dependency: [[Blocking outgoing payments for salesroom (Activity 1676473)]]
- → Dependency: [[REQ#1 Changes in (un)blocking payments for saleroom]]

## 📊 Appears In (3 diagrams)

- Activity: Blocking outgoing payments for salesroom
- Custom: Business rules
- Custom: Salesroom Management -  business Rules
