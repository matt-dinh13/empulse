---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827549
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Create Payment Channel for Premium payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-2967 /}
This rule describes creation Payment Channel for Premium Payment used to an insurance company disbursement.
Input:

	
- InsuranceContract
	
- InsuranceProgram

Output:

	
- PaymentChannelId


Steps:

	
- System get SalesroomCode from InsuranceProgram related to the InsuranceContract
	
- System creates Payment Channel by calling PaymentChannelWS.CreatePaymentChannel with the request parameters:
- contractCode = InsuranceContract.Loan Contract Code
- paymentPurpose = 'PP' (Premium Payment)
- salesroomCode = SalesroomCode
	
- If CreatePaymentChannelResponse.result = 'SUCCESS', set PaymentChannelId = returned dataExchangeId
	
- If CreatePaymentChannelResponse.result <> 'SUCCESS', PaymentChannelId id NULL

## 🔗 Connections (1)

- ← Dependency: [[{ADD}11.076 Finalize Deal Period]]

## 📊 Appears In (2 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
