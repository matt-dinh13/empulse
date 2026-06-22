---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features"
domain: "Analysis Model"
element_id: 1876168
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create request for insurance revenue payment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features

## 📝 Notes

This rule describes setting Outgoing payment properties of INR type (Insurance revenue).
Input:

	
- Insurance Contract


Output:

	
- createOutgoingPaymentRequest sturcture


Steps:
Set createOutgoingPaymentRequest structure as follow:

	
- contractCode = Insurance Contract.Loan Contract Code
	
- paymentType = 'INR' (Insurance revenue),
	
- paymentChannelId = 'NULL',


	
- amount = Insurance Period.Premium - Insurance Period.Net Premium

## 🔗 Connections (1)

- ← Dependency: [[11.122 Finalize insurance period (UseCase 1879773)]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance based on EOM message
