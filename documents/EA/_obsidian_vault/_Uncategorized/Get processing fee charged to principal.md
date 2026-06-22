---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1879626
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get processing fee charged to principal

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

{ADD IS-1950}
This rule describes how to get tariff items to be deducted from principal amount during COP calculation. 
Input:

	
- ContractId

Output:

	
- ProcessingFeeAmountInPrincipal


Steps:

	
- For the chosen Contract - get ProcessingFeeAmountInPrincipal from calculated Financial Parameters Items.Item Amount for Tariff Item Type with Tariff Item Usage = A(Standatd) a and with Tariff Item Type.Flag Type = TO_PRINCIPAL and  Tariff Item Type.Flag Type = WAIVE_IN_COP)
	
- Returns ProcessingFeeAmountInPrincipal
