---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676459
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Unblocking outgoing payments for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 📝 Notes

Input:

	
- Contract


Algorithm:
System finds all Outgoing payments where 
OutgoingPayment->Contract = passed Contract
AND OutgoingPayment.isBlocked = true
AND ( OutgoingPayment->PaymentChannel->Salesroom = NULL 
           OR 
             (OutgoingPayment->PaymentChannel->Salesroom is not NULL AND OutgoingPayment->PaymentChannel->Salesroom.paymentStatus <> Disabled) ...i.e. this one particular condition is applied only if the payment channel is related to the salesroom (because the system can not unblock payments e.g. for blocked insurance companies) 
(i.e. it unblocks all blocked payments on passed Contract which was originated on salesroom with allowed payments and the payments themselves are not related with blocked salesroom)

For all found Outgoing payments the system sets OutgoingPayment.isBlocked = false 

{ADD PAYM-2929} 
When payment status is changed to Allowed, then system trigger AOPO event so OP is automatically disbursed, if conditions are met 
{/ADD}. 

Note: For revolving contracts there are found even outgoing payments related to their contract supplements (because they have still a direct link to a contract).

## 🔗 Connections (2)

- → Dependency: [[REQ#2 Changes in (un)blocking payments for contract]]
- ← Dependency: [[{MOD}05.093 Allow payments for a contract]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Operations with an outgoing payments from the contract detail
