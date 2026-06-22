---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model"
domain: "Analysis Model"
element_id: 1701842
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Check if penalty is charged to CHECKTL service request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model

## 📝 Notes

This rule describes way of getting info whether a penalty has been charged based on CHECKTL service evaluation.
Input:

	
- Loan Service Request of CHECKTL type (LSR)
	
- Contract.Installments (I)


Output:

	
- Result [boolean]


Steps:

	
- Result = FALSE
	
- If LSR.Charged Fee To Request with Tariff Item reference exists
Find I.Installment Part by Tariff Item reference having I.Active Flag = 1 (i.e. active penalty in the current installment schedule)
- if an Installment Part is found, set Result = TRUE
	
- End

## 🔗 Connections (2)

- ← Dependency: [[08.407 Evaluate CheckTL fulfillment common]]
- ← Dependency: [[08.408 Set terms of loan fulfillment]]

## 📊 Appears In (1 diagrams)

- Use Case: Checking Terms of Loan Service
