---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules"
domain: "Analysis Model"
element_id: 1860913
diagrams: 3
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Set Credit Limit Change Contract Supplement values rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Business Rules

## 📝 Notes

Extension of Contract Supplement for Credit Limit Change Contract Supplement:
Input:

	
- CurrentCreditLimit
	
- RequestedCreditLimit


	
- source
	
- estimatedEIR1 (optional) 


	
- estimatedEIR2 (optional) 


	
- Credit Limit Change Offer reference (optional)
	
- Campaign Offer (optional)


Algorithm:

	
- Original Credit Limit = CurrentCreditLimit
	
- Required Credit Limit = RequestedCreditLimit
	
- Estimated EIR1 = estimatedEIR1
	
- Estimated EIR2 = estimatedEIR2
	
- Source = source
	
- reference to Credit Limit Change Offer
	
- reference to Campaign Offer (optional)

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Change credit limit manually
- Use Case: Credit Limit Change via messaging - Use Case model
