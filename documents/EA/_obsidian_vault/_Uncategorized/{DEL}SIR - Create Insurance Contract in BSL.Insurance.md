---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1872746
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 {DEL}SIR - Create Insurance Contract in BSL.Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This rule describes how to create insurance contract based on a Sales Quote with VAS in the BSL.Insurance domain.

Input:

	
- CustomerId
	
- contractNumber
	
- serviceExternalId
	
- transactionSupplementId
	
- commodity (optional)


Output:

	
- LoanService object



	
- System calls POST ../bsl/openapi/vx/contractservices/insurance/ with parameters:
- customerId = CustomerId
- contractNumber = contractNumber
- transactionSupplementId = transactionSupplementId
- insuranceService.serviceExternalId = serviceExternalId
- insuredCommodity = commodity (if exists only)
- activateInsuranceYN": "false" -- insurance activation after the Transaction Supplement is successfully accepted
- notice = "Sales Quote with VAS"
	
- If Http 201 (Created) is returned, system passes loanServiceId from the created InsuranceContract into output, otherwise the respective error is returned

## 🔗 Connections (1)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
