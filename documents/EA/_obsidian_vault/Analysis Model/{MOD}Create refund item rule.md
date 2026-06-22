---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules"
domain: "Analysis Model"
element_id: 1877258
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Create refund item rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/Business Rules

## 📝 Notes

There is described a rule for creation Refund Item here
Input:

	
- IncomingPayment - Incoming Payment is to be refunded
	
- Contract Code


Steps:
Refund Item object is created as follow:

	
- RefundStatusType = 'NEW'
	
- reference to IncomingPayment (IncomingPaymentID)
	
- Contract Code = Contract Code


Similarly, there is created status change record in Refund Status Transition entity with reference to Refund Item object.

## 🔗 Connections (1)

- ← Dependency: [[CreateRefundRequest (Class 1880857)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: PAYM-1180 (CBL-711) - Inc. pay. modularization - ANA/DEV synchro Sprint 20
- Use Case: {DEL}Creating Refunds automatically
- Use Case: Creating Refunds manually
