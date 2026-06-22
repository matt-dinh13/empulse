---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827561
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Create Outgoing Payment by calling BSL API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-2967 /}
This rule describes creation Payment Channel for Premium Payment used to an insurance company disbursement.

Output:

	
- PaymentCode



	
- System calls OutgoingPaymentsWS.createOutgoingPayment with request parameters as follow:
- contractCode = InsuranceContract.Loan Contract Code
- paymentType = paymentType (Premium to insurance company)
- amount = NetRevenueShare
- paymentChannelId = PaymentChannelId
	
- If CreateOutgoingPaymentResponse.result = 'SUCCESS', set PaymentCode = CreateOutgoingPaymentResponse.outgoingPaymentCode, else PaymentCode is NULL

## 🔗 Connections (1)

- ← Dependency: [[{ADD}11.076 Finalize Deal Period]]

## 📊 Appears In (2 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
