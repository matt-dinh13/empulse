---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules"
domain: "Analysis Model"
element_id: 1676456
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Blocking outgoing payments for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/Business rules

## 📝 Notes

Input:

	
- Contract


Algorithm:
System finds all Outgoing payments where 
OutgoingPayment->Contract = passed Contract
AND OutgoingPayment.Status is in (Unpaid, Waiting)
AND OutgoingPayment.isBlocked = false

(i.e. it blocks all unpaid payments on passed Contract)

For all found Outgoing payments the system sets OutgoingPayment.isBlocked = false. 

This rule applies also on all future payments, created during contract payment status = disable

## 🔗 Connections (2)

- → Dependency: [[REQ#2 Changes in (un)blocking payments for contract]]
- ← Dependency: [[{MOD}05.094 Block payments for a contract]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Operations with an outgoing payments from the contract detail
