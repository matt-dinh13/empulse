---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676458
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Unblocking outgoing payments for salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 📝 Notes

Input:

	
- Salesroom


Algorithm:
If the Salesroom represents insurance company (i.e. Salesroom->Partner.PartnerType = IC) then the system finds all Outgoing payments where OutgoingPayment->PaymentChannel->Salesroom = passed Salesroom 
AND OutgoingPayment.isBlocked = true AND OutgoingPayment->Contract (Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED)->Salesroom.paymentStatus = Disabled
AND OutgoingPayment->Contract.PaymentStatus = Allowed
(i.e. it unblocks all blocked payments for passed Salesroom (insurance company) which are related to contracts which were signed on salesroom with allowed payments and even related contracts themselves have allowed payments)

Otherwise (i.e. Salesroom does not represent insurance company) system finds all Outgoing payments 
where OutgoingPayment.Status = 'Unpaid'
AND OutgoingPayment->Contract.PaymentStatus = Allowed
AND ( OutgoingPayment->PaymentChannel->Salesroom = NULL 
           OR 
             (OutgoingPayment->PaymentChannel->Salesroom is not NULL AND OutgoingPayment->PaymentChannel->paymentStatus = Disabled) 
...i.e. this one particular condition is applied only if the payment channel is related to the salesroom (because of blocked insurance companies and because of payment channels GBA without relation on salesroom)

AND which meets one of the following conditions: 

	
- OutgoingPayment->Contract = Contract where Salesroom (Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED) = passed Salesroom

(i.e. it unblocks all blocked payments on all contract which were signed on passed Salesroom and have allowed payments, but it does not allow payments for blocked insurance company)

For all found Outgoing payments the system sets OutgoingPayment.isBlocked = false

{ADD PAYM-2929} 
When payment status is changed to Allowed, then system trigger AOPO event so OP is automatically disbursed, if conditions are met 
{/ADD}.

## 🔗 Connections (3)

- ← Dependency: [[Algorithm_ Set payment status for Salesroom to Allowed]]
- ← Dependency: [[Unblocking outgoing payments for salesroom (Activity 1676480)]]
- → Dependency: [[REQ#1 Changes in (un)blocking payments for saleroom]]

## 📊 Appears In (3 diagrams)

- Activity: Unblocking outgoing payments for salesroom
- Custom: Business rules
- Custom: Salesroom Management -  business Rules
