---
type: Issue
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1877803
diagrams: 0
connections: 0
tags:
  - issue
  - _uncategorized
---

# 📄 Known limitations of insurance

> **Type**: Issue · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Offer calculation – fees/premium

	
- Fees based on whole principal cannot go to loan amount
	
- Fees based on simple principal cannot go to cash payment. It only pays for Standard (STD) algorithm.
	
- A fee F1 that goes to loan amount and is based on simple principal cannot be combined with a fee F2 that goes to cash payment and is based on the whole principal (circular dependency)
	
- Fees going to loan amount or cash payment cannot be based on annuity. It does not pay for Standard (STD) algorithm.
	
- CFR_CP offer calculation type cannot be used for product with insurance.  

These rules apply to Percentage Base as well as Limit Based On settings. For fees based on Sum insured these rules are applied also to sum insured calculation.

Offer calculation vs. 1st insurance period trigger
If insurance premium is dependent on the day of 1st insurance period start (e.g. current VN calculation) – first insurance period has to be triggered by the date which is known in time of offer calculation – otherwise calculated premium will not correspond to the factual insurance period.

Insurance contract print vs. 1st insurance period trigger
If 1st insurance period trigger is set to contract activation date, the exact date of insurance period cannot be printed on the contract.

Insurance period duration vs. 1st insurance period trigger
If insurance period duration is set DATE OF LAST REPAYMENT, this date will be estimated according to the insurance period start and number of terms.

Insurance period subject type vs service type scope
If an insurance service is of a service type with the scope: COMMODITY then the insurance program which the service is based on must have the GOODS subject type. Otherwise system can fail during creation of insurance contracts.
