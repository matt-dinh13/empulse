---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876177
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Create request for insurance premium payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

This rule describes setting Outgoing payment properties of INS type (Premium to insurance company):

Input:

	
- Insurance Contract
	
- Insurance Program


Output:

	
- createOutgoingPaymentRequest structure


Steps:

	
- Create Payment Channel (PaymentChannelId) for Premium Payment purpose to the Contract according to the Create Premium Payment Channel rule with Insurance Contract as parameter.
	
- If PaymentChannelId is not returned, scenario returns an error and ends
	
- Set createOutgoingPaymentRequest structure as follow:


	
- contractCode = Insurance Contract.Loan Contract Code


	
- paymentType = 'INS' (Premium to insurance company),
	
- amount = Insurance Period.Net Premium
	
- paymentChannelId = PaymentChannelId

## 🔗 Connections (2)

- → Dependency: [[Create Premium Payment Channel]]
- ← Dependency: [[11.122 Finalize insurance period (UseCase 1879773)]]

## 📊 Appears In (2 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Use Case: Insurance based on EOM message
