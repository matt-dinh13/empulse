---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Use Case"
domain: "Analysis Model"
element_id: 822659
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel refund item on external request rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Process refund message/Use Case

## 📝 Notes

There is described a rule for cancellation of Refund Item on external request here
Input:

	
- RefundPaymentRequest


Steps:
Refund Item object (by RefundPaymentRequest.refundDataExchangeId) is changed as follow:

	
- Status = CANCELLED


Similarly, there is created status change record in Refund Status Transition entity with reference to Refund Item object.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}05.502 Process refund message]]

## 📊 Appears In (1 diagrams)

- Use Case: Process refund message
