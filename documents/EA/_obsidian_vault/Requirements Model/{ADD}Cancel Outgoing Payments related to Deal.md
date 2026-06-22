---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3061	VAS - Cancel Deal method update - cancel out payment"
domain: "Requirements Model"
element_id: 1827555
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Cancel Outgoing Payments related to Deal

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3061	VAS - Cancel Deal method update - cancel out payment

## 📝 Notes

{ADD CSI-3061 /}
This rule describes how to cancel outgoing payment in BSL
Input:

	
- OutgoingPaymentList



	
- For each PaymentCode in OutgoingPaymentList, system
call https://bsl.<environment>/bsl/api/outgoingpayments/cancel?paymentCode={PaymentCode}
evaluates the call response:
- if HTTP 200 (OK) and result <> SUCCESS, or HTTP <> 200, system logs the error
- it is continued with next PaymentCode
	
- Return to calling use case.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}11.080 Cancel Deal (VAS) (UseCase 1829615)]]

## 📊 Appears In (1 diagrams)

- Use Case: VAS - Cancel Deal method update - cancel out payment
